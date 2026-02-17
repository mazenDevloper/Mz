export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-4">React Bits</h1>
        <p className="text-xl text-slate-300 mb-8">
          An open source collection of animated, interactive & fully customizable React components for building stunning, memorable user interfaces.
        </p>
        <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
          <h2 className="text-2xl font-semibold mb-4">Welcome to React Bits</h2>
          <p className="text-slate-300 mb-4">
            This is a placeholder. Components can be added to the registry in the jsrepo.config.ts file.
          </p>
        </div>
      </main>
    </div>
  )
}
