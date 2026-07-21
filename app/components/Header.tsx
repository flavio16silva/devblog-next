"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-zinc-200">
      <nav className="max-w-2xl mx-auto py-6 px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-black">
            DevBlog
        </Link>

        {/*Menu Desktop*/}
        <ul className="hidden md:flex gap-6">
          <li>
            <Link href="/" className="text-zinc-700 hover:text-black">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="text-zinc-700 hover:text-black">
              Sobre
            </Link>
          </li>

        </ul>

        {/*Menu hambúrguer*/}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-black"
        >
          ☰
        </button>

        {/*Menu mobile - aparece quando isOpen é true*/}
        {isOpen && (
          <ul className="absolute top-20 left-0 right-0 bg-white border-b border-zinc-200 flex flex-col p-4 gap-4 md:hidden">
            <li>
              <Link href="/" className="text-zinc-700 hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="text-zinc-700 hover:text-black">
                Sobre
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}