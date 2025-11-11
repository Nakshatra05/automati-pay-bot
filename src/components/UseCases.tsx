import { Building2, Repeat, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

const useCases = [
  {
    icon: Building2,
    title: "DAO Treasury Management",
    example: "Intent: 'Maintain 70% USDC on Avalanche, 30% on Base'",
    details: [
      "Agent checks balances hourly",
      "Detects Avalanche at 60%, Base at 40%",
      "Executes optimal swap via Only Swaps",
      "Confirms new ratios on-chain",
    ],
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Repeat,
    title: "Automated Rebalancing",
    example: "Intent: 'Swap 10% USDC to ETH when ETH < $2800'",
    details: [
      "Monitors ETH price continuously",
      "Triggers when condition met",
      "Calculates best execution route",
      "Logs transaction on-chain",
    ],
    color: "from-secondary/20 to-secondary/5",
  },
  {
    icon: DollarSign,
    title: "Streaming Payments",
    example: "Intent: 'Stream 0.01 USDC/second to compute provider'",
    details: [
      "Micro-payments via x402 protocol",
      "Cross-chain compatibility",
      "Pay-per-compute for DeAI agents",
      "Atomic and secure transfers",
    ],
    color: "from-primary/20 to-secondary/5",
  },
];

const UseCases = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Real-World </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Use Cases
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how AutoPay.AI transforms treasury management across different scenarios
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[var(--shadow-card)] group"
            >
              <div className="space-y-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <useCase.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-primary/80 font-mono bg-primary/5 px-3 py-2 rounded-lg">
                    {useCase.example}
                  </p>
                </div>
                
                <div className="space-y-3">
                  {useCase.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
