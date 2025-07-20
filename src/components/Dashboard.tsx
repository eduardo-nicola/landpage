import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { 
  BarChart3, 
  DollarSign, 
  ShoppingCart, 
  TrendingUp, 
  Trophy,
  HelpCircle,
  ArrowUpRight,
  Bot
} from 'lucide-react';

interface DashboardProps {
  onPageChange: (page: string) => void;
}

export function Dashboard({ onPageChange }: DashboardProps) {
  const stats = [
    {
      title: 'Vendas do Mês',
      value: 'R$ 45.280',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: '#00969C'
    },
    {
      title: 'Carrinhos Recuperados',
      value: '89',
      change: '40% de recuperação',
      trend: 'up',
      icon: ShoppingCart,
      color: '#7FCC28'
    },
    {
      title: 'Taxa de Conversão',
      value: '3.2%',
      change: '+0.5% vs mês anterior',
      trend: 'up',
      icon: TrendingUp,
      color: '#00969C'
    },
    {
      title: 'Próximo Marco',
      value: '100k',
      change: '67% concluído',
      trend: 'up',
      icon: Trophy,
      color: '#7FCC28'
    }
  ];

  const quickActions = [
    {
      title: 'Análise de Vendas',
      description: 'Veja dados detalhados de vendas por período e produto',
      icon: BarChart3,
      color: '#00969C',
      page: 'sales'
    },
    {
      title: 'Carrinho Abandonado',
      description: 'Recuperação automática e análise do funil de checkout',
      icon: ShoppingCart,
      color: '#7FCC28',
      page: 'abandoned-carts'
    },
    {
      title: 'Help Desk IA',
      description: 'Tire dúvidas sobre o Greenn com nossa IA especializada',
      icon: HelpCircle,
      color: '#00969C',
      page: 'helpdesk'
    },
    {
      title: 'Gestão Financeira',
      description: 'Saldo atual, bloqueado e solicitação de saques',
      icon: DollarSign,
      color: '#7FCC28',
      page: 'financial'
    }
  ];

  const recentInsights = [
    { title: 'Melhor horário de vendas', description: 'Terças-feiras às 14h têm 23% mais conversão', action: 'Ver análise' },
    { title: 'Produto em alta', description: 'Curso de Excel teve +45% de vendas esta semana', action: 'Ver detalhes' },
    { title: 'Carrinho recuperado', description: '12 vendas recuperadas hoje geraram R$ 2.340', action: 'Ver recuperações' },
    { title: 'Marco próximo', description: 'Faltam apenas R$ 15k para atingir 100k', action: 'Ver progresso' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold" style={{ color: '#000C0B' }}>Dashboard</h1>
          <p style={{ color: '#6B7280' }}>Gerencie seu Greenn com praticidade</p>
        </div>
        <Button 
          className="bg-agent-gradient hover:bg-agent-gradient-hover text-white border-0"
          onClick={() => onPageChange('sales')}
        >
          <Bot className="mr-2 h-4 w-4" />
          Ver Análise Completa
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} style={{ borderColor: '#E5E7E7' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium" style={{ color: '#6B7280' }}>
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4" style={{ color: stat.color }} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" style={{ color: '#000C0B' }}>{stat.value}</div>
              <p className="text-xs flex items-center mt-1" style={{ color: '#6B7280' }}>
                <ArrowUpRight className="h-3 w-3 mr-1" style={{ color: '#00969C' }} />
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quickActions.map((action, index) => (
          <Card 
            key={index} 
            className="cursor-pointer hover:shadow-lg transition-shadow" 
            onClick={() => onPageChange(action.page)} 
            style={{ borderColor: '#E5E7E7' }}
          >
            <CardHeader>
              <CardTitle className="flex items-center" style={{ color: '#000C0B' }}>
                <action.icon className="mr-2 h-5 w-5" style={{ color: action.color }} />
                {action.title}
              </CardTitle>
              <CardDescription style={{ color: '#6B7280' }}>
                {action.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Recent Insights */}
      <Card style={{ borderColor: '#E5E7E7' }}>
        <CardHeader>
          <CardTitle style={{ color: '#000C0B' }}>Insights Recentes da IA</CardTitle>
          <CardDescription style={{ color: '#6B7280' }}>
            Recomendações personalizadas baseadas nos seus dados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentInsights.map((insight, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <div>
                  <p className="font-medium" style={{ color: '#000C0B' }}>{insight.title}</p>
                  <p className="text-sm" style={{ color: '#6B7280' }}>{insight.description}</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  style={{ borderColor: '#E5E7E7', color: '#00969C' }}
                >
                  {insight.action}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}