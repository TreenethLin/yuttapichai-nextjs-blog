export interface simpleBlogCard {
    title: string,
    smallDescription: string,
    currentSlug: string,
    titleImage: object
}

export interface fullBlog {
    currentSlug: string,
    title: string,
    content: [],
    titleImage: object,
    author: Author,
    publishedAt: string;
}

interface Author {
    authorName: string,
    authorDescription: string,
    authorImage: object
}

export interface SetMetadata {
    title: string,
    titleImage: object,
    smallDescription: string
}


export interface ImageProps {
    value: {
      asset: {
        _ref: string;
      };
      alt?: string;
    };
  };
  
export interface BlogContentProps {
    content: [];
};

export interface Photo {
  title: string;
  image: any;
  altText: string;
}

export interface Gallery {
  title: string;
  description: string;
  photos: Photo[];
}

