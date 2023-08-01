import React from 'react'

type Params = { 
    id: string
}

export default async function  page({ params }: { params: Params }) {
    const newsData = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${params.id}`)
    const data = await newsData.json()
  return (
    <>
    <div className="container">
         <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {data.title}
    </h1>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
        {data.summary}
    </p>
    </div>
    </>
  )
}
