import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SpaceBackground } from '@/components/space-background'
import { TerminalText } from '@/components/terminal-text'

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SpaceBackground />
      </div>
      
      <div className="relative z-10 flex flex-col items-center max-w-2xl">
        <h1 className="text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">404</h1>        <div className="mb-8 w-full">
          <TerminalText text="> ERROR 404: Page not found_" />
        </div>
        
        <div className="backdrop-blur-md bg-black/30 p-6 rounded-xl mb-8 border border-gray-700">
          <p className="text-lg mb-4">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <p className="text-gray-400">
            Perhaps you mistyped the URL or the page has been removed.
          </p>
        </div>
        
        <Button asChild className="px-8 py-6 text-lg">
          <Link href="/">
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  )
}