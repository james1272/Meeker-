export default function Roadmap() {
  const milestones = [
    { phase: "Phase 1", items: ["Launch Website", "Community Building", "Token Launch"] },
    { phase: "Phase 2", items: ["CEX Listings", "NFT Collection", "Staking Platform"] },
    { phase: "Phase 3", items: ["SadMonke DAO", "Partnerships", "Metaverse Integration"] },
    { phase: "Phase 4", items: ["Mobile App", "Cross-chain Expansion", "Real-world Events"] },
  ]

  return (
    <section className="py-16 bg-[#1a1a1a]" id="roadmap">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-orange-400 mb-12">Roadmap</h2>
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="bg-[#232323] p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">{milestone.phase}</h3>
              <ul className="list-disc list-inside">
                {milestone.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

