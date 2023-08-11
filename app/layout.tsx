import './globals.css'
import type { Metadata } from 'next'
import {  Plus_Jakarta_Sans } from 'next/font/google'
import { Footer } from '@/components/ui/main-footer'
import { MainNav } from '@/components/ui/main-nav'
 

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
      
      <body className={`${plusJakartaSans.className} bg-blue-700`} >
        <MainNav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
