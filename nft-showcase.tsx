"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const nfts = [
  { id: 1, name: "Sad Monke #1", image: "/placeholder.svg" },
  { id: 2, name: "Sad Monke #2", image: "/placeholder.svg" },
  { id: 3, name: "Sad Monke #3", image: "/placeholder.svg" },
  { id: 4, name: "Sad Monke #4", image: "/placeholder.svg" },
]

export default function NFTShowcase() {
  const [selectedNFT, setSelectedNFT] = useState(null)

  return (
    <section className="py-16 bg-gray-100 dark:bg-[#232323]" id="nft">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-orange-400 mb-12">NFT Collection</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {nfts.map((nft) => (
            <motion.div
              key={nft.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedNFT(nft)}
              className="cursor-pointer"
            >
              <img src={nft.image || "/placeholder.svg"} alt={nft.name} className="w-full h-auto rounded-lg" />
              <p className="mt-2 text-center">{nft.name}</p>
            </motion.div>
          ))}
        </div>
        {selectedNFT && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedNFT(null)}
          >
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg max-w-md">
              <img
                src={selectedNFT.image || "/placeholder.svg"}
                alt={selectedNFT.name}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{selectedNFT.name}</h3>
              <p>This is a unique SadMonke NFT. Collect them all!</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

