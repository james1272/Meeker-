import { PieChart } from "react-minimal-pie-chart"

export default function Tokenomics() {
  const data = [
    { title: "Liquidity", value: 50, color: "#22c55e" },
    { title: "Team", value: 20, color: "#3b82f6" },
    { title: "Marketing", value: 15, color: "#f59e0b" },
    { title: "Community Rewards", value: 15, color: "#ef4444" },
  ]

  return (
    <section className="py-16 bg-[#232323]" id="tokenomics">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-orange-400 mb-12">Tokenomics</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-64 h-64">
            <PieChart
              data={data}
              label={({ dataEntry }) => `${dataEntry.title} ${dataEntry.value}%`}
              labelStyle={{
                fontSize: "5px",
                fontFamily: "sans-serif",
                fill: "#fff",
              }}
              radius={42}
              labelPosition={112}
            />
          </div>
          <div className="space-y-4">
            {data.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-4 h-4" style={{ backgroundColor: item.color }}></div>
                <span>
                  {item.title}: {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

