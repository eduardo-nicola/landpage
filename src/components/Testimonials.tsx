import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star, Quote, Bot } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Empreendedor Digital, InfoProdutos",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Agent Green me mostrou insights que eu não conseguia ver sozinho! Em 2 semanas otimizei minha conversão em 34% usando as recomendações da IA.",
      rating: 5,
      highlight: "+34% de conversão"
    },
    {
      name: "Mariana Silva",
      role: "Consultora de Marketing, DigitalPro",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b17c?w=150&h=150&fit=crop&crop=face",
      content: "A recuperação de carrinho é impressionante! Agent Green recuperou R$ 8.500 em vendas que eu teria perdido. O ROI foi imediato.",
      rating: 5,
      highlight: "R$ 8.500 recuperados"
    },
    {
      name: "Roberto Santos",
      role: "Empreendedor Digital, TechCursos",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "O Help Desk IA é fantástico! Resolve minhas dúvidas na hora, 24h por dia. É como ter um especialista sempre disponível.",
      rating: 5,
      highlight: "Suporte 24/7"
    },
    {
      name: "Ana Costa",
      role: "Coach de Vida, TransformAção",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Nunca imaginei que analisar vendas poderia ser tão simples! Os insights do Agent Green me ajudaram a identificar meu melhor horário de vendas.",
      rating: 5,
      highlight: "Insights valiosos"
    },
    {
      name: "Pedro Oliveira",
      role: "Professor Online, EduTech",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      content: "Como professor, preciso focar no ensino. Agent Green cuida da análise de dados e me dá tudo mastigado. Economizo horas toda semana!",
      rating: 5,
      highlight: "Tempo economizado"
    },
    {
      name: "Juliana Ferreira",
      role: "Designer Freelancer, Creative Studio",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      content: "Atingi minha meta de 100k muito mais rápido seguindo as estratégias do Agent Green. Agora já estou na jornada rumo aos 500k!",
      rating: 5,
      highlight: "Meta de 100k atingida"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: '#000C0B' }}>
            Quem Usa Agent Green Vende Mais
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
            Histórias reais de quem otimizou suas vendas com nossa inteligência artificial
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative border-2 hover:shadow-lg transition-all duration-300" style={{ borderColor: '#E5E7E7' }}>
              <CardContent className="p-6">
                {/* Quote icon */}
                <Quote className="w-8 h-8 mb-4" style={{ color: '#00969C' }} />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Highlight badge */}
                <div className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-4" style={{ backgroundColor: 'rgba(0, 150, 156, 0.1)', color: '#00969C' }}>
                  {testimonial.highlight}
                </div>

                {/* Content */}
                <p className="mb-6 italic" style={{ color: '#374151' }}>
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback style={{ backgroundColor: '#E5E7E7', color: '#000C0B' }}>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold" style={{ color: '#000C0B' }}>{testimonial.name}</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="rounded-3xl p-8 md:p-12 text-white bg-agent-gradient">
          <div className="text-center mb-8">
            <Bot className="w-16 h-16 mx-auto mb-4" style={{ color: 'rgba(255, 255, 255, 0.8)' }} />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Agent Green em Números
            </h3>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Resultados comprovados de quem confia na nossa inteligência artificial
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">R$ 5M+</div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Vendas analisadas</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">3.500+</div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Usuários ativos</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">89%</div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Taxa recuperação</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Suporte ativo</p>
            </div>
          </div>
        </div>

        {/* Video testimonial section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: '#000C0B' }}>
            Veja Agent Green em Ação
          </h3>
          <div className="max-w-3xl mx-auto rounded-2xl aspect-video flex items-center justify-center" style={{ backgroundColor: '#F3F4F6' }}>
            <div className="text-center">
              <Bot className="w-16 h-16 mx-auto mb-4" style={{ color: '#9CA3AF' }} />
              <p className="mb-4" style={{ color: '#6B7280' }}>Demonstração em vídeo</p>
              <button className="inline-flex items-center px-6 py-3 text-white rounded-lg transition-all bg-agent-gradient hover:bg-agent-gradient-hover">
                ▶ Assistir Demonstração
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}