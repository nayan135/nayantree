import Image from "next/image"
import { LinkButton } from "@/components/link-button"
import { SpaceBackground } from "@/components/space-background"
import { Mail, MapPin, Clock } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8 text-white relative overflow-hidden">
      <SpaceBackground />
   
      <main className="flex flex-col items-center max-w-md w-full mx-auto space-y-8 z-10">
        {/* Header */}
        <div className="w-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 to-slate-400/10 blur-md rounded-xl"></div>
          <div className="relative border border-zinc-800/80 rounded-xl p-6 bg-black/70 backdrop-blur-md overflow-hidden">
            {/* Subtle border lines */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-slate-400/40 to-slate-500/40"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-slate-500/40 to-slate-400/40"></div>
            <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-slate-400/40 to-slate-500/40"></div>
            <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-slate-500/40 to-slate-400/40"></div>

            {/* Terminal prompt and name */}
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-slate-400 font-mono text-xl animate-pulse">&gt;_</span>
                <h1 className="text-3xl font-bold tracking-wider text-slate-100">NAYAN ACHARYA</h1>
              </div>

              {/* Contact info */}
              <div className="flex flex-col space-y-2 pl-7 text-sm">
                <div className="flex items-center space-x-2 text-zinc-400 hover:text-slate-300 transition-colors">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:acharyanayan604@gmail.com" className="hover:underline">
                    acharyanayan604@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-zinc-400">
                  <MapPin className="h-4 w-4 text-slate-400" />
                  <span>Butwal, Nepal</span>
                </div>
                <div className="flex items-center space-x-2 text-zinc-400">
                  <Clock className="h-4 w-4 text-slate-400" />
                  <span>Open for internships</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-6 w-full">
          <div className="relative w-32 h-32 overflow-hidden rounded-full border-2 border-slate-700 p-1 bg-gradient-to-r from-slate-700 to-slate-600 shadow-[0_0_25px_rgba(100,116,139,0.5)]">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <Image src="/nayan-profile.jpg" alt="Nayan Acharya" fill className="object-cover" priority />
            </div>
          </div>

          <div className="text-center space-y-2">
            <p className="text-slate-200 text-lg">
              <span className="text-slate-400 font-mono">&gt;</span>
              <span className="text-slate-200 font-semibold">Developer • Innovator • Learner</span>
            </p>
            <p className="text-slate-400">Exploring tech and creativity from Nepal</p>
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full space-y-4 mt-4">
          <LinkButton href="https://nayan135.com.np" icon="Link" variant="minimal">
            Personal Website
          </LinkButton>

          <LinkButton href="https://github.com/nayan135" icon="Github" variant="minimal">
            GitHub
          </LinkButton>

          <LinkButton href="https://instagram.com/naayan135" icon="Instagram" variant="minimal">
            Instagram
          </LinkButton>

          <LinkButton href="https://facebook.com/nayanacharya0" icon="Facebook" variant="minimal">
            Facebook
          </LinkButton>

          <LinkButton href="https://night-owls.tech" icon="NightOwls" variant="minimal">
            Night Owls
          </LinkButton>

          <LinkButton href="https://www.ypstem.org" icon="YPSTEM" variant="minimal">
            Youth Pioneer in STEM (YPSTEM)
          </LinkButton>

          <LinkButton href="https://github.com/nayan135" icon="FileText" variant="minimal">
            Projects
          </LinkButton>

          <LinkButton href="/blog" icon="FileText" variant="minimal">
            Blog
          </LinkButton>
        </div>

        {/* Footer */}
        <footer className="w-full pt-8 mt-auto text-center text-sm">
          <p className="text-slate-500">
            Made with
            <span className="mx-1">❤️</span>
            by Nayan Acharya
          </p>
        </footer>
      </main>
    </div>
  )
}
