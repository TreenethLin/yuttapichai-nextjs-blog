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
    author: Author
}

interface Author {
    authorName: string,
    authorDescription: string,
    authorImage: object
}

export interface ImageBlock {
    node: {
      asset: {
        _ref: string;
      };
      alt?: string;
    };
}