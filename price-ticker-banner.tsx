"use client"

import { useEffect, useState } from "react"

export default function PriceTickerBanner() {
  const [price, setPrice] = useState(0.00001234)
  const [marketCap, setMarketCap] = useState(1000000)

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice((prev) => prev * (1 + (Math.random() - 0.5) * 0.01))
      setMarketCap((prev) => prev * (1 + (Math.random() - 0.5) * 0.005))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-green-600 text-white py-2 px-4 text-sm font-bold sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <span>$SADMONKE: ${price.toFixed(8)}</span>
        <span>Market Cap: ${marketCap.toLocaleString()}</span>
      </div>
    </div>
  )
}

