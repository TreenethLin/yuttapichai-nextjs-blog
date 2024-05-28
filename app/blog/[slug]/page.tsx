import { client, urlFor } from "@/lib/sanity";
import dayjs from 'dayjs';
import { fullBlog } from "@/lib/interface";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import BlogContent from "@/app/components/BlogContent";
import SharetoSocial from "@/app/components/ShareToSocial";

export const revalidate = 30 // revalidate at most every 30 seconds

async function getData(slug : string) {
    const query = `*[_type == 'blog' && slug.current == '${slug}'] {
        "currentSlug": slug.current,
          title,
          content,
          titleImage,
          author->{authorName, authorDescription, authorImage},
          publishedAt
      }[0]`;
    const data = await client.fetch(query);
    return data;
}

export default async function BlogArticle({ params }: { params: { slug: string } }) {
    const data: fullBlog = await getData(params.slug);
    return (
        <div className="mt-8">
            <h1 className="scroll-m-20 text-4xl/[3rem] font-bold lg:text-5xl/[4rem]">
                {data.title}
            </h1>
            <p className="text-lg mt-4">Published on {dayjs(data.publishedAt).format('D MMMM YYYY')}</p>
            <Image 
                src={urlFor(data.titleImage).url()} 
                alt="image" 
                width={800} 
                height={800}
                priority
                className="rounded-lg mt-8 border"
                />
            <div className="flex justify-start items-center mt-2">
                <Image className="rounded-full mr-4 my-4" src={urlFor(data.author.authorImage).url()} alt="image" width={50} height={50} />
                <div className="flex flex-col">
                    <span className="font-bold">{data.author.authorName}</span>
                    <span>{data.author.authorDescription}</span>
                </div>
            </div>
            <Separator />
            <SharetoSocial />
            <div className="mt-10 prose prose-blue prose-xl dark:prose-invert prose-li:marker:text-primary">
                <BlogContent content={data.content} />
            </div>
        </div>
    )
} 
