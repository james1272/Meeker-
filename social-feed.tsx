"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const mockTweets = [
  { id: 1, author: "@SadMonkeFan", content: "Just bought more $SADMONKE! To the moon! 🚀🌕", likes: 420, retweets: 69 },
  {
    id: 2,
    author: "@CryptoEnthusiast",
    content: "SadMonke is revolutionizing memecoins! #SADMONKE",
    likes: 1337,
    retweets: 42,
  },
  {
    id: 3,
    author: "@MemeQueen",
    content: "I can't stop laughing at these SadMonke memes 😂",
    likes: 999,
    retweets: 101,
  },
]

export default function SocialFeed() {
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    // In a real app, you'd fetch tweets from an API
    setTweets(mockTweets)
  }, [])

  return (
    <section className="py-16 bg-gray-100 dark:bg-[#232323]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-orange-400 mb-12">SadMonke Community</h2>
        <div className="space-y-4">
          {tweets.map((tweet, index) => (
            <motion.div
              key={tweet.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
            >
              <p className="font-bold mb-2">{tweet.author}</p>
              <p className="mb-4">{tweet.content}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>❤️ {tweet.likes}</span>
                <span>🔁 {tweet.retweets}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

