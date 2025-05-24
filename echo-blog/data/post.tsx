export type Post = {
    id: number;
    title: string;
    description: string;
    slug: string;
    content: string;
    image: string;

}

export const posts:Post[] = [
    {
        id: 1,
        title: "My First Blog Post",
        description: "This is the intro to my first blog post.",
        slug: "my-first-blog-post",
        content: `Welcome to my first blog post!
            This post will cover how I started learning web development,
            why I chose Next.js, and the lessons I learned along the way.

            Thanks for reading!`,
       image:"https://picsum.photos/id/1/800/500",
        
    },
    {
        id: 2,
        title: "Learning Next.js",
        description: "A beginner’s guide to building apps with Next.js.",
        slug: "learning-nextjs",
        content: `
            Next.js is a powerful React framework that lets you build modern
            web applications with ease. In this post, we'll go over its features,
            like routing, API routes, and server-side rendering.
            `,
        image:"https://picsum.photos/id/6/800/500",
        
    },
    {
        id: 3,
        title: "Learning Next.js",
        description: "A beginner’s guide to building apps with Next.js.",
        slug: "learning-nextjs",
        content: `
            Next.js is a powerful React framework that lets you build modern
            web applications with ease. In this post, we'll go over its features,
            like routing, API routes, and server-side rendering.
            `,
        image:"https://picsum.photos/id/9/800/500",

    },
];