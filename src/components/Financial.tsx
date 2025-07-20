import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight, 
  Clock, 
  CheckCircle,
  AlertCircle,
  CreditCard,
  Calendar,
  TrendingUp
} from 'lucide-react';

export function Financial() {
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [showWithdrawForm, setShowWithdrawForm] = useState(false);

  const balanceData = {
    available: 23450.50,
    blocked: 3240.80,
    total: 26691.30,
    lastUpdate: '2025-01-19 14:30'
  };

  const transactions = [
    { id: '1', type: 'sale', description: 'Curso de Excel Avançado', amount: 297.00, date: '2025-01-19', status: 'confirmed' },
    { id: '2', type: 'withdrawal', description: 'Saque para conta Nubank', amount: -1500.00, date: '2025-01-18', status: 'processing' },
    { id: '3', type: 'sale', description: 'E-book Marketing Digital', amount: 47.00, date: '2025-01-18', status: 'confirmed' },
    { id: '4', type: 'sale', description: 'Template Planilhas', amount: 67.00, date: '2025-01-17', status: 'confirmed' },
    { id: '5', type: 'withdrawal', description: 'Saque para conta principal', amount: -2000.00, date: '2025-01-15', status: 'completed' },
    { id: '6', type: 'sale', description: 'Curso de Python', amount: 397.00, date: '2025-01-15', status: 'confirmed' }
  ];

  const monthlyStats = [
    { month: 'Jan 2025', revenue: 12450.80, withdrawals: 8000.00, net: 4450.80 },
    { month: 'Dez 2024', revenue: 18720.50, withdrawals: 15000.00, net: 3720.50 },
    { month: 'Nov 2024', revenue: 15680.20, withdrawals: 12000.00, net: 3680.20 },
    { month: 'Out 2024', revenue: 21340.75, withdrawals: 18000.00, net: 3340.75 }
  ];

  const handleWithdraw = () => {
    if (parseFloat(withdrawAmount) > balanceData.available) {
      alert('Valor superior ao saldo disponível');
      return;
    }
    // Simular saque
    setShowWithdrawForm(false);
    setWithdrawAmount('');
    alert('Solicitação de saque enviada com sucesso!');
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'processing':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-red-500" />;
    }
  };

  const getStatusText = (status: string) => {
    const statusMap = {
      'confirmed': 'Confirmado',
      'processing': 'Processando',
      'completed': 'Concluído'
    };
    return statusMap[status as keyof typeof statusMap] || status;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Financeiro</h1>
          <p className="text-gray-600">Gerencie seu saldo e histórico de transações</p>
        </div>
        <Button 
          className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
          onClick={() => setShowWithdrawForm(true)}
          disabled={balanceData.available < 50}
        >
          <ArrowDownRight className="mr-2 h-4 w-4" />
          Solicitar Saque
        </Button>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saldo Disponível</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {formatCurrency(balanceData.available)}
            </div>
            <p className="text-xs text-gray-600 mt-1">
              Disponível para saque
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saldo Bloqueado</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {formatCurrency(balanceData.blocked)}
            </div>
            <p className="text-xs text-gray-600 mt-1">
              Liberação em 2-5 dias
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saldo Total</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {formatCurrency(balanceData.total)}
            </div>
            <p className="text-xs text-gray-600 mt-1">
              Atualizado em {balanceData.lastUpdate}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Withdraw Form */}
      {showWithdrawForm && (
        <Card>
          <CardHeader>
            <CardTitle>Solicitar Saque</CardTitle>
            <CardDescription>
              O valor será transferido para sua última conta cadastrada
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center">
                <CreditCard className="w-5 h-5 text-blue-600 mr-2" />
                <div>
                  <p className="font-medium text-blue-900">Nubank - Conta Corrente</p>
                  <p className="text-sm text-blue-700">****.***.***-12</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Valor do Saque</Label>
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                max={balanceData.available}
              />
              <p className="text-sm text-gray-600">
                Valor mínimo: R$ 50,00 | Disponível: {formatCurrency(balanceData.available)}
              </p>
            </div>

            <div className="flex gap-4">
              <Button 
                onClick={handleWithdraw}
                disabled={!withdrawAmount || parseFloat(withdrawAmount) < 50}
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
              >
                Confirmar Saque
              </Button>
              <Button variant="outline" onClick={() => setShowWithdrawForm(false)}>
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Monthly Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Resumo Mensal</CardTitle>
          <CardDescription>
            Receita e saques dos últimos meses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {monthlyStats.map((stat, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">Mês</p>
                  <p className="font-medium">{stat.month}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Receita</p>
                  <p className="font-medium text-green-600">{formatCurrency(stat.revenue)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Saques</p>
                  <p className="font-medium text-red-600">{formatCurrency(stat.withdrawals)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Líquido</p>
                  <p className="font-medium text-blue-600">{formatCurrency(stat.net)}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Transaction History */}
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Transações</CardTitle>
          <CardDescription>
            Suas últimas movimentações financeiras
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    {transaction.type === 'sale' ? (
                      <ArrowUpRight className="w-5 h-5 text-green-600" />
                    ) : (
                      <ArrowDownRight className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{transaction.description}</p>
                    <p className="text-sm text-gray-600">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {formatCurrency(transaction.amount)}
                  </p>
                  <div className="flex items-center text-sm">
                    {getStatusIcon(transaction.status)}
                    <span className="ml-1 text-gray-600">{getStatusText(transaction.status)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}