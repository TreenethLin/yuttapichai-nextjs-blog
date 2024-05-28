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
  