import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { MainNav } from '@/components/ui/main-nav';
import Image from 'next/image';

type Nasa = {
  title: string;
  date: string;
  explanation: string;
  url: string;
};



export default async function Home() {
  const res = await fetch(
    'https://api.nasa.gov/planetary/apod?api_key=mvbnmLHV0blhWAaCaOrtZiUbXZQi11con9aa2zi9', 
    {cache: "no-store"}
  );
  const data: Nasa = await res.json();

  return (
    <div className="bg-blue-500">
      <MainNav />

      <section className="bg-blue-500 p-4 ">
        <div className="grid grid-cols-2">
          <div className="bg-blue-500 text-white py-16 flex flex-col justify-center p-8">
            <h1 className="text-4xl font-bold mb-4">
             {data.title}
            </h1>
            <p className="text-lg mb-8"> Gambar Astronomi Hari Ini</p>
            <a
              href="#"
              className="bg-blue-900 max-w-xs text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition"
            >
              Baca Selengkapnya
            </a>
          </div>
          <div
            className="bg-cover bg-center h-96 p-4 rounded-md shadow-lg"
            style={{ backgroundImage: `url(${data.url})` }}
          ></div>
        </div>
      </section>
      <section className='bg-orange-300 p-4'>
        <div>
          <h1>Mars</h1>
        </div>
      </section>
     
    </div>
  );
}
