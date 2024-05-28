import { PortableText } from '@portabletext/react';
import { urlFor } from '@/lib/sanity';
import { ImageProps, BlogContentProps } from '@/lib/interface';
import Image from 'next/image';

const PortableTextComponents = {
  types: {
    image: ({ value }: ImageProps) => {
      if (!value?.asset?._ref) {
        return null;
      }
      const imageUrl = urlFor(value).width(800).url();
      return (
        <Image
          src={imageUrl}
          alt={value.alt || ' '}
          width={800}
          height={450}
          layout="responsive"
        />
      );
    },
  },
};

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  return (
    <PortableText
      value={content}
      components={PortableTextComponents}
    />
  );
};

export default BlogContent;
