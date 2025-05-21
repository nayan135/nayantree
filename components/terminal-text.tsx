"use client"

import { useEffect, useState } from "react"

interface TerminalTextProps {
  text?: string;
}

export function TerminalText({ text = "> Building cool stuff..." }: TerminalTextProps) {
  const [displayText, setDisplayText] = useState("")
  const fullText = text
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [fullText])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3">
      <div className="font-mono text-sm text-[#33d6a6]">
        {displayText}
        <span className={`${cursorVisible ? "opacity-100" : "opacity-0"} transition-opacity`}>_</span>
      </div>
    </div>
  )
}
