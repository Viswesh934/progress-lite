import { useState } from "react"
import { progress } from "progress-lite"

export default function PlaygroundPage() {
  const [color, setColor] = useState("#29d")
  const [height, setHeight] = useState("4px")
  const [effect, setEffect] = useState<"none" | "glow" | "fire" | "lightning">("none")

  const runDemo = () => {
    progress.configure({ color, height, effect })
    progress.start()
    setTimeout(() => progress.done(), 2000)
  }

  return (
    <div className="min-h-screen p-8 flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold">🎨 Playground</h1>
      <p className="text-gray-600">Customize and try the progress bar live!</p>

      <div className="grid gap-4 w-full max-w-md">
        <label className="flex flex-col">
          <span className="mb-1 font-medium">Color</span>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="h-10 w-full border rounded"
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-1 font-medium">Height</span>
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="h-10 border rounded px-2"
            placeholder="e.g. 3px"
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-1 font-medium">Effect</span>
          <select
            value={effect}
            onChange={(e) => setEffect(e.target.value as any)}
            className="h-10 border rounded px-2"
          >
            <option value="none">None</option>
            <option value="glow">Glow</option>
            <option value="fire">Fire</option>
            <option value="lightning">Lightning</option>
          </select>
        </label>

        <button
          onClick={runDemo}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Run Demo
        </button>
      </div>
    </div>
  )
}
