'use client'

import { cn } from "@/lib/utils"
import { Button } from "./button"
import Link from 'next/link'
import { usePathname } from 'next/navigation';

interface sideBarProps extends React.HTMLAttributes<HTMLDivElement> {}


export function SideBar({className}: sideBarProps) {
  const router = usePathname()
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight text-white">
            Discover
          </h2>
          <div className="space-y-1">
            <Button asChild   variant={router === '/news' ? 'secondary' : 'ghost'} className="w-full justify-start">
              <Link href='/news'>Berita Terbaru</Link>
            </Button>
            <Button asChild variant={router === '/search' ? 'secondary' : 'ghost'} className="w-full justify-start">
             
              <Link href='/search'>Cari Berita</Link>
            </Button>
          </div>
        </div>
        
      </div>
    </div>
  )
}