import type { Metadata } from 'next'
import { Author } from 'next/dist/lib/metadata/types/metadata-types'

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
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
