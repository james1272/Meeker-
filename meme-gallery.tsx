"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function MemeGallery() {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null)

  const memeContent = [
    {
      type: "video",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID_20250213_164854_726-pc4U0E8n3zjHHmfMJOUbt7iEoqRWAD.mp4",
      thumbnail:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250213_101538_181.jpg-X5G3uSVvR5ZuirSTKiV6QDpDR8QLNi.jpeg",
      title: "SadMonke Animation",
    },
    {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250213_101538_181.jpg-X5G3uSVvR5ZuirSTKiV6QDpDR8QLNi.jpeg",
      title: "SadMonke Logo",
    },
  ]

  return (
    <section className="py-16 bg-[#232323]" id="memes">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-orange-400 mb-12">Meme Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memeContent.map((media, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-0">
                    {media.type === "video" ? (
                      <div className="relative aspect-square">
                        <img
                          src={media.thumbnail || "/placeholder.svg"}
                          alt={media.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                          <div className="w-16 h-16 rounded-full bg-white/25 flex items-center justify-center">
                            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={media.src || "/placeholder.svg"}
                        alt={media.title}
                        className="w-full aspect-square object-cover"
                      />
                    )}
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-[#1a1a1a] border-none">
                {media.type === "video" ? (
                  <video controls autoPlay loop className="w-full h-auto">
                    <source src={media.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={media.src || "/placeholder.svg"} alt={media.title} className="w-full h-auto" />
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}

