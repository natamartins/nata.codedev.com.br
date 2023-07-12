import AboutMe from "@/components/AboutMe";
import PostsList from "@/components/PostsList";
import { getStaticPaths } from "@/utils/getListPosts";

export default function Home() {
  const markdownFiles: any = getStaticPaths()

  return (
    <div className="box_posts-container">
      <h1>Posts</h1>
      {markdownFiles.map((post: any) => (
        <PostsList key={post.slug} post={post} />
      ))}
    </div>
  )
}
