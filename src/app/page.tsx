import PostsList from "@/components/PostsList";
import { getListPosts } from "@/utils/getListPosts";
import { sortPostsByDate } from "@/utils/sortPostsByDate";
import { Layout } from "lucide-react";

export default function Home() {
  const markdownFiles: any = getListPosts()
  const sortedPosts = sortPostsByDate(markdownFiles);

  return (
    <div className="box_posts-container">
      <h1><Layout size={40} />Posts</h1>
      {sortedPosts.map((post: any) => (
        <PostsList key={post.id} post={post} />
      ))}
    </div>
  )
}
