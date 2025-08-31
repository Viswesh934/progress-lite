# progress-lite 🚀

A lightweight progress bar library like [nprogress](https://github.com/rstacruz/nprogress), built for fun with custom logic and zero dependencies.  
Works with React, Vue, vanilla JS, or anywhere in the browser. 🎉

[![npm version](https://img.shields.io/npm/v/progress-lite.svg)](https://www.npmjs.com/package/progress-lite)  
[![npm downloads](https://img.shields.io/npm/dt/progress-lite.svg)](https://www.npmjs.com/package/progress-lite)

---

## ✨ Features
- ⚡ Tiny & dependency-free  
- 🎨 Customizable styles  
- 🔄 Start, increment, and finish progress easily  
- 🛠 Works with any framework  

---

## 📦 Installation

```bash
npm install progress-lite
```

or with yarn:

```bash
yarn add progress-lite
```

---

## 🚀 Usage

### Vanilla JS
```js
import { progress } from "progress-lite"

// Start the progress bar
progress.start()

// Simulate async work
setTimeout(() => {
  progress.done()
}, 2000)
```

### React Example
```tsx
import { useEffect } from "react"
import { progress } from "progress-lite"

export default function App() {
  useEffect(() => {
    progress.start()
    setTimeout(() => progress.done(), 1500)
  }, [])

  return <h1>Hello Progress 🚀</h1>
}
```

---

## ⚙️ API

| Method             | Description                          |
|--------------------|--------------------------------------|
| `progress.start()` | Start the progress bar               |
| `progress.inc()`   | Increment progress by random amount  |
| `progress.done()`  | Complete and hide the progress bar   |
| `progress.set(n)`  | Set progress manually (0 → 1)        |

---

## 🎨 Custom Styles
The progress bar uses a default CSS.  
You can override it:

```css
#progress-lite {
  background: linear-gradient(to right, #4facfe, #00f2fe);
  height: 4px;
}
```

---

## 🧪 Playground
Try it live here 👉 [Progress Lite Playground](https://your-demo-link.vercel.app)

---

## 📝 License
MIT © 2025 viswesh
