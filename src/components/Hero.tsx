import { Button } from "./ui/button";
import { ArrowRight, Bot, BarChart3, ShoppingCart, HelpCircle, Trophy } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center" style={{ background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 50%, #e8f7f7 100%)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 opacity-20 blur-3xl rounded-full bg-agent-gradient"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 opacity-20 blur-3xl rounded-full bg-agent-gradient-reverse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-8" style={{ backgroundColor: 'rgba(0, 150, 156, 0.1)', color: '#000C0B' }}>
            <Bot className="w-4 h-4 mr-2" style={{ color: '#00969C' }} />
            <span className="text-sm font-medium">Agent Green - Praticidade em Ação</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ color: '#000C0B' }}>
            Gerencie seu{" "}
            <span className="text-agent-gradient">
              Greenn
            </span>{" "}
            com Praticidade
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto" style={{ color: '#6B7280' }}>
            O Agent Green torna simples o que antes era complexo. 
            Analise vendas, recupere carrinhos, tire dúvidas e acompanhe seus marcos de crescimento.
          </p>

          {/* Quick Actions Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="text-center p-4 rounded-xl" style={{ backgroundColor: 'rgba(0, 150, 156, 0.05)' }}>
              <BarChart3 className="w-8 h-8 mx-auto mb-2" style={{ color: '#00969C' }} />
              <h3 className="font-semibold text-sm" style={{ color: '#000C0B' }}>Análise de Vendas</h3>
              <p className="text-xs" style={{ color: '#6B7280' }}>7, 30 ou 90 dias</p>
            </div>
            <div className="text-center p-4 rounded-xl" style={{ backgroundColor: 'rgba(127, 204, 40, 0.05)' }}>
              <ShoppingCart className="w-8 h-8 mx-auto mb-2" style={{ color: '#7FCC28' }} />
              <h3 className="font-semibold text-sm" style={{ color: '#000C0B' }}>Recuperação</h3>
              <p className="text-xs" style={{ color: '#6B7280' }}>Carrinhos abandonados</p>
            </div>
            <div className="text-center p-4 rounded-xl" style={{ backgroundColor: 'rgba(0, 150, 156, 0.05)' }}>
              <HelpCircle className="w-8 h-8 mx-auto mb-2" style={{ color: '#00969C' }} />
              <h3 className="font-semibold text-sm" style={{ color: '#000C0B' }}>Help Desk IA</h3>
              <p className="text-xs" style={{ color: '#6B7280' }}>Solução de dúvidas</p>
            </div>
            <div className="text-center p-4 rounded-xl" style={{ backgroundColor: 'rgba(127, 204, 40, 0.05)' }}>
              <Trophy className="w-8 h-8 mx-auto mb-2" style={{ color: '#7FCC28' }} />
              <h3 className="font-semibold text-sm" style={{ color: '#000C0B' }}>Marcos</h3>
              <p className="text-xs" style={{ color: '#6B7280' }}>100k, 500k, 1kk</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-agent-gradient hover:bg-agent-gradient-hover text-white text-lg px-8 py-4 h-auto border-0"
            >
              Começar no Agent Green
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto border-2 hover:bg-agent-gray"
              style={{ borderColor: '#E5E7E7', color: '#000C0B' }}
            >
              Ver na Prática
            </Button>
          </div>

          {/* Value Props */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8" style={{ color: '#6B7280' }}>
            <div className="flex items-center">
              <Bot className="w-5 h-5 mr-2" style={{ color: '#00969C' }} />
              <span>Tudo em um só lugar</span>
            </div>
            <div className="flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" style={{ color: '#7FCC28' }} />
              <span>Insights automáticos</span>
            </div>
            <div className="flex items-center">
              <HelpCircle className="w-5 h-5 mr-2" style={{ color: '#00969C' }} />
              <span>Suporte inteligente</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}