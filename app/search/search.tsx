"use client"
import { SearchCheck } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function Search() {
    const router = useRouter()

    return (
        // <div className="flex justify-center items-center">
        //     <Input
        //         type="search"
        //         className="w-full max-w-sm px-4 py-2 border rounded-lg shadow"
        //         placeholder="Search..."
        //         onChange={(e) => {
        //             router.push(`/search/?search=${e.target.value}`);
        //         }}
        //     />
        // </div>
        <div className="flex justify-center items-center space-x-2 pt-2">
      <Input type="search" placeholder="Search" className="w-full max-w-sm px-4 py-2 border rounded-lg shadow" onChange={(e) => {
            router.push(`/search/?search=${e.target.value}`);
        
      }}/>
      <Button type="submit">
        <SearchCheck size={24} />
      </Button>
    </div>
    )
}