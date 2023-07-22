import './globals.css'
import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'InfoAngkasa',
  description: 'InfoAngkasa adalah website yang berisi informasi tentang angkasa.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  )
}
