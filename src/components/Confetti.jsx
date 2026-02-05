import { useEffect, useRef } from 'react'
import './Confetti.css'

function Confetti() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const confettiPieces = []
    const confettiCount = 150
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#00d2d3']

    class ConfettiPiece {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = -20
        this.w = Math.random() * 10 + 5
        this.h = Math.random() * 10 + 5
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.speedY = Math.random() * 3 + 2
        this.speedX = Math.random() * 2 - 1
        this.rotation = Math.random() * 360
        this.rotationSpeed = Math.random() * 10 - 5
      }

      update() {
        this.y += this.speedY
        this.x += this.speedX
        this.rotation += this.rotationSpeed

        if (this.y > canvas.height) {
          this.y = -20
          this.x = Math.random() * canvas.width
        }
      }

      draw() {
        ctx.save()
        ctx.translate(this.x + this.w / 2, this.y + this.h / 2)
        ctx.rotate(this.rotation * Math.PI / 180)
        ctx.fillStyle = this.color
        ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h)
        ctx.restore()
      }
    }

    for (let i = 0; i < confettiCount; i++) {
      confettiPieces.push(new ConfettiPiece())
    }

    let animationId

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      confettiPieces.forEach(piece => {
        piece.update()
        piece.draw()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="confetti-canvas" />
}

export default Confetti
