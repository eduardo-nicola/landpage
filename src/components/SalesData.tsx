import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { 
  BarChart3, 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Calendar,
  Filter,
  Download
} from 'lucide-react';

export function SalesData() {
  const [period, setPeriod] = useState('30');
  const [selectedProduct, setSelectedProduct] = useState('all');

  const salesData = {
    '7': {
      total: 'R$ 12.450',
      change: '+8.2%',
      trend: 'up',
      orders: 23,
      conversion: '3.1%'
    },
    '30': {
      total: 'R$ 45.280',
      change: '+12.5%',
      trend: 'up',
      orders: 89,
      conversion: '3.2%'
    },
    '90': {
      total: 'R$ 127.890',
      change: '+18.7%',
      trend: 'up',
      orders: 267,
      conversion: '3.4%'
    }
  };

  const products = [
    { id: 'all', name: 'Todos os Produtos' },
    { id: '1', name: 'Curso de Excel Avançado' },
    { id: '2', name: 'E-book Marketing Digital' },
    { id: '3', name: 'Template de Planilhas' },
    { id: '4', name: 'Curso de Python' }
  ];

  const currentData = salesData[period as keyof typeof salesData];

  const insights = [
    {
      title: 'Produto Mais Vendido',
      description: 'Curso de Excel Avançado representa 32% das vendas',
      action: 'Criar produtos similares'
    },
    {
      title: 'Melhor Horário',
      description: 'Vendas 40% maiores entre 19h-22h',
      action: 'Programar campanhas neste horário'
    },
    {
      title: 'Geografia',
      description: 'São Paulo e Rio concentram 58% das vendas',
      action: 'Expandir marketing para outras regiões'
    },
    {
      title: 'Dispositivos',
      description: '67% das compras via mobile',
      action: 'Otimizar experiência mobile'
    }
  ];

  const topProducts = [
    { name: 'Curso de Excel Avançado', revenue: 'R$ 14.520', sales: 42, percentage: 32 },
    { name: 'E-book Marketing Digital', revenue: 'R$ 9.280', sales: 28, percentage: 21 },
    { name: 'Template de Planilhas', revenue: 'R$ 7.680', sales: 35, percentage: 17 },
    { name: 'Curso de Python', revenue: 'R$ 6.120', sales: 18, percentage: 14 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dados de Vendas</h1>
          <p className="text-gray-600">Análise detalhada do seu desempenho</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Filter className="mr-2 h-5 w-5" />
            Filtros
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Período</label>
            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Últimos 7 dias</SelectItem>
                <SelectItem value="30">Últimos 30 dias</SelectItem>
                <SelectItem value="90">Últimos 90 dias</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Produto</label>
            <Select value={selectedProduct} onValueChange={setSelectedProduct}>
              <SelectTrigger className="w-60">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {products.map(product => (
                  <SelectItem key={product.id} value={product.id}>
                    {product.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentData.total}</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              {currentData.change} vs período anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pedidos</CardTitle>
            <BarChart3 className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentData.orders}</div>
            <p className="text-xs text-gray-600 mt-1">
              Média: {Math.round(currentData.orders / parseInt(period))} por dia
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentData.conversion}</div>
            <p className="text-xs text-green-600 mt-1">
              +0.3% vs período anterior
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Top Products */}
      <Card>
        <CardHeader>
          <CardTitle>Top Produtos por Receita</CardTitle>
          <CardDescription>
            Produtos que mais geraram receita no período selecionado
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-600">{product.sales} vendas</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{product.revenue}</p>
                  <Badge variant="secondary">{product.percentage}%</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Insights da IA</CardTitle>
          <CardDescription>
            Análises inteligentes baseadas nos seus dados de vendas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {insights.map((insight, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">{insight.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{insight.description}</p>
                <Badge variant="outline" className="text-xs">
                  💡 {insight.action}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}