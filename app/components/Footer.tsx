export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-100 border-t border-zinc-200 mt-16">
      <div className="max-w-2xl mx-auto py-8 px-4 text-center text-zinc-600 text-sm">
        <p>© {currentYear} DevBlog. Construído estudando Next.js.</p>
      </div>
    </footer>
  )
}