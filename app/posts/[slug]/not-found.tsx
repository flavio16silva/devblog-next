import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Post não encontrado | DevBlog",
  description: "O post que você procura não existe ou foi removido.",
};

export default function NotFound() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-2">Post não encontrado</h1>
      <p className="text-zinc-600 mb-6">
        O post que você procura não existe ou foi removido.
      </p>
      <Link
        href="/"
        className="text-blue-600 hover:text-blue-800 font-medium"
      >
        ← Voltar para a Home
      </Link>
    </main>
  )
}