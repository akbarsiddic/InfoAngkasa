
import { Footer } from '@/components/ui/main-footer';
import { MainNav } from '@/components/ui/main-nav';
import { PageWrapper } from './PageWrapper';
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import Angkasa from '@/public/angkasa.jpg';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

      <PageWrapper>
      <section className="p-4 md:p-8 lg:p-12 "
      
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className=" text-white py-16 flex flex-col justify-center md:p-8  p-4">
            <p className="text-lg mb-2 md:mb-4"> Gambar Astronomi Hari Ini</p>
            <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8">{data.title}</h1>
            <Link
              href="/apod"
              className="bg-blue-700 max-w-xs text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition"
            >
              Baca Selengkapnya
            </Link>
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
      </PageWrapper>

      <PageWrapper>
      <section className="p-4 md:p-8 lg:p-12">
        <div className="container mx-auto">
          <div>
            <h1 className="text-white text-2xl md:text-4xl font-bold mb-4 md:mb-8">Planets</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader>Mars</CardHeader>
                <CardContent>
                  Mars, Planet Merah, memiliki permukaan penuh lembah,
                  dataran, dan gunung berapi yang menarik perhatian.
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="icon" className="ml-auto">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>Earth</CardHeader>
                <CardContent>
                  Bumi adalah rumah bagi beragam ekosistem, dari lautan dalam
                  hingga hutan tropis yang hidup.
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="icon" className="ml-auto">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>Uranus</CardHeader>
                <CardContent>
                  Uranus, planet terguling, menyimpan misteri dengan cincin dan
                  bulan-bulan yang tidak terlalu terkenal.
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="icon" className="ml-auto">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>Mercury</CardHeader>
                <CardContent>
                  Mercury, planet terkecil dekat Matahari, memiliki permukaan
                  keras dengan suhu ekstrem siang dan malam.
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="icon" className="ml-auto">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>Jupiter</CardHeader>
                <CardContent>
                  Jupiter, raksasa gas, dihiasi oleh Bintik Merah Besar dan
                  bulan-bulan besar seperti Ganymede.
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="icon" className="ml-auto">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>Saturn</CardHeader>
                <CardContent>
                  Saturn dengan cincin indahnya menambah pesona planet ini,
                  memiliki lebih dari 80 bulan.
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="icon" className="ml-auto">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>Venus</CardHeader>
                <CardContent>
                  Venus, planet panas, diselimuti awan tebal, menciptakan efek
                  rumah kaca dan suhu tinggi.
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="icon" className="ml-auto">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>Neptune</CardHeader>
                <CardContent>
                  Neptune, planet jauh, memikat dengan atmosfer biru, angin
                  kencang, dan badai besar yang unik.
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="icon" className="ml-auto">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
      </PageWrapper>

      <PageWrapper>
      <section className="flex items-center justify-between min-h-screen">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-4 p-8 md:p-20">
             <div className="w-full ">
              <div className="aspect-square relative bg-white/50 backdrop-blur-md rounded-lg shadow-lg">
                <Image
                  src={Angkasa}
                  fill
                  alt="angkasa"
                  className="rounded-sm object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-white mb-4">
                Lihat Berita Terkini Tentang Angkasa
              </h1>
              <p className="text-white mb-4">
                Jelajahi kisah-kisah menarik tentang penemuan dan eksplorasi di
                luar angkasa, dari planet-planet yang misterius hingga
                bintang-bintang yang gemilang.
              </p>
              <Link
                href="/news"
                className="bg-indigo-700 max-w-xs text-white font-semibold py-2 px-4 rounded hover:bg-indigo-600 hover:text-white transition"
              >
                Baca Berita
              </Link>
            </div>
           
          </div>
        </div>
      </section>
      </PageWrapper>


      <PageWrapper>
      <section className="py-16  text-white">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">
            Berlangganan untuk Update Angkasa Terbaru
          </h2>
          <p className="text-gray-300 mb-8">
            Jangan lewatkan berita dan penemuan terkini di dunia angkasa.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex items-center">
              <input
                type="email"
                className="bg-gray-800 text-white w-full py-2 px-4 rounded-l focus:outline-none"
                placeholder="Masukkan alamat email Anda"
              />
              <button
                type="submit"
                className="bg-blue-700 text-white py-2 px-6 rounded-r hover:bg-blue-600 transition"
              >
                Berlangganan
              </button>
            </div>
          </form>
        </div>
      </section>
      </PageWrapper>

      {/* footer */}
    </div>
  );
}
