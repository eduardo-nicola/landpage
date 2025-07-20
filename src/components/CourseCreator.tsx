import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { 
  BookOpen, 
  Video, 
  FileText, 
  Users,
  Clock,
  DollarSign,
  Zap
} from 'lucide-react';

export function CourseCreator() {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    duration: ''
  });

  const [isConnected, setIsConnected] = useState(false);

  const blueeFeatures = [
    'Plataforma de ensino completa',
    'Certificados automáticos',
    'Área de membros exclusiva',
    'Quizzes e avaliações',
    'Fórum de discussão',
    'Acompanhamento de progresso'
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Criar Curso Online</h1>
        <p className="text-gray-600">
          Integração com Bluee para criar cursos profissionais completos
        </p>
      </div>

      {/* Bluee Integration Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookOpen className="mr-2 h-6 w-6 text-blue-600" />
            Integração com Bluee
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-medium">Status da Conexão</p>
              <p className="text-sm text-gray-600">
                {isConnected ? 'Conectado com sucesso' : 'Não conectado'}
              </p>
            </div>
            <Badge variant={isConnected ? "default" : "secondary"}>
              {isConnected ? 'Conectado' : 'Desconectado'}
            </Badge>
          </div>
          
          {!isConnected && (
            <Button 
              onClick={() => setIsConnected(true)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Conectar com Bluee
            </Button>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Course Form */}
        <Card>
          <CardHeader>
            <CardTitle>Informações do Curso</CardTitle>
            <CardDescription>
              Agent Green criará automaticamente o conteúdo otimizado
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Título do Curso</Label>
              <Input
                id="title"
                placeholder="Ex: Dominando o Excel do Básico ao Avançado"
                value={courseData.title}
                onChange={(e) => setCourseData({...courseData, title: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                placeholder="Descreva o que seu curso ensina, para quem é direcionado..."
                value={courseData.description}
                onChange={(e) => setCourseData({...courseData, description: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Preço (R$)</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="497"
                  value={courseData.price}
                  onChange={(e) => setCourseData({...courseData, price: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duração (horas)</Label>
                <Input
                  id="duration"
                  type="number"
                  placeholder="20"
                  value={courseData.duration}
                  onChange={(e) => setCourseData({...courseData, duration: e.target.value})}
                />
              </div>
            </div>

            <Button 
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
              disabled={!isConnected}
            >
              <Zap className="mr-2 h-4 w-4" />
              Criar Curso com IA
            </Button>
          </CardContent>
        </Card>

        {/* Bluee Features */}
        <Card>
          <CardHeader>
            <CardTitle>Recursos da Bluee</CardTitle>
            <CardDescription>
              Tudo que você ganha ao criar seu curso na plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {blueeFeatures.map((feature, index) => (
                <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-blue-800">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white">
              <h4 className="font-medium mb-2">💡 Agent Green + Bluee</h4>
              <p className="text-sm text-blue-100">
                Criação automática de estrutura de curso, módulos, aulas e certificados
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}