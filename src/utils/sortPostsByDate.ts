export function sortPostsByDate(posts: any[]): any[] {
    const postsWithDate = posts.map((post: any) => ({
        ...post,
        date: new Date(post.date),
    }));

    const sortedPosts = postsWithDate.sort((a: any, b: any) => b.date - a.date);

    return sortedPosts;
}
