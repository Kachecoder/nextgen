"use client"

import { useEffect, useRef } from "react"

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      try {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      } catch (error) {
        console.warn("Error setting canvas dimensions:", error)
      }
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle properties
    const particleCount = 50
    const particles: Particle[] = []

    interface Particle {
      x: number
      y: number
      radius: number
      color: string
      speedX: number
      speedY: number
      alpha: number
    }

    // Create particles
    try {
      for (let i = 0; i < particleCount; i++) {
        const colors = ["#0096b1", "#8b07e7", "#f0eadb"]
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          alpha: Math.random() * 0.5 + 0.1,
        })
      }
    } catch (error) {
      console.warn("Error creating particles:", error)
    }

    // Animation loop
    const animate = () => {
      try {
        animationId = requestAnimationFrame(animate)
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Update and draw particles
        particles.forEach((particle) => {
          if (!particle) return

          particle.x += particle.speedX
          particle.y += particle.speedY

          // Wrap around edges
          if (particle.x < 0) particle.x = canvas.width
          if (particle.x > canvas.width) particle.x = 0
          if (particle.y < 0) particle.y = canvas.height
          if (particle.y > canvas.height) particle.y = 0

          // Draw particle
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
          ctx.fillStyle = particle.color
          ctx.globalAlpha = particle.alpha
          ctx.fill()
        })
      } catch (error) {
        console.warn("Error in animation loop:", error)
      }
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-30" />
}
