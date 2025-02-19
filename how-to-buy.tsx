export default function HowToBuy() {
  const steps = [
    { title: "Create a Wallet", description: "Download MetaMask or TrustWallet and set up your account." },
    { title: "Get Some ETH", description: "Purchase Ethereum from a centralized exchange or within your wallet." },
    { title: "Connect to DEX", description: "Visit Uniswap or PancakeSwap and connect your wallet." },
    {
      title: "Swap for $SADMONKE",
      description: "Enter the $SADMONKE contract address and swap your ETH for $SADMONKE tokens.",
    },
  ]

  return (
    <section className="py-16 bg-[#232323]" id="how-to-buy">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-orange-400 mb-12">How to Buy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">{`${index + 1}. ${step.title}`}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

