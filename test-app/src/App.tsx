import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import HomePage from "./HomePage"
import DocsPage from "./DocsPage"
import PlaygroundPage from "./PlaygroundPage"

function App() {
  return (
    <BrowserRouter>
      <nav className="flex gap-4 p-4 bg-gray-100 shadow">
        <Link to="/" className="font-bold">Progress Lite</Link>
        <Link to="/docs">Docs</Link>
        <Link to="/playground">Playground</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/playground" element={<PlaygroundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
