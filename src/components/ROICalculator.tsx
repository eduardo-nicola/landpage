import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Slider } from './ui/slider';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Target,
  Clock,
  BarChart3
} from 'lucide-react';

export function ROICalculator() {
  const [investment, setInvestment] = useState(500);
  const [monthlyRevenue, setMonthlyRevenue] = useState(3000);
  const [months, setMonths] = useState([12]);
  const [conversionRate, setConversionRate] = useState([3.2]);
  const [avgTicket, setAvgTicket] = useState(197);
  const [results, setResults] = useState({
    totalRevenue: 0,
    netProfit: 0,
    roi: 0,
    paybackTime: 0
  });

  useEffect(() => {
    calculateROI();
  }, [investment, monthlyRevenue, months, conversionRate, avgTicket]);

  const calculateROI = () => {
    const monthsValue = months[0];
    const conversionValue = conversionRate[0];
    
    // Cálculos baseados nas métricas
    const totalRevenue = monthlyRevenue * monthsValue;
    const agentGreenCost = 97 * monthsValue; // Custo mensal do Agent Green
    const totalCosts = investment + agentGreenCost;
    const netProfit = totalRevenue - totalCosts;
    const roi = ((netProfit / investment) * 100);
    const paybackTime = investment / monthlyRevenue;

    setResults({
      totalRevenue,
      netProfit,
      roi,
      paybackTime
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const scenarios = [
    {
      title: 'Conservador',
      revenue: 2000,
      conversion: 2.5,
      ticket: 150,
      color: 'bg-blue-500'
    },
    {
      title: 'Realista',
      revenue: 3000,
      conversion: 3.2,
      ticket: 197,
      color: 'bg-green-500'
    },
    {
      title: 'Otimista',
      revenue: 5000,
      conversion: 4.0,
      ticket: 250,
      color: 'bg-purple-500'
    }
  ];

  const applyScenario = (scenario: typeof scenarios[0]) => {
    setMonthlyRevenue(scenario.revenue);
    setConversionRate([scenario.conversion]);
    setAvgTicket(scenario.ticket);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Calculadora de ROI</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Descubra o retorno do seu investimento em Agent Green e planeje seu crescimento
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Parameters */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="mr-2 h-5 w-5" />
                Parâmetros de Cálculo
              </CardTitle>
              <CardDescription>
                Ajuste os valores conforme sua realidade
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="investment">Investimento Inicial (R$)</Label>
                  <Input
                    id="investment"
                    type="number"
                    value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    placeholder="500"
                  />
                  <p className="text-xs text-gray-600">
                    Valor investido em marketing, criação, etc.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="revenue">Receita Mensal Esperada (R$)</Label>
                  <Input
                    id="revenue"
                    type="number"
                    value={monthlyRevenue}
                    onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                    placeholder="3000"
                  />
                  <p className="text-xs text-gray-600">
                    Meta de faturamento mensal
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Período de Análise: {months[0]} meses</Label>
                  <Slider
                    value={months}
                    onValueChange={setMonths}
                    max={24}
                    min={3}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>3 meses</span>
                    <span>24 meses</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Taxa de Conversão: {conversionRate[0]}%</Label>
                  <Slider
                    value={conversionRate}
                    onValueChange={setConversionRate}
                    max={8}
                    min={1}
                    step={0.1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>1%</span>
                    <span>8%</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ticket">Ticket Médio (R$)</Label>
                  <Input
                    id="ticket"
                    type="number"
                    value={avgTicket}
                    onChange={(e) => setAvgTicket(Number(e.target.value))}
                    placeholder="197"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Scenarios */}
          <Card>
            <CardHeader>
              <CardTitle>Cenários Pré-definidos</CardTitle>
              <CardDescription>
                Clique para aplicar um cenário rapidamente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {scenarios.map((scenario, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => applyScenario(scenario)}
                  >
                    <div className={`w-full h-2 ${scenario.color} rounded mb-3`}></div>
                    <h4 className="font-medium mb-2">{scenario.title}</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Receita: {formatCurrency(scenario.revenue)}/mês</p>
                      <p>Conversão: {scenario.conversion}%</p>
                      <p>Ticket: {formatCurrency(scenario.ticket)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-green-600" />
                Resultados
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {results.roi > 0 ? '+' : ''}{results.roi.toFixed(1)}%
                </div>
                <p className="text-gray-600">ROI em {months[0]} meses</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-sm text-gray-600">Receita Total</span>
                  </div>
                  <span className="font-medium">{formatCurrency(results.totalRevenue)}</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-600">Lucro Líquido</span>
                  </div>
                  <span className="font-medium">{formatCurrency(results.netProfit)}</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-sm text-gray-600">Payback</span>
                  </div>
                  <span className="font-medium">{results.paybackTime.toFixed(1)} meses</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Agent Green Value */}
          <Card>
            <CardHeader>
              <CardTitle>Valor do Agent Green</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">R$ 97/mês</p>
                <p className="text-sm text-gray-600">Investimento em Agent Green</p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>🚀 Produtos criados:</span>
                  <span className="font-medium">Ilimitados</span>
                </div>
                <div className="flex justify-between">
                  <span>⚡ Tempo economizado:</span>
                  <span className="font-medium">95% menos</span>
                </div>
                <div className="flex justify-between">
                  <span>🎯 Taxa de conversão:</span>
                  <span className="font-medium">+40% maior</span>
                </div>
                <div className="flex justify-between">
                  <span>🤖 Suporte IA:</span>
                  <span className="font-medium">24/7</span>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
                Começar Agora
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Comparison Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart3 className="mr-2 h-5 w-5" />
            Comparativo: Com vs Sem Agent Green
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-red-800">Sem Agent Green</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Tempo para criar produto:</span>
                  <span className="text-red-600">3-5 dias</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Custo de criação:</span>
                  <span className="text-red-600">R$ 2.000+</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Taxa de conversão:</span>
                  <span className="text-red-600">2.1%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Produtos por mês:</span>
                  <span className="text-red-600">2-3</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-green-800">Com Agent Green</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Tempo para criar produto:</span>
                  <span className="text-green-600">5 minutos</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Custo de criação:</span>
                  <span className="text-green-600">R$ 97/mês</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Taxa de conversão:</span>
                  <span className="text-green-600">3.2%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Produtos por mês:</span>
                  <span className="text-green-600">Ilimitados</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}