import AboutMe from "@/components/AboutMe";
import PostsList from "@/components/PostsList";
import { getStaticPaths } from "@/utils/getListPosts";

export default function Home() {
  const markdownFiles: any = getStaticPaths()

  return (
    <div>
      {markdownFiles.map((post: any) => (
        <PostsList key={post.slug} post={post} />
      ))}
    </div>
  )
}
