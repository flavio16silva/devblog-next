type Post = {
  // id: number;
  title: string;
  excerpt: string
}

export default function PostCard({ post }: { post: Post}) {
  return (
  <div className="border-b pb-4">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="text-zinc-600">{post.excerpt}</p>
  </div>
  )
}