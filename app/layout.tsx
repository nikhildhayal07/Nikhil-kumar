import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Nikhil Kumar | CSE Student & Cloud Computing Enthusiast',
  description: 'B.Tech CSE student passionate about cloud engineering, DevOps automation, and problem-solving using Data Structures and Algorithms. Skilled in C++, Python, AWS, Docker.',
  generator: 'v0.app',
  keywords: ['Nikhil Kumar', 'Portfolio', 'CSE Student', 'Cloud Computing', 'AWS', 'DevOps', 'Data Structures', 'C++', 'Python'],
  authors: [{ name: 'Nikhil Kumar' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
