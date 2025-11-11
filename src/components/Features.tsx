import { Shield, Zap, Network, Cpu, Coins, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Trustless & Secure",
    description: "All executions verified on-chain with BLS threshold signatures. No central authority needed.",
  },
  {
    icon: Zap,
    title: "24/7 Automation",
    description: "Agent runs continuously, monitoring conditions and executing swaps without manual intervention.",
  },
  {
    icon: Network,
    title: "Multi-Chain Native",
    description: "Seamless operations across all EVM chains with optimized routing via Only Swaps protocol.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Logic",
    description: "Advanced reasoning layer optimizes timing, avoids high gas, and adapts to market conditions.",
  },
  {
    icon: Coins,
    title: "Treasury Rebalancing",
    description: "Maintain target ratios across chains automatically. Perfect for DAOs and protocols.",
  },
  {
    icon: TrendingUp,
    title: "Cost Optimized",
    description: "Smart routing finds the most efficient paths, minimizing fees and slippage on every swap.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Key </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for autonomous on-chain treasury management
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[var(--shadow-card)] group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
