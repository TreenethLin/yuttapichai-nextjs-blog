import { Metadata, ResolvingMetadata } from 'next';
import { urlFor, getData } from "@/lib/sanity";
import dayjs from 'dayjs';
import { fullBlog, SetMetadata } from "@/lib/interface";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import BlogContent from "@/app/components/BlogContent";
import SharetoSocial from "@/app/components/ShareToSocial";

export const revalidate = 30; // revalidate at most every 30 seconds

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const query = `*[_type == 'blog' && slug.current == '${params.slug}'] {
        "currentSlug": slug.current,
          title,
          smallDescription,
          titleImage,
      }[0]`;
  const data: SetMetadata = await getData(query);
  const previousImages = (await parent).openGraph?.images || [];

  const metadata = {
    title: data.title,
    description: data.smallDescription,
    openGraph: {
      title: data.title,
      description: data.smallDescription,
      images: [
        {
          url: urlFor(data.titleImage).url(),
          alt: data.title,
        },
        ...previousImages,
      ],
    },
  };

  return metadata;
}

export default async function BlogArticle({ params }: Props) {
  const query = `*[_type == 'blog' && slug.current == '${params.slug}'] {
        "currentSlug": slug.current,
          title,
          content,
          titleImage,
          author->{authorName, authorDescription, authorImage},
          publishedAt
      }[0]`;
  const data: fullBlog = await getData(query);

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
        <Image 
          className="rounded-full mr-4 my-4" 
          src={urlFor(data.author.authorImage).url()} 
          alt="image" 
          width={50} 
          height={50} 
        />
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
  );
}
