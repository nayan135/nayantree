"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  color: string
}

interface Meteor {
  x: number
  y: number
  length: number
  speed: number
  angle: number
  opacity: number
}

export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const meteorsRef = useRef<Meteor[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
      initMeteors()
    }

    const initStars = () => {
      const count = Math.floor((canvas.width * canvas.height) / 1800)
      starsRef.current = []

      const colors = ["#ffffff", "#f0f8ff", "#add8e6", "#87cefa"]
      for (let i = 0; i < count; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.2 + 0.3,
          speed: Math.random() * 0.03 + 0.01,
          opacity: Math.random() * 0.7 + 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
    }

    const initMeteors = () => {
      const count = 5
      meteorsRef.current = []
      for (let i = 0; i < count; i++) {
        meteorsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height / 2,
          length: Math.random() * 80 + 30,
          speed: Math.random() * 8 + 4,
          angle: -Math.PI / 4,
          opacity: 0,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw dynamic gradient background
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height)
      grad.addColorStop(0, '#0d1b2a')
      grad.addColorStop(1, '#081229')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      starsRef.current.forEach(star => {
        const twinkle = Math.sin(Date.now() * 0.002 * star.speed * 100) * 0.4 + 0.6
        ctx.globalAlpha = star.opacity * twinkle
        ctx.fillStyle = star.color
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()

        star.y += star.speed
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      })
      ctx.globalAlpha = 1

      // Draw meteors
      meteorsRef.current.forEach(meteor => {
        meteor.opacity += 0.02
        if (meteor.opacity > 1) meteor.opacity = 1

        ctx.strokeStyle = `rgba(255, 255, 255, ${meteor.opacity})`
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(meteor.x, meteor.y)
        ctx.lineTo(
          meteor.x + Math.cos(meteor.angle) * meteor.length,
          meteor.y + Math.sin(meteor.angle) * meteor.length
        )
        ctx.stroke()

        meteor.x += Math.cos(meteor.angle) * meteor.speed
        meteor.y += Math.sin(meteor.angle) * meteor.speed

        // Reset meteor
        if (
          meteor.x > canvas.width + meteor.length ||
          meteor.y > canvas.height + meteor.length
        ) {
          meteor.x = Math.random() * canvas.width
          meteor.y = Math.random() * canvas.height / 2
          meteor.opacity = 0
        }
      })

      requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" />
}
