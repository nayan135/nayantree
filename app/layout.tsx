import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nayan Acharya | Links",
  description: "Developer • Innovator • Learner | Exploring tech and creativity from Nepal",
  keywords: ["Nayan Acharya", "Web Developer", "Nepal", "Portfolio", "Links"],
  authors: [{ name: "Nayan Acharya" }],
  creator: "Nayan Acharya",
  publisher: "Nayan Acharya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nayannow.xyz",
    title: "Nayan Acharya | Links",
    description: "Developer • Innovator • Learner | Exploring tech and creativity from Nepal",
    siteName: "Nayan Acharya Links",
    images: [
      {
        url: "/nayan-profile.jpg",
        width: 800,
        height: 800,
        alt: "Nayan Acharya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nayan Acharya | Links",
    description: "Developer • Innovator • Learner | Exploring tech and creativity from Nepal",
    images: ["/nayan-profile.jpg"],
  },
  metadataBase: new URL("https://nayannow.xyz")
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
