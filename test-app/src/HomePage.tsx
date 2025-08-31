import { useEffect } from "react"
import { progress } from "progress-lite"

export default function HomePage() {
  useEffect(() => {
    // show an intro progress on load
    progress.configure({ color: "#29d", height: "4px", effect: "glow" })
    progress.start()
    setTimeout(() => progress.done(), 1500)
  }, [])

  const runDemo = (opts: any) => {
    progress.configure(opts)
    progress.start()
    setTimeout(() => progress.done(), 2000)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-4xl font-bold">🚀 Progress Lite</h1>
      <p className="text-gray-600 text-lg">
        A lightweight progress bar inspired by nprogress — customizable color, height, and effects.
      </p>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <button
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
          onClick={() => runDemo({ color: "#29d", effect: "none" })}
        >
          Default
        </button>

        <button
          className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
          onClick={() => runDemo({ color: "green", effect: "glow" })}
        >
          Glow Effect
        </button>

        <button
          className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
          onClick={() => runDemo({ effect: "fire" })}
        >
          Fire Effect
        </button>

        <button
          className="px-4 py-2 rounded bg-indigo-500 text-white hover:bg-indigo-600"
          onClick={() => runDemo({ effect: "lightning" })}
        >
          Lightning Effect
        </button>
      </div>

      <div className="mt-10 max-w-xl text-center">
        <h2 className="text-2xl font-semibold mb-2">✨ Features</h2>
        <ul className="text-left list-disc list-inside space-y-1 text-gray-700">
          <li>Lightweight and easy to use</li>
          <li>Customizable <code>color</code> & <code>height</code></li>
          <li>Built-in effects: <b>glow, fire, lightning</b></li>
          <li>Runtime configuration via <code>progress.configure()</code></li>
          <li>Inspired by <b>nprogress</b>, but modernized</li>
        </ul>
      </div>
    </div>
  )
}
