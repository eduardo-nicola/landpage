import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { 
  Trophy, 
  Target, 
  TrendingUp, 
  DollarSign,
  Users,
  Package,
  Star,
  Crown,
  Zap
} from 'lucide-react';

export function Milestones() {
  const currentRevenue = 67540; // Receita atual

  const milestones = [
    {
      id: '100k',
      title: 'Primeiro 100K',
      target: 100000,
      current: currentRevenue,
      icon: Target,
      color: 'bg-blue-500',
      rewards: ['🎉 Badge Empreendedor', '📊 Relatórios avançados', '💎 Suporte prioritário'],
      completed: false
    },
    {
      id: '500k',
      title: 'Meio Milhão',
      target: 500000,
      current: currentRevenue,
      icon: Crown,
      color: 'bg-purple-500',
      rewards: ['👑 Badge Elite', '🤝 Mentoria exclusiva', '🎯 Consultoria estratégica'],
      completed: false
    },
    {
      id: '1m',
      title: 'Primeiro Milhão',
      target: 1000000,
      current: currentRevenue,
      icon: Trophy,
      color: 'bg-yellow-500',
      rewards: ['🏆 Badge Milionário', '🚀 Acesso beta features', '🎪 Evento exclusivo'],
      completed: false
    }
  ];

  const achievements = [
    {
      title: 'Primeiro Produto Criado',
      description: 'Você criou seu primeiro produto com Agent Green',
      date: '15 de Janeiro, 2025',
      icon: Package,
      completed: true
    },
    {
      title: 'Primeira Venda',
      description: 'Parabéns pela sua primeira venda!',
      date: '16 de Janeiro, 2025',
      icon: DollarSign,
      completed: true
    },
    {
      title: '10 Produtos Criados',
      description: 'Você já criou 10 produtos com nossa IA',
      date: '20 de Janeiro, 2025',
      icon: Zap,
      completed: true
    },
    {
      title: '50 Vendas Realizadas',
      description: 'Alcançou a marca de 50 vendas',
      date: 'Em progresso',
      icon: TrendingUp,
      completed: false
    }
  ];

  const stats = {
    totalProducts: 23,
    totalSales: 186,
    conversionRate: 3.4,
    avgTicket: 247
  };

  const calculateProgress = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const getTimeToGoal = (current: number, target: number, monthlyGrowth: number = 8500) => {
    const remaining = target - current;
    const months = Math.ceil(remaining / monthlyGrowth);
    return months;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Marcos de Crescimento</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Acompanhe sua jornada rumo ao sucesso e desbloqueie recompensas exclusivas
        </p>
      </div>

      {/* Current Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="mr-2 h-6 w-6 text-green-600" />
            Seu Progresso Atual
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{formatCurrency(currentRevenue)}</div>
              <p className="text-sm text-gray-600">Receita Total</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.totalProducts}</div>
              <p className="text-sm text-gray-600">Produtos Criados</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{stats.totalSales}</div>
              <p className="text-sm text-gray-600">Vendas Realizadas</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{stats.conversionRate}%</div>
              <p className="text-sm text-gray-600">Taxa de Conversão</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Milestones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {milestones.map((milestone, index) => {
          const progress = calculateProgress(milestone.current, milestone.target);
          const isCompleted = progress >= 100;
          const timeToGoal = getTimeToGoal(milestone.current, milestone.target);

          return (
            <Card key={milestone.id} className={`relative overflow-hidden ${isCompleted ? 'border-green-500 bg-green-50' : ''}`}>
              <div className={`absolute top-0 right-0 w-32 h-32 ${milestone.color} opacity-10 rounded-full translate-x-16 -translate-y-16`}></div>
              
              <CardHeader className="relative">
                <div className={`w-16 h-16 ${milestone.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                  <milestone.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-center">{milestone.title}</CardTitle>
                <CardDescription className="text-center">
                  Meta: {formatCurrency(milestone.target)}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progresso</span>
                    <span className="font-medium">{progress.toFixed(1)}%</span>
                  </div>
                  <Progress value={progress} className="h-3" />
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>{formatCurrency(milestone.current)}</span>
                    <span>{formatCurrency(milestone.target - milestone.current)} restante</span>
                  </div>
                </div>

                {!isCompleted && (
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      Estimativa: <span className="font-medium">{timeToGoal} meses</span>
                    </p>
                  </div>
                )}

                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Recompensas:</h4>
                  <div className="space-y-1">
                    {milestone.rewards.map((reward, rewardIndex) => (
                      <div key={rewardIndex} className="text-xs text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
                        {reward}
                      </div>
                    ))}
                  </div>
                </div>

                {isCompleted ? (
                  <Badge className="w-full justify-center bg-green-600">
                    <Trophy className="w-4 h-4 mr-1" />
                    Conquistado!
                  </Badge>
                ) : (
                  <Button 
                    variant="outline" 
                    className="w-full"
                    disabled
                  >
                    Em Progresso
                  </Button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Star className="mr-2 h-6 w-6 text-yellow-500" />
            Conquistas Recentes
          </CardTitle>
          <CardDescription>
            Marcos importantes da sua jornada
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className={`flex items-center p-4 rounded-lg border ${achievement.completed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${achievement.completed ? 'bg-green-500' : 'bg-gray-400'}`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
                </div>
                {achievement.completed && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Conquistado
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle>Próximos Passos Recomendados</CardTitle>
          <CardDescription>
            Ações para acelerar seu crescimento
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium mb-2">🚀 Acelere suas Vendas</h4>
              <p className="text-sm text-gray-600 mb-3">
                Crie mais produtos para diversificar sua receita
              </p>
              <Button size="sm" variant="outline">
                Criar Produto
              </Button>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium mb-2">📈 Otimize Conversões</h4>
              <p className="text-sm text-gray-600 mb-3">
                Analise seus dados para melhorar performance
              </p>
              <Button size="sm" variant="outline">
                Ver Analytics
              </Button>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium mb-2">💡 Estratégias IA</h4>
              <p className="text-sm text-gray-600 mb-3">
                Receba insights personalizados da nossa IA
              </p>
              <Button size="sm" variant="outline">
                Consultar IA
              </Button>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium mb-2">🎯 Marketing Inteligente</h4>
              <p className="text-sm text-gray-600 mb-3">
                Campanhas automáticas para alcançar mais clientes
              </p>
              <Button size="sm" variant="outline">
                Configurar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}