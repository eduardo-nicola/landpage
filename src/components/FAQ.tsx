import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "O que exatamente o Agent Green faz?",
      answer: "Agent Green é uma IA especializada em analisar e otimizar seu negócio no Greenn. Nossa IA oferece análise detalhada de vendas com insights personalizados, recuperação automática de carrinhos abandonados, suporte inteligente 24/7 e acompanhamento de marcos de crescimento. Tudo para maximizar seus resultados."
    },
    {
      question: "Como funciona a análise de vendas?",
      answer: "Você pode visualizar seus dados de vendas em períodos de 7, 30 ou 90 dias, aplicar filtros por produtos específicos e receber insights automáticos da IA. Nossa inteligência artificial identifica padrões, tendências e oportunidades de otimização baseadas nos seus dados reais."
    },
    {
      question: "Como a IA recupera carrinhos abandonados?",
      answer: "Nossa IA monitora continuamente seu funil de checkout, identifica pontos de abandono e implementa estratégias automáticas de recuperação. Isso inclui análise do comportamento do cliente, otimização do processo de compra e acompanhamento das vendas recuperadas."
    },
    {
      question: "O Help Desk IA realmente funciona?",
      answer: "Sim! Nosso Help Desk IA foi treinado especificamente para o Greenn e resolve 98% das dúvidas instantaneamente. A IA tem acesso a toda base de conhecimento atualizada e oferece respostas personalizadas para suas questões específicas, 24 horas por dia."
    },
    {
      question: "Como são calculados os marcos de crescimento?",
      answer: "Os marcos (100k, 500k, 1M) são baseados no seu faturamento total acumulado. O Agent Green atualiza automaticamente seu progresso conforme suas vendas são processadas e oferece estratégias personalizadas para acelerar o crescimento até o próximo marco."
    },
    {
      question: "Preciso ter conhecimento técnico para usar?",
      answer: "Absolutamente não! Agent Green foi desenvolvido para ser intuitivo e prático. Você simplesmente acessa a plataforma, escolhe a análise desejada e recebe todos os insights organizados e prontos para usar. A IA cuida de toda a complexidade técnica."
    },
    {
      question: "Com que frequência os dados são atualizados?",
      answer: "Os dados são atualizados em tempo real! Suas vendas, carrinhos abandonados e marcos são processados automaticamente. A IA trabalha continuamente para garantir que você sempre tenha as informações mais recentes e insights relevantes."
    },
    {
      question: "Posso integrar com outras ferramentas?",
      answer: "Agent Green foi desenvolvido especificamente para o Greenn e se integra nativamente com toda a plataforma. Isso garante dados precisos, análises confiáveis e uma experiência unificada para gerenciar todos os aspectos do seu negócio digital."
    },
    {
      question: "Como é o suporte e treinamento?",
      answer: "Além do Help Desk IA disponível 24/7, oferecemos suporte humano especializado via chat e e-mail. Temos tutoriais detalhados, guias de otimização e nossa IA aprende continuamente para oferecer suporte cada vez melhor."
    },
    {
      question: "Posso testar o Agent Green?",
      answer: "Claro! Você pode acessar o Agent Green e experimentar todas as funcionalidades: análise de vendas, recuperação de carrinhos, Help Desk IA e acompanhamento de marcos. Veja como nossa inteligência artificial pode transformar a gestão do seu negócio."
    }
  ];

  return (
    <section id="faq" className="py-24" style={{ background: 'linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: '#000C0B' }}>
            Dúvidas Sobre o Agent Green
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
            Tudo o que você precisa saber sobre nossa inteligência artificial
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
                style={{ border: `1px solid #E5E7E7` }}
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-medium pr-4" style={{ color: '#000C0B' }}>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed" style={{ color: '#6B7280' }}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA section */}
        <div className="text-center mt-16">
          <div className="rounded-3xl p-8 md:p-12 text-white bg-agent-gradient">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto Para Otimizar Suas Vendas?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Junte-se a mais de 3.500 empreendedores que já otimizaram suas vendas com Agent Green
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white rounded-lg font-medium hover:bg-gray-50 transition-colors" style={{ color: '#00969C' }}>
                Começar no Agent Green
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white transition-colors hover:text-green-600">
                Ver Demonstração
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}