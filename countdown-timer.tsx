"use client"

import { useState, useEffect } from "react"

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <span key={interval} className="text-2xl font-bold">
        {timeLeft[interval]} {interval}{" "}
      </span>,
    )
  })

  return (
    <div className="mb-8">
      <h3 className="text-xl mb-2">Next Big Event Countdown</h3>
      <div className="bg-[#232323] p-4 rounded-lg">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </div>
  )
}

