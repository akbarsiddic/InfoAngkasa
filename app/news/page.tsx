import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SideBar } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { MainNav } from '@/components/ui/main-nav';
import Link from 'next/link';
type News = {
  title: string;
  url: string;
  published_at: string;
  summary: string;
  imageUrl: string;
  updatedAt: string;
  featured: boolean;
  launches: string[];
  events: string[];
  id: string;
};

async function getNews() {
  const res = await fetch('https://api.spaceflightnewsapi.net/v4/articles/', {next: {revalidate: 60}});
  const data = await res.json();
  return data;
}

export default async function News() {
  const newsData = await getNews();
  const data = newsData.results;

  return (
    <div className="bg-gradient-to-b from-blue-700 via-white to-blue-500">
      <MainNav />
      <div className="border-t">
        <div className="grid lg:grid-cols-5">
          <SideBar className="hidden lg:block" />
          <div className="col-span-3 lg:col-span-4 lg:border-l">
            <div className="h-full px-4 py-6 lg:px-6 space-y-4">
              {data.map((news: News) => (
                <Card key={news.id} className="bg-blue-600 shadow-lg ">
                  <CardHeader className="bg-blue-600 text-white rounded-lg  flex flex-col justify-center ">
                    <CardTitle className="text-4xl font-bold mb-4">
                      {news.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="">
                    <p className="text-lg mb-8 text-white">{news.summary}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button asChild>
                      <Link href="#">Baca Selengkapnya</Link>
                    </Button>
                    <Badge className="bg-white text-black">
                      {new Date(news.published_at).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        timeZone: 'Asia/Jakarta', // Adjust the time zone if needed
                      })}
                    </Badge>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
