import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Bot, Loader2 } from 'lucide-react';
import { useAuth } from './AuthContext';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'linear-gradient(135deg, #f0fdfd 0%, #e8f7f7 100%)' }}>
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-agent-gradient">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl" style={{ color: '#000C0B' }}>Agent Green</CardTitle>
          <CardDescription style={{ color: '#6B7280' }}>
            Entre na sua conta para acessar suas análises
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" style={{ color: '#000C0B' }}>E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ borderColor: '#E5E7E7' }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" style={{ color: '#000C0B' }}>Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ borderColor: '#E5E7E7' }}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-agent-gradient hover:bg-agent-gradient-hover text-white border-0"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Entrando...
                </>
              ) : (
                'Entrar'
              )}
            </Button>
          </form>
          
          <div className="mt-6 text-center text-sm" style={{ color: '#6B7280' }}>
            <p>Dados de demonstração:</p>
            <p>E-mail: qualquer@email.com</p>
            <p>Senha: qualquer senha</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}