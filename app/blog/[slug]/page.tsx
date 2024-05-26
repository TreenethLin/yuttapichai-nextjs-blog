import { client, urlFor } from "@/lib/sanity"
import { fullBlog } from "@/lib/interface";
import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import { PortableText } from "next-sanity";

export const revalidate = 30 // revalidate at most every 30 seconds

async function getData(slug : string) {
    const query = `*[_type == 'blog' && slug.current == '${slug}'] {
        "currentSlug": slug.current,
          title,
          content,
          titleImage,
          author->{authorName, authorDescription, authorImage}
      }[0]`;
    const data = await client.fetch(query);
    console.log(data.content);
    return data;
}

export default async function BlogArticle({ params }: { params: { slug: string } }) {
    const data: fullBlog = await getData(params.slug);
    return (
        <div className="mt-8">
            <h1 className="scroll-m-20 text-4xl font-bold lg:text-5xl">
                {data.title}
            </h1>
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
            <div className="mt-10 prose prose-blue prose-xl dark:prose-invert prose-li:marker:text-primary">
                <PortableText value={data.content}/>
            </div>
        </div>
    )
} 
