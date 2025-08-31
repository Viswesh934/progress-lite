export default function DocsPage() {
  return (
    <div className="min-h-screen p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">📚 Progress Lite Docs</h1>

      <h2 className="text-2xl font-semibold mt-4">Installation</h2>
      <pre className="bg-gray-900 text-white p-3 rounded mt-2">
        <code>npm install progress-lite</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6">Usage</h2>
      <pre className="bg-gray-900 text-white p-3 rounded mt-2 overflow-x-auto">
        <code>{`import { progress } from "progress-lite"

// Start progress
progress.start()

// Increment
progress.inc()

// Done
progress.done()

// Change settings
progress.configure({ color: "red", height: "6px", effect: "glow" })`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6">Options</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
        <li><code>color</code>: string (default: #29d)</li>
        <li><code>height</code>: string (default: 3px)</li>
        <li><code>speed</code>: number (default: 300ms)</li>
        <li><code>effect</code>: "none" | "glow" | "fire" | "lightning"</li>
        <li><code>configure()</code>: update options at runtime</li>
      </ul>
    </div>
  )
}
