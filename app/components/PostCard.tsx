import Link from "next/link"
import type { Post } from "@/lib/posts"

export default function PostCard({ post }: { post: Post}) {
  return (
    <Link href={`/posts/${post.slug}`} className="block border-b pb-4 hover:bg-zinc-50 transition-colors hover:text-zinc-900">
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p className="text-zinc-600">{post.excerpt}</p>
    </Link>
  )
}