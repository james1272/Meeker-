"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function MiniGame() {
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      setPosition({
        x: Math.random() * (window.innerWidth - 50),
        y: Math.random() * (400 - 50),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleClick = () => {
    if (!gameOver) {
      setScore(score + 1)
      if (score + 1 >= 10) {
        setGameOver(true)
      }
    }
  }

  const resetGame = () => {
    setScore(0)
    setGameOver(false)
  }

  return (
    <section className="py-16 bg-gray-100 dark:bg-[#232323]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-orange-400 mb-12">Catch the SadMonke</h2>
        <div className="relative h-[400px] bg-white dark:bg-gray-700 rounded-lg overflow-hidden">
          {!gameOver ? (
            <motion.div
              className="absolute w-12 h-12 bg-yellow-400 rounded-full cursor-pointer"
              style={{ left: position.x, top: position.y }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.5 }}
              onClick={handleClick}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Game Over!</h3>
                <p className="mb-4">Your score: {score}</p>
                <button
                  onClick={resetGame}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                >
                  Play Again
                </button>
              </div>
            </div>
          )}
        </div>
        <p className="text-center mt-4">Score: {score}</p>
      </div>
    </section>
  )
}

