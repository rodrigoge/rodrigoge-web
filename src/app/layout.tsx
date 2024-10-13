import type { Metadata } from 'next'
import { Author } from 'next/dist/lib/metadata/types/metadata-types'
import '../styles/globals.scss'
import { ThemeProvider } from '@/contexts/ThemeContext'

export const author: Author = {
  url: 'https://github.com/rodrigoge',
  name: 'Rodrigo Gouveia'
}

export const metadata: Metadata = {
  title: 'Rodrigo Gouveia - Portfolio',
  description: `Explore my web portfolio, i'm a full-stack developer who uses Next.js and React.js to create innovative and responsive web applications.`,
  authors: author,
  applicationName: 'Rodrigo Gouveia - Portfolio',
  keywords: [
    'Next.js',
    'React.js',
    'Portfolio Web',
    'Desenvolvedor Fullstack',
    'Desenvolvedor Frontend',
    'Desenvolvedor Backend',
    'Desenvolvimento Web',
    'JavaScript',
    'Typescript'
  ],
  robots: 'index, follow'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <link rel="icon" href="/favicon.ico" />
        <body>{children}</body>
      </html>
    </ThemeProvider>
  )
}
