import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  ShoppingCart, 
  Mail, 
  MessageSquare, 
  Smartphone,
  TrendingUp,
  Users,
  Clock,
  Target
} from 'lucide-react';

export function AbandonedCarts() {
  const [period, setPeriod] = useState('30');

  const funnelData = [
    { step: 'Visitantes', count: 2543, percentage: 100, color: 'bg-blue-500' },
    { step: 'Adicionaram ao Carrinho', count: 892, percentage: 35, color: 'bg-green-500' },
    { step: 'Iniciaram Checkout', count: 634, percentage: 25, color: 'bg-yellow-500' },
    { step: 'Finalizaram Compra', count: 267, percentage: 10.5, color: 'bg-purple-500' }
  ];

  const recoveryStats = {
    total: 625,
    recovered: 189,
    rate: 30.2,
    revenue: 'R$ 18.450'
  };

  const recoveryMethods = [
    { method: 'E-mail', sent: 625, opened: 287, clicked: 98, recovered: 76, color: 'text-blue-600' },
    { method: 'WhatsApp', sent: 312, opened: 289, clicked: 156, recovered: 67, color: 'text-green-600' },
    { method: 'SMS', sent: 198, opened: 156, clicked: 45, recovered: 46, color: 'text-purple-600' }
  ];

  const recentRecoveries = [
    { customer: 'Maria S.', product: 'Curso de Excel', value: 'R$ 297', method: 'WhatsApp', time: '2h atrás' },
    { customer: 'João P.', product: 'E-book Marketing', value: 'R$ 47', method: 'E-mail', time: '4h atrás' },
    { customer: 'Ana L.', product: 'Template Planilhas', value: 'R$ 67', method: 'SMS', time: '6h atrás' },
    { customer: 'Carlos M.', product: 'Curso Python', value: 'R$ 397', method: 'E-mail', time: '8h atrás' }
  ];

  const insights = [
    {
      title: 'Melhor Timing',
      description: 'Mensagens enviadas 2h após abandono têm 45% mais conversão',
      recommendation: 'Ajustar sequência para envio mais rápido'
    },
    {
      title: 'Oferta Eficaz',
      description: 'Desconto de 15% aumenta recuperação em 28%',
      recommendation: 'Implementar desconto progressivo'
    },
    {
      title: 'Canal Preferido',
      description: 'WhatsApp tem 67% de taxa de abertura vs 46% do e-mail',
      recommendation: 'Priorizar WhatsApp para produtos premium'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Carrinhos Abandonados</h1>
          <p className="text-gray-600">Análise do funil e recuperação automatizada</p>
        </div>
        <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
          <MessageSquare className="mr-2 h-4 w-4" />
          Configurar Mensagens
        </Button>
      </div>

      {/* Recovery Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Carrinhos Abandonados</CardTitle>
            <ShoppingCart className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{recoveryStats.total}</div>
            <p className="text-xs text-gray-600">nos últimos 30 dias</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recuperados</CardTitle>
            <Target className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{recoveryStats.recovered}</div>
            <p className="text-xs text-green-600">
              {recoveryStats.rate}% de taxa de recuperação
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Recuperada</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{recoveryStats.revenue}</div>
            <p className="text-xs text-blue-600">+23% vs mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Oportunidade</CardTitle>
            <Clock className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 42.8k</div>
            <p className="text-xs text-purple-600">potencial em carrinhos ativos</p>
          </CardContent>
        </Card>
      </div>

      {/* Conversion Funnel */}
      <Card>
        <CardHeader>
          <CardTitle>Funil de Conversão</CardTitle>
          <CardDescription>
            Análise do comportamento dos usuários no checkout
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {funnelData.map((step, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">{step.step}</span>
                  <div className="text-right">
                    <span className="font-bold text-gray-900">{step.count.toLocaleString()}</span>
                    <span className="text-sm text-gray-600 ml-2">({step.percentage}%)</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${step.color}`}
                    style={{ width: `${step.percentage}%` }}
                  ></div>
                </div>
                {index < funnelData.length - 1 && (
                  <p className="text-xs text-red-600">
                    -{((funnelData[index].count - funnelData[index + 1].count) / funnelData[index].count * 100).toFixed(1)}% abandonaram nesta etapa
                  </p>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recovery Methods Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Performance por Canal</CardTitle>
          <CardDescription>
            Eficácia de cada método de recuperação
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {recoveryMethods.map((method, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {method.method === 'E-mail' && <Mail className={`mr-2 h-5 w-5 ${method.color}`} />}
                    {method.method === 'WhatsApp' && <MessageSquare className={`mr-2 h-5 w-5 ${method.color}`} />}
                    {method.method === 'SMS' && <Smartphone className={`mr-2 h-5 w-5 ${method.color}`} />}
                    <span className="font-medium text-gray-900">{method.method}</span>
                  </div>
                  <Badge variant="secondary">
                    {((method.recovered / method.sent) * 100).toFixed(1)}% recuperação
                  </Badge>
                </div>
                
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Enviadas</p>
                    <p className="font-medium">{method.sent}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Abertas</p>
                    <p className="font-medium">{method.opened}</p>
                    <p className="text-xs text-gray-500">
                      {((method.opened / method.sent) * 100).toFixed(1)}%
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Cliques</p>
                    <p className="font-medium">{method.clicked}</p>
                    <p className="text-xs text-gray-500">
                      {((method.clicked / method.opened) * 100).toFixed(1)}%
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Recuperadas</p>
                    <p className={`font-medium ${method.color}`}>{method.recovered}</p>
                    <p className="text-xs text-gray-500">
                      {((method.recovered / method.clicked) * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Recoveries */}
      <Card>
        <CardHeader>
          <CardTitle>Recuperações Recentes</CardTitle>
          <CardDescription>
            Últimas vendas recuperadas pela IA
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentRecoveries.map((recovery, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{recovery.customer}</p>
                    <p className="text-sm text-gray-600">{recovery.product}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">{recovery.value}</p>
                  <div className="flex items-center text-xs text-gray-600">
                    <Badge variant="outline" className="mr-2">{recovery.method}</Badge>
                    {recovery.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Insights da IA</CardTitle>
          <CardDescription>
            Recomendações para melhorar sua taxa de recuperação
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">{insight.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{insight.description}</p>
                <Badge variant="outline" className="text-xs">
                  🤖 {insight.recommendation}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}