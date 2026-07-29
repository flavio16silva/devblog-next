import { notFound } from "next/navigation"
import { getPostBySlug } from "@/lib/posts"
import type { Metadata } from "next"

type Params = {
  slug: string
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post não encontrado",
    }
  }

  return {
    title: `Posts | ${post.title} | DevBlog`,
    description: post.excerpt,
  }
}


export default async function PostPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }


  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-zinc-500 text-sm mb-8">
        {new Date(post.date).toLocaleDateString("pt-BR")}
      </p>

      <article className="prose">
        <p className="text-zinc-700 mb-4">{post.content}</p>
      </article>
    </main>
  )
}