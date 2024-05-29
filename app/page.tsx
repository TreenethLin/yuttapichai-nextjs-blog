import * as React from 'react'
import { simpleBlogCard } from "@/lib/interface";
import { urlFor, getData } from "@/lib/sanity";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShortProfile } from './components/ShortProfile';

export const revalidate = 30 // revalidate at most every 30 seconds

export default async function Home() {
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug" : slug.current,
    titleImage
  }`
  const data: simpleBlogCard[] = await getData(query);

  return (
    <React.Fragment>
    <ShortProfile />
    <section id="blog">
    <h1 className="scroll-m-20 text-4xl font-bold tracking-tight my-4">
      All Posts
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {
        data.map((post, idx) => (
          <Card key={idx}>
            <Image 
              src={urlFor(post.titleImage).url()} 
              alt="image" 
              width={500} 
              height={500}
              className="rounded-t-lg h-[200px] object-cover"
            />
            <CardContent className="mt-5">
              <h3 className="font-bold text-lg line-clamp-2">{post.title}</h3>
              <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">{post.smallDescription}</p>
              <Button asChild className="text-md font-bold w-full mt-7 dark:text-white"> 
                <Link href={`/blog/${post.currentSlug}`}>
                  Read More
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))
      }
    </div>
    </section>
    </React.Fragment>
  );
}
