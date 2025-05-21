export type Post = {
    id: number;
    title: string;
    description: string;
    slug: string;
}

export const posts:Post[] = [
    {
        id: 1,
        title: "My First Blog Post",
        description: "This is the intro to my first blog post.",
        slug: "my-first-blog-post",
    },
    {
        id: 2,
        title: "Learning Next.js",
        description: "A beginner’s guide to building apps with Next.js.",
        slug: "learning-nextjs",
    },
];