import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { 
  HelpCircle, 
  Bot, 
  Search, 
  MessageSquare, 
  Clock, 
  CheckCircle,
  Send,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';

export function HelpDesk() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const quickHelp = [
    {
      category: 'Vendas',
      icon: '💰',
      questions: [
        'Como visualizar vendas dos últimos 30 dias?',
        'Por que minhas vendas diminuíram?',
        'Como filtrar vendas por produto específico?',
        'O que significam os insights de vendas?'
      ]
    },
    {
      category: 'Carrinhos',
      icon: '🛒',
      questions: [
        'Como funciona a recuperação de carrinho?',
        'Quantos carrinhos foram recuperados hoje?',
        'Por que meu funil de checkout está com problemas?',
        'Como melhorar a taxa de conversão?'
      ]
    },
    {
      category: 'Financeiro',
      icon: '💳',
      questions: [
        'Como solicitar um saque?',
        'Qual a diferença entre saldo atual e bloqueado?',
        'Quando o dinheiro cai na conta?',
        'Como atualizar dados bancários?'
      ]
    },
    {
      category: 'Marcos',
      icon: '🏆',
      questions: [
        'Como são calculados os marcos?',
        'Quando vou atingir 100k?',
        'O que acontece quando atinjo um marco?',
        'Como acelerar meu crescimento?'
      ]
    }
  ];

  const mockResponses: Record<string, string> = {
    'Como visualizar vendas dos últimos 30 dias?': 'Para visualizar suas vendas dos últimos 30 dias, vá até "Dados de Vendas" no menu lateral e selecione o período de 30 dias. Você verá um gráfico detalhado com todas as informações, incluindo insights automáticos da IA sobre seu desempenho.',
    'Como funciona a recuperação de carrinho?': 'Nossa IA monitora automaticamente carrinhos abandonados e envia lembretes personalizados para os clientes. O sistema analisa o comportamento de compra e otimiza o timing e conteúdo dos lembretes para maximizar a recuperação.',
    'Como solicitar um saque?': 'Na seção "Financeiro", você pode solicitar um saque clicando em "Solicitar Saque". O dinheiro será enviado para a última conta bancária cadastrada. Lembre-se que apenas o saldo atual (não bloqueado) pode ser sacado.',
    'Como são calculados os marcos?': 'Os marcos são baseados no seu faturamento total acumulado: 100k, 500k e 1M. O cálculo é atualizado automaticamente conforme suas vendas são processadas. Você pode acompanhar seu progresso na seção "Marcos".'
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold" style={{ color: '#000C0B' }}>Help Desk Inteligente</h1>
          <p style={{ color: '#6B7280' }}>Tire suas dúvidas sobre o Greenn com nossa IA especializada</p>
        </div>
        <div className="flex items-center space-x-2">
          <Bot className="w-5 h-5" style={{ color: '#00969C' }} />
          <Badge variant="outline" style={{ borderColor: '#00969C', color: '#00969C' }}>
            IA Online
          </Badge>
        </div>
      </div>

      {/* Search */}
      <Card style={{ borderColor: '#E5E7E7' }}>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: '#6B7280' }} />
            <Input
              placeholder="Digite sua dúvida sobre o Greenn..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-12"
              style={{ borderColor: '#E5E7E7' }}
            />
            <Button 
              size="sm" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-agent-gradient hover:bg-agent-gradient-hover text-white border-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card style={{ borderColor: '#E5E7E7' }}>
          <CardContent className="p-6 text-center">
            <Clock className="w-8 h-8 mx-auto mb-2" style={{ color: '#00969C' }} />
            <h3 className="font-semibold" style={{ color: '#000C0B' }}>Tempo de Resposta</h3>
            <p className="text-2xl font-bold" style={{ color: '#00969C' }}>Instantâneo</p>
          </CardContent>
        </Card>
        <Card style={{ borderColor: '#E5E7E7' }}>
          <CardContent className="p-6 text-center">
            <MessageSquare className="w-8 h-8 mx-auto mb-2" style={{ color: '#7FCC28' }} />
            <h3 className="font-semibold" style={{ color: '#000C0B' }}>Dúvidas Hoje</h3>
            <p className="text-2xl font-bold" style={{ color: '#7FCC28' }}>12</p>
          </CardContent>
        </Card>
        <Card style={{ borderColor: '#E5E7E7' }}>
          <CardContent className="p-6 text-center">
            <CheckCircle className="w-8 h-8 mx-auto mb-2" style={{ color: '#00969C' }} />
            <h3 className="font-semibold" style={{ color: '#000C0B' }}>Taxa de Resolução</h3>
            <p className="text-2xl font-bold" style={{ color: '#00969C' }}>98%</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Help Categories */}
      <div className="grid md:grid-cols-2 gap-6">
        {quickHelp.map((category, index) => (
          <Card key={index} style={{ borderColor: '#E5E7E7' }}>
            <CardHeader>
              <CardTitle className="flex items-center" style={{ color: '#000C0B' }}>
                <span className="text-2xl mr-2">{category.icon}</span>
                {category.category}
              </CardTitle>
              <CardDescription style={{ color: '#6B7280' }}>
                Dúvidas frequentes sobre {category.category.toLowerCase()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {category.questions.map((question, qIndex) => (
                  <Button
                    key={qIndex}
                    variant="ghost"
                    className="w-full justify-start text-left h-auto py-3 px-3"
                    onClick={() => setSelectedQuestion(question)}
                    style={{ color: '#000C0B' }}
                  >
                    <HelpCircle className="w-4 h-4 mr-2 flex-shrink-0" style={{ color: '#6B7280' }} />
                    <span className="text-sm">{question}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Response Section */}
      {selectedQuestion && (
        <Card className="border-2" style={{ borderColor: 'rgba(0, 150, 156, 0.2)', background: 'linear-gradient(135deg, #f0fdfd 0%, #ffffff 100%)' }}>
          <CardHeader>
            <CardTitle className="flex items-center" style={{ color: '#000C0B' }}>
              <Bot className="w-5 h-5 mr-2" style={{ color: '#00969C' }} />
              Resposta da IA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 p-3 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
              <p className="font-medium text-sm mb-2" style={{ color: '#6B7280' }}>Sua pergunta:</p>
              <p style={{ color: '#000C0B' }}>{selectedQuestion}</p>
            </div>
            <div className="mb-4">
              <p style={{ color: '#000C0B' }}>
                {mockResponses[selectedQuestion] || 'Nossa IA está processando sua pergunta. Em instantes você terá uma resposta personalizada baseada na nossa base de conhecimento do Greenn.'}
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#E5E7E7' }}>
              <p className="text-sm" style={{ color: '#6B7280' }}>Esta resposta foi útil?</p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" style={{ borderColor: '#E5E7E7' }}>
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  Sim
                </Button>
                <Button variant="outline" size="sm" style={{ borderColor: '#E5E7E7' }}>
                  <ThumbsDown className="w-4 h-4 mr-1" />
                  Não
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}