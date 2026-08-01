export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
}

//Exemplo de banco de dados - mockado
const posts: Post[] = [
  {
    slug: "meu-primeiro-post",
    title: "Meu primeiro post",
    excerpt: "Aprendendo Next.js na prática.",
    content: "Este é o conteúdo completo do meu primeiro post...",
    date: "2026-07-25"
  },
  {
    slug: "server-components",
    title: "Server Components",
    excerpt: "Entendendo a diferença de Client Components.",
    content: "Server Components rodam no servidor, Client Components...",
    date: "2026-07-26"
  },
  {
    slug: "deploy-na-vercel",
    title: "Deploy na Vercel",
    excerpt: "Publicando meu primeiro projeto.",
    content: "Fazer deploy na Vercel é simples: conecte o GitHub...",
    date: "2026-07-27",
  }
]

export function getAllPosts(): Post[] {
  return posts
}

function findPostSync(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}
export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 1500))
  return findPostSync(slug)
}