import { Settings, Eye, Zap, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: Settings,
    title: "Define Intents",
    description: "Set high-level rules like 'Keep 70% USDC on Avalanche, 30% on Base' via dashboard, Telegram bot, or CLI.",
    color: "text-primary",
  },
  {
    icon: Eye,
    title: "Continuous Monitoring",
    description: "Agent observes on-chain balances, gas prices, token ratios, and bridge conditions across all connected chains.",
    color: "text-secondary",
  },
  {
    icon: Zap,
    title: "Autonomous Execution",
    description: "When deviation detected, calculates optimal route and executes cross-chain swaps using Only Swaps protocol.",
    color: "text-primary",
  },
  {
    icon: CheckCircle,
    title: "Verified On-Chain",
    description: "All actions secured by dcipher's BLS threshold signatures and permanently logged on-chain for transparency.",
    color: "text-secondary",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-foreground">How It </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Set your rules, and let AutoPay.AI handle the rest with trustless on-chain automation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/4 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-20" />
          
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[var(--shadow-card)] group"
            >
              <div className="space-y-4">
                <div className="relative">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-card to-muted flex items-center justify-center border border-border group-hover:border-${step.color.split('-')[1]}/40 transition-all`}>
                    <step.icon className={`w-7 h-7 ${step.color}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center text-xs font-bold text-muted-foreground">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
