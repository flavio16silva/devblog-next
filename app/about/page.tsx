import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre | DevBlog",
  description: "Conheça o autor e o objetivo do DevBlog"
}

export default function About() { 
  /*image: id: 486*/
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Sobre o DevBlog</h1>

      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <Image
          src="https://picsum.photos/id/113/500/500"
          alt="Imagem abstrata representando o autor"
          width={200}
          height={200}
          className="rounded-full"
        />

        <div className="flex-1 text-center md:text-left">
          <p className="text-zinc-100 mb-4">
            Olá! Este é o DevBlog, um projeto que estou construindo enquanto 
            aprendo Next.js na prática. Um passo de cada vez, um código a cada dia.
          </p>
          <p className="text-zinc-100 text-justify">
            Aqui compartilho minha jornada de estudos, cobrindo desde os
            fundamentos do App Router até tópicos avançados como banco de dados
            e autenticação. O objetivo é aprender fazendo — um passo de cada vez.
          </p>
        </div>
      </div>

      <Link
        href="/"
        className="inline-block mt-8 text-zinc-200 hover:text-zinc-400 font-medium"
      >
        ← Voltar para a Home
      </Link>
    </main>
  )
}