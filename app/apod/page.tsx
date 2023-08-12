import React from 'react';
import { MainNav } from '@/components/ui/main-nav';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

type Nasa = {
  title: string;
  date: string;
  explanation: string;
  url: string;
  hdurl: string;
};

export default async function page() {
  const res = await fetch(
    'https://api.nasa.gov/planetary/apod?api_key=mvbnmLHV0blhWAaCaOrtZiUbXZQi11con9aa2zi9',
    { cache: 'no-store' },
  );
  const data: Nasa = await res.json();

  return (
    <>
      <div className="bg-gradient-to-b from-blue-700 via-blue-950 to-blue-700">
        <div className="container p-10 ">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-white">{data.title}</h1>
            <div className="aspect-video relative bg-white/50  backdrop-blur-md rounded-lg shadow-lg">
              <Image
                src={data.hdurl}
                fill
                alt="apod"
                className="rounded-xl object-contain"
              />
            </div>
            <p className="text-white space text-lg tracking-wide leading-relaxed indent-8 text-justify">
              {data.explanation}
            </p>
            <Badge className="bg-white text-black self-end">
              {new Date(data.date).toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'Asia/Jakarta', 
              })}
            </Badge>
          </div>
        </div>
      </div>
    </>
  );
}
