import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl border border-primary/20 p-12 md:p-16 text-center space-y-8 shadow-[var(--shadow-card)]">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-foreground">Ready to Automate Your </span>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Treasury?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transform your passive wallet into an intelligent, self-managing financial agent. 
                Start building with AutoPay.AI today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="group">
                Start Building
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glow" size="lg" className="group">
                <Github className="w-5 h-5" />
                View on GitHub
              </Button>
            </div>
            
            <div className="pt-8 grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-border/50">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Autonomous Operation</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-1">Multi-Chain</div>
                <div className="text-sm text-muted-foreground">EVM Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">Zero</div>
                <div className="text-sm text-muted-foreground">Manual Work</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
