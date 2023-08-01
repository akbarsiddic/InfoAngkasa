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
    { cache: 'no-store' },
  );
  const data: Nasa = await res.json();

  return (
    <div className="bg-gradient-to-b from-blue-700 via-blue-950 to-blue-700">
      <MainNav />

      <section className=" p-4 ">
        <div className="grid grid-cols-2">
          <div className=" text-white py-16 flex flex-col justify-center p-8">
            <p className="text-lg mb-4"> Gambar Astronomi Hari Ini</p>
            <h1 className="text-4xl font-bold mb-8">{data.title}</h1>
            <a
              href="/apod"
              className="bg-blue-900 max-w-xs text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition"
            >
              Baca Selengkapnya
            </a>
          </div>
          <div className="aspect-square relative bg-white/50  backdrop-blur-md rounded-lg shadow-lg">
            <Image
              src={data.url}
              fill
              alt="apod"
              className="rounded-xl border object-fill"
            />
          </div>
        </div>
      </section>
      <section className="bg-orange-300 p-4">
        <div>
          <h1>Mars</h1>
        </div>
      </section>

      {/* footer */}
      <footer className="bg-blue-900 text-white p-4">
        <div className="container">
          <div className="grid grid-cols-1 md:flex md:justify-between gap-8">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">InfoAngkasa</h1>
              <p className="text-lg">
                Astronomi adalah ilmu alam yang mempelajari benda-benda langit
                dan fenomena. Ini menggunakan matematika, fisika, dan kimia
                untuk menjelaskan asal dan evolusi mereka.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Contact Us</h2>
              <p>Email: example@infoangkasa.com</p>
              <p>Phone: +62 (123) 456-7890</p>
              <p>Address: Bogor, Universe</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
