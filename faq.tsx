"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is SadMonke?",
    answer:
      "SadMonke is a revolutionary memecoin that aims to unite the crypto community through humor and decentralization.",
  },
  {
    question: "How can I buy SadMonke tokens?",
    answer:
      "You can buy SadMonke tokens on decentralized exchanges like Uniswap or PancakeSwap. Check our 'How to Buy' section for detailed instructions.",
  },
  {
    question: "Is SadMonke a safe investment?",
    answer:
      "As with all cryptocurrencies, investing in SadMonke carries risks. Always do your own research and never invest more than you can afford to lose.",
  },
  {
    question: "What makes SadMonke different from other memecoins?",
    answer:
      "SadMonke combines cutting-edge 'Number Go Up' technology with a passionate community and a commitment to decentralization.",
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-white dark:bg-[#1a1a1a]" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-orange-400 mb-12">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-gray-100 dark:bg-gray-800 rounded-lg focus:outline-none"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown
                  className={`transform transition-transform duration-200 ${activeIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="p-4 bg-white dark:bg-gray-700 rounded-b-lg">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

