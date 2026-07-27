import PostCard from "./components/PostCard"
import { getAllPosts } from "@/lib/posts"

export default function Home() {
  const posts = getAllPosts()

  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-2">DevBlog</h1>
      <p className="text-zinc-500 mb-10">Meu blog construído estudando Next.js</p>

      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} /> 
        ))}
      </div>
    </main>
  )
}