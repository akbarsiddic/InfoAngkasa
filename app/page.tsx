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
  );
  const data: Nasa = await res.json();

  return (
    <div className="bg-blue-500">
      <MainNav />

      <section className="bg-blue-500 p-4 ">
        <div className="grid grid-cols-2">
          <div className="bg-blue-500 text-white py-16 flex flex-col justify-center p-8">
            <h1 className="text-4xl font-bold mb-4">
              Astronomy Picture of the Day
            </h1>
            <p className="text-lg mb-8">{data.title}</p>
            <a
              href="#"
              className="bg-blue-900 max-w-xs text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition"
            >
              Read More
            </a>
          </div>
          <div
            className="bg-cover bg-center h-96 p-4 rounded-md shadow-lg"
            style={{ backgroundImage: `url(${data.url})` }}
          ></div>
        </div>
      </section>

      {/* <Card className="m-4 max-w-lg rounded overflow-hidden shadow-lg border border-black">
        <CardHeader className="px-6 py-4">
          <CardTitle className="font-bold text-xl mb-2">{data.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Image src={data.url} width={400} height={400} alt={data.title} />
          <CardDescription className="text-base">
            {data.explanation}
          </CardDescription>
        </CardContent>
      </Card> */}
    </div>
  );
}
