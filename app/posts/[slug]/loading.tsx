export default function Loading() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <div className="animate-pulse">
        <div className="h-10 bg-zinc-200 rounded mb-2"></div>
        <div className="h-4 bg-zinc-200 w-32 mb-8"></div>
        <div className="space-y-3">
          <div className="h-4 bg-zinc-200 rounded"></div>
          <div className="h-4 bg-zinc-200 rounded"></div>
          <div className="h-4 bg-zinc-200 rounded w-5/6"></div>
        </div>
      </div>
    </main>
  );
}