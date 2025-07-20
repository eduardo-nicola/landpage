import { Button } from "./ui/button";
import { Bot } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <Button 
        className="w-full py-4 shadow-lg animate-pulse bg-agent-gradient hover:bg-agent-gradient-hover text-white border-0"
        size="lg"
      >
        <Bot className="mr-2 w-5 h-5" />
        Analisar Minhas Vendas - Grátis
      </Button>
    </div>
  );
}