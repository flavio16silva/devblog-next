"use client"

export default function Error({
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4"> Algo deu errado</h1>
      <p className="text-zinc-600 mb-6">
        Não foi possível carregar este post. Tente novamente.
      </p>
      <button
        onClick={() => reset()}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
          Tentar novamente
      </button>
    </main>
  )
}