import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { 
  MessageSquare, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Phone,
  Shield,
  Zap
} from 'lucide-react';

export function Verification() {
  const [phone, setPhone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendCode = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setStep(2);
  };

  const handleVerifyCode = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setStep(3);
  };

  const benefits = [
    {
      icon: Shield,
      title: 'Segurança Extra',
      description: 'Proteja sua conta com verificação em duas etapas'
    },
    {
      icon: Zap,
      title: 'Notificações Instantâneas',
      description: 'Receba alertas de vendas em tempo real'
    },
    {
      icon: MessageSquare,
      title: 'Suporte Prioritário',
      description: 'Atendimento exclusivo via WhatsApp'
    }
  ];

  if (step === 3) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Conta Verificada!</h1>
          <p className="text-gray-600">
            Sua conta foi verificada com sucesso. Agora você tem acesso completo aos recursos premium.
          </p>
        </div>

        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                  <benefit.icon className="w-6 h-6 text-green-600 mr-3" />
                  <div>
                    <p className="font-medium text-green-800">{benefit.title}</p>
                    <p className="text-sm text-green-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Verificação por WhatsApp</h1>
        <p className="text-gray-600">
          Verifique sua conta para acessar recursos premium e notificações
        </p>
      </div>

      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="mr-2 h-6 w-6 text-green-600" />
            {step === 1 ? 'Número do WhatsApp' : 'Código de Verificação'}
          </CardTitle>
          <CardDescription>
            {step === 1 
              ? 'Digite seu número para receber o código' 
              : 'Digite o código enviado para seu WhatsApp'
            }
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {step === 1 ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="phone">Número do WhatsApp</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                onClick={handleSendCode}
                disabled={!phone || isLoading}
              >
                {isLoading ? 'Enviando...' : 'Enviar Código'}
              </Button>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <Label htmlFor="code">Código de Verificação</Label>
                <Input
                  id="code"
                  placeholder="123456"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                />
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                onClick={handleVerifyCode}
                disabled={!verificationCode || isLoading}
              >
                {isLoading ? 'Verificando...' : 'Verificar'}
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}