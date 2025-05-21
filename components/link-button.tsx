import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { LinkIcon, Github, Instagram, Facebook, FileText } from "lucide-react"
import { cn } from "@/lib/utils"

type IconName = "Link" | "Github" | "Instagram" | "Facebook" | "NightOwls" | "FileText"
type ButtonVariant = "default" | "minimal"

interface LinkButtonProps {
  href: string
  children: React.ReactNode
  icon: IconName
  variant?: ButtonVariant
}

export function LinkButton({ href, children, icon, variant = "default" }: LinkButtonProps) {
  const getIcon = () => {
    switch (icon) {
      case "Link":
        return <LinkIcon className="h-6 w-6" />
      case "Github":
        return <Github className="h-6 w-6" />
      case "Instagram":
        return <Instagram className="h-6 w-6" />
      case "Facebook":
        return <Facebook className="h-6 w-6" />
      case "NightOwls":
        return (
          <div className="relative w-6 h-6">
            <Image src="/night-owls-logo.png" alt="Night Owls" fill className="object-contain" />
          </div>
        )
        case "YPSTEM":
        return (
          <div className="relative w-6 h-6">
            <Image src="/ypstem-logo.png" alt="YPSTEM" fill className="object-contain" />
          </div>
        )
      case "FileText":
        return <FileText className="h-6 w-6" />
      default:
        return <LinkIcon className="h-6 w-6" />
    }
  }

  if (variant === "minimal") {
    return (
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        className={cn(
          "w-full h-14 flex items-center px-6 rounded-lg border border-slate-800 bg-black/60",
          "backdrop-blur-sm transition-all duration-300 text-slate-200 font-medium",
          "relative overflow-hidden group",
          "hover:border-slate-700 hover:text-white hover:bg-slate-900/40",
        )}
      >
        {/* Subtle highlight on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800/30 to-slate-700/30"></div>
        </div>

        {/* Icon container */}
        <span className="flex items-center justify-center bg-slate-800 rounded-full p-2 mr-4 z-10 transition-colors duration-300 group-hover:bg-slate-700">
          {getIcon()}
        </span>

        {/* Text with subtle slide effect */}
        <span className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">
          {children}
        </span>
      </Link>
    )
  }

  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      className={cn(
        "w-full h-14 flex items-center px-6 rounded-lg border border-zinc-800/50 bg-black/60",
        "backdrop-blur-sm transition-all duration-500 text-white font-medium",
        "relative overflow-hidden group",
        "hover:border-transparent hover:text-cyan-50",
      )}
    >
      {/* Neon border effect */}
      <div className="absolute inset-px rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 rounded-lg neon-border"></div>
      </div>

      {/* Subtle star particles */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full star-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 1500}ms`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          ></div>
        ))}
      </div>

      {/* Icon container with pulse effect */}
      <span className="flex items-center justify-center bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full p-2 mr-4 z-10 group-hover:animate-pulse-slow">
        {getIcon()}
      </span>

      {/* Text with subtle slide effect */}
      <span className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">
        {children}
      </span>
    </Link>
  )
}
