import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Clock, X, Check, ArrowRight, Bot, BarChart3, HelpCircle, ShoppingCart } from "lucide-react";

export function BeforeAfter() {
  return (
    <section id="benefits" className="py-24" style={{ background: 'linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: '#000C0B' }}>
            Antes vs Depois do Agent Green
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
            Veja como nossa IA revoluciona a gestão do seu negócio no Greenn
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Before */}
          <Card className="border-2" style={{ borderColor: '#FEE2E2', backgroundColor: 'rgba(254, 226, 226, 0.3)' }}>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#EF4444' }}>
                <X className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl" style={{ color: '#991B1B' }}>Método Tradicional</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <Clock className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: '#EF4444' }} />
                <div>
                  <p className="font-medium" style={{ color: '#991B1B' }}>Dias analisando</p>
                  <p className="text-sm" style={{ color: '#B91C1C' }}>dados de vendas manualmente</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <X className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: '#EF4444' }} />
                <div>
                  <p className="font-medium" style={{ color: '#991B1B' }}>Carrinhos perdidos</p>
                  <p className="text-sm" style={{ color: '#B91C1C' }}>Sem estratégia de recuperação</p>
                </div>
              </div>

              <div className="flex items-start">
                <X className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: '#EF4444' }} />
                <div>
                  <p className="font-medium" style={{ color: '#991B1B' }}>Suporte lento</p>
                  <p className="text-sm" style={{ color: '#B91C1C' }}>Horas esperando respostas</p>
                </div>
              </div>

              <div className="flex items-start">
                <X className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: '#EF4444' }} />
                <div>
                  <p className="font-medium" style={{ color: '#991B1B' }}>Sem insights</p>
                  <p className="text-sm" style={{ color: '#B91C1C' }}>Decisões baseadas em intuição</p>
                </div>
              </div>

              <div className="flex items-start">
                <X className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: '#EF4444' }} />
                <div>
                  <p className="font-medium" style={{ color: '#991B1B' }}>Gestão complexa</p>
                  <p className="text-sm" style={{ color: '#B91C1C' }}>Múltiplas ferramentas diferentes</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Arrow */}
          <div className="hidden md:flex justify-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-agent-gradient">
              <Bot className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* After */}
          <Card className="border-2" style={{ borderColor: 'rgba(0, 150, 156, 0.2)', backgroundColor: 'rgba(240, 253, 253, 0.5)' }}>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-agent-gradient">
                <Check className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl" style={{ color: '#134E4A' }}>Com Agent Green</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <BarChart3 className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: '#00969C' }} />
                <div>
                  <p className="font-medium" style={{ color: '#134E4A' }}>Análise instantânea</p>
                  <p className="text-sm" style={{ color: '#047857' }}>Dados organizados automaticamente</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <ShoppingCart className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: '#7FCC28' }} />
                <div>
                  <p className="font-medium" style={{ color: '#134E4A' }}>Recuperação automática</p>
                  <p className="text-sm" style={{ color: '#047857' }}>IA recupera vendas perdidas</p>
                </div>
              </div>

              <div className="flex items-start">
                <HelpCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: '#00969C' }} />
                <div>
                  <p className="font-medium" style={{ color: '#134E4A' }}>Suporte imediato</p>
                  <p className="text-sm" style={{ color: '#047857' }}>Respostas instantâneas 24/7</p>
                </div>
              </div>

              <div className="flex items-start">
                <Check className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: '#7FCC28' }} />
                <div>
                  <p className="font-medium" style={{ color: '#134E4A' }}>Insights inteligentes</p>
                  <p className="text-sm" style={{ color: '#047857' }}>Recomendações personalizadas</p>
                </div>
              </div>

              <div className="flex items-start">
                <Check className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: '#00969C' }} />
                <div>
                  <p className="font-medium" style={{ color: '#134E4A' }}>Tudo integrado</p>
                  <p className="text-sm" style={{ color: '#047857' }}>Uma plataforma, todas as soluções</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#00969C' }}>89%</div>
            <p style={{ color: '#6B7280' }}>Taxa de recuperação</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#7FCC28' }}>24/7</div>
            <p style={{ color: '#6B7280' }}>Suporte disponível</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#00969C' }}>100%</div>
            <p style={{ color: '#6B7280' }}>Automático</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#7FCC28' }}>0</div>
            <p style={{ color: '#6B7280' }}>Configuração manual</p>
          </div>
        </div>

        {/* Success story */}
        <div className="mt-16 rounded-3xl p-8 md:p-12 text-white text-center bg-agent-gradient">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Mais de R$ 5M em Vendas Analisadas
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Empreendedores de todo o Brasil já otimizaram suas vendas e recuperaram milhares em carrinhos abandonados
          </p>
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div>
              <div className="text-2xl font-bold">R$ 5M+</div>
              <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Vendas analisadas</p>
            </div>
            <div>
              <div className="text-2xl font-bold">12k+</div>
              <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Carrinhos recuperados</p>
            </div>
            <div>
              <div className="text-2xl font-bold">3.500+</div>
              <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Dúvidas resolvidas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}