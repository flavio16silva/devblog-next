export default function Home() {
  const posts = [
    { id: 1, title: "Meu primeiro post", excerpt: "Aprendendo Next.js na prática"},
    { id: 2, title: "Server Components", excerpt: "Entendendo a diferença de Client Components."},
    { id: 3, title: "Deploy na Vercel", excerpt: "Publicando meu primeiro projeto."},
     
  ]

  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-2">DevBlog</h1>
      <p className="text-zinc-500 mb-10">Meu blog construído estudando Next.js</p>

      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <div key={post.id} className="border-b pb-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-zinc-600">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </main>
  )
}