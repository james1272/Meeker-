export default function Team() {
  const teamMembers = [
    { name: "Mutoshi", role: "Founder & Lead Developer", image: "/placeholder.svg" },
    { name: "Banana Joe", role: "Marketing Guru", image: "/placeholder.svg" },
    { name: "Dr. Ape", role: "Tokenomics Expert", image: "/placeholder.svg" },
    { name: "Chimp Champ", role: "Community Manager", image: "/placeholder.svg" },
  ]

  return (
    <section className="py-16 bg-[#1a1a1a]" id="team">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-orange-400 mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#232323] p-6 rounded-lg text-center">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

