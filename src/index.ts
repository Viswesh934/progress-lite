export type ProgressOptions = {
  minimum?: number
  speed?: number
  trickleRate?: number
  trickleSpeed?: number
  easingFn?: (n: number) => number
  color?: string
  height?: string
  effect?: "none" | "glow" | "fire" | "lightning"
}

class Progress {
  private status: number | null = null
  private options: Required<ProgressOptions>

  constructor(opts: ProgressOptions = {}) {
    this.options = {
      minimum: 0.08,
      speed: 300,
      trickleRate: 0.02,
      trickleSpeed: 800,
      easingFn: (n) => n,
      color: "#29d",
      height: "3px",
      effect: "none",
      ...opts,
    }
  }

  /** Update options dynamically */
  configure(opts: ProgressOptions) {
    this.options = { ...this.options, ...opts }
    const bar = document.getElementById("progress-lite")
    if (bar) {
      bar.style.background = this.options.color
      bar.style.height = this.options.height
      this.applyEffect(bar)
    }
  }

  private render() {
    if (document.getElementById("progress-lite")) return

    const bar = document.createElement("div")
    bar.id = "progress-lite"
    bar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: ${this.options.height};
      background: ${this.options.color};
      transition: width ${this.options.speed}ms ease-out, opacity ${this.options.speed}ms ease-out;
      z-index: 9999;
    `
    this.applyEffect(bar)
    document.body.appendChild(bar)
  }

  private applyEffect(bar: HTMLElement) {
    switch (this.options.effect) {
      case "glow":
        bar.style.boxShadow = `0 0 10px ${this.options.color}, 0 0 20px ${this.options.color}`
        break
      case "fire":
        bar.style.background = `linear-gradient(90deg, #ff6a00, #ff0000)`
        bar.style.boxShadow = `0 0 15px #ff4500`
        break
      case "lightning":
        bar.style.background = `linear-gradient(90deg, #00f, #0ff)`
        bar.style.boxShadow = `0 0 20px #00f, 0 0 40px #0ff`
        break
      default:
        bar.style.boxShadow = "none"
    }
  }

  private setProgress(n: number) {
    this.status = Math.min(Math.max(n, this.options.minimum), 1)
    const bar = document.getElementById("progress-lite")
    if (bar) {
      const eased = this.options.easingFn(this.status)
      bar.style.width = `${eased * 100}%`
    }
  }

  start() {
    if (this.status !== null) return this
    this.render()
    this.setProgress(this.options.minimum)

    const trickle = () => {
      if (!this.status || this.status >= 1) return
      this.inc()
      setTimeout(trickle, this.options.trickleSpeed)
    }
    setTimeout(trickle, this.options.trickleSpeed)

    return this
  }

  set(n: number) {
    this.setProgress(n)
    return this
  }

  inc(amount?: number) {
    let n = this.status ?? 0
    if (n >= 1) return this
    if (typeof amount !== "number") {
      amount = (1 - n) * this.options.trickleRate
    }
    n = Math.min(n + amount, 0.994)
    this.setProgress(n)
    return this
  }

  done(force = false) {
    if (!this.status && !force) return this
    this.setProgress(1)
    setTimeout(() => {
      const bar = document.getElementById("progress-lite")
      if (bar) bar.style.opacity = "0"
      setTimeout(() => bar?.remove(), this.options.speed)
      this.status = null
    }, this.options.speed)
    return this
  }
}

export const progress = new Progress()
export default Progress
