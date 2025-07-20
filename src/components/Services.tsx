import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { 
  Bot, 
  BarChart3, 
  ShoppingCart, 
  HelpCircle, 
  Trophy, 
  Calendar, 
  Filter, 
  Lightbulb,
  // Funnel,
  RefreshCw,
  Target,
  Clock,
  CheckCircle
} from "lucide-react";

export function Services() {
  const mainFeatures = [
    {
      icon: BarChart3,
      title: "Dados das Vendas",
      description: "Análise completa do seu desempenho comercial",
      details: [
        { icon: Calendar, text: "Períodos de 7, 30 ou 90 dias" },
        { icon: Filter, text: "Filtros por produtos específicos" },
        { icon: Lightbulb, text: "Insights automáticos da IA" }
      ],
      color: "#00969C"
    },
    {
      icon: ShoppingCart,
      title: "Carrinho Abandonado",
      description: "Recuperação inteligente de vendas perdidas",
      details: [
        { icon: RefreshCw, text: "Análise completa do funil de checkout" },
        { icon: RefreshCw, text: "Vendas recuperadas automaticamente" },
        { icon: Target, text: "Estratégias personalizadas de recuperação" }
      ],
      color: "#7FCC28"
    },
    {
      icon: HelpCircle,
      title: "Help Desk Inteligente",
      description: "Solução instantânea de dúvidas",
      details: [
        { icon: Bot, text: "IA especializada no Greenn" },
        { icon: Clock, text: "Respostas 24/7 em tempo real" },
        { icon: CheckCircle, text: "Base de conhecimento sempre atualizada" }
      ],
      color: "#00969C"
    },
    {
      icon: Trophy,
      title: "Marcos de Crescimento",
      description: "Acompanhe sua evolução no Greenn",
      details: [
        { icon: Target, text: "Marcos de 100k, 500k e 1M" },
        { icon: RefreshCw, text: "Atualizações automáticas de progresso" },
        { icon: Lightbulb, text: "Estratégias para o próximo nível" }
      ],
      color: "#7FCC28"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: '#000C0B' }}>
            O Que Você Pode Fazer no Agent Green
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
            Praticidade total para gerenciar seu negócio no Greenn
          </p>
        </div>

        {/* Main feature card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="relative overflow-hidden border-2" style={{ borderColor: 'rgba(0, 150, 156, 0.2)', background: 'linear-gradient(135deg, #f0fdfd 0%, #e8f7f7 100%)' }}>
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full translate-x-16 -translate-y-16 bg-agent-gradient"></div>
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 bg-agent-gradient">
                <Bot className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-3xl" style={{ color: '#000C0B' }}>
                Agent Green - Seu Assistente Prático
              </CardTitle>
              <CardDescription className="text-xl" style={{ color: '#6B7280' }}>
                Transforme dados em ações. Simplifique seu crescimento no Greenn.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center">
                  <Clock className="w-6 h-6 mr-3" style={{ color: '#00969C' }} />
                  <span style={{ color: '#000C0B' }}>Economia de tempo</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 mr-3" style={{ color: '#7FCC28' }} />
                  <span style={{ color: '#000C0B' }}>Ações automáticas</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 mr-3" style={{ color: '#00969C' }} />
                  <span style={{ color: '#000C0B' }}>Resultados práticos</span>
                </div>
              </div>
              
              <Button 
                size="lg"
                className="bg-agent-gradient hover:bg-agent-gradient-hover text-white text-lg px-8 py-4 h-auto border-0"
              >
                Começar no Agent Green
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300" style={{ borderColor: 'rgba(0, 150, 156, 0.1)' }}>
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{ backgroundColor: feature.color }}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-1" style={{ color: '#000C0B' }}>
                      {feature.title}
                    </CardTitle>
                    <p className="text-sm" style={{ color: '#6B7280' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center">
                      <detail.icon className="w-4 h-4 mr-3" style={{ color: feature.color }} />
                      <span className="text-sm" style={{ color: '#000C0B' }}>{detail.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How it works section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-4xl font-bold mb-12" style={{ color: '#000C0B' }}>
            Como Usar o Agent Green na Prática
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-agent-gradient">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold mb-2" style={{ color: '#000C0B' }}>Faça Login</h4>
              <p className="text-sm" style={{ color: '#6B7280' }}>Acesse sua conta no Agent Green com seus dados do Greenn</p>
            </div>
            
            <div className="relative">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #00969C 0%, #00969C 32%, #7FCC28 98%, #7FCC28 100%)' }}>
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold mb-2" style={{ color: '#000C0B' }}>Escolha a Ação</h4>
              <p className="text-sm" style={{ color: '#6B7280' }}>Selecione o que deseja: analisar vendas, recuperar carrinhos ou tirar dúvidas</p>
            </div>
            
            <div className="relative">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-agent-gradient">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold mb-2" style={{ color: '#000C0B' }}>Veja os Resultados</h4>
              <p className="text-sm" style={{ color: '#6B7280' }}>Receba dados organizados, insights personalizados e ações recomendadas</p>
            </div>
            
            <div className="relative">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #00969C 0%, #00969C 32%, #7FCC28 98%, #7FCC28 100%)' }}>
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h4 className="font-semibold mb-2" style={{ color: '#000C0B' }}>Aplique as Ações</h4>
              <p className="text-sm" style={{ color: '#6B7280' }}>Use os insights para otimizar seus resultados no Greenn</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}