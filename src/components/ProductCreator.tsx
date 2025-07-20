import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Bot, 
  Sparkles, 
  FileText, 
  Image, 
  CreditCard,
  Link,
  Loader2,
  CheckCircle,
  Wand2
} from 'lucide-react';

export function ProductCreator() {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    type: ''
  });

  const categories = [
    'Cursos Online',
    'E-books',
    'Templates',
    'Software/Apps',
    'Consultoria',
    'Mentorias',
    'Planilhas',
    'Presets/Filtros'
  ];

  const productTypes = [
    'Produto Digital',
    'Curso Online',
    'Ebook/PDF',
    'Template',
    'Software',
    'Consultoria'
  ];

  const generatedFeatures = [
    '📝 Descrição otimizada para SEO',
    '🎨 Design profissional automático',
    '💳 Checkout integrado',
    '📧 E-mails de confirmação',
    '🔗 Link de vendas personalizado',
    '📊 Analytics integrado'
  ];

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simular processamento da IA
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsGenerating(false);
    setStep(3);
  };

  if (step === 1) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Criar Produto com Agent Green</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nossa IA criará tudo automaticamente: descrição, página de vendas, checkout e muito mais. 
            Você só precisa nos contar sobre seu produto.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bot className="mr-2 h-6 w-6 text-blue-600" />
              Conte-nos sobre seu produto
            </CardTitle>
            <CardDescription>
              Quanto mais detalhes você fornecer, melhor será o resultado da IA
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nome do Produto</Label>
              <Input
                id="name"
                placeholder="Ex: Curso Completo de Excel Avançado"
                value={productData.name}
                onChange={(e) => setProductData({...productData, name: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Tipo de Produto</Label>
              <Select value={productData.type} onValueChange={(value) => setProductData({...productData, type: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  {productTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Categoria</Label>
              <Select value={productData.category} onValueChange={(value) => setProductData({...productData, category: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a categoria" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Preço (R$)</Label>
              <Input
                id="price"
                type="number"
                placeholder="197"
                value={productData.price}
                onChange={(e) => setProductData({...productData, price: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descrição do Produto</Label>
              <Textarea
                id="description"
                placeholder="Descreva seu produto: o que ensina, para quem é, quais problemas resolve, que resultados oferece..."
                className="min-h-32"
                value={productData.description}
                onChange={(e) => setProductData({...productData, description: e.target.value})}
              />
              <p className="text-xs text-gray-600">
                💡 Dica: Mencione o público-alvo, benefícios principais e diferenciais
              </p>
            </div>

            <Button 
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
              onClick={() => setStep(2)}
              disabled={!productData.name || !productData.description || !productData.category}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Continuar com Agent Green
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Agent Green está trabalhando</h1>
          <p className="text-gray-600">
            Nossa IA está criando tudo para você. Isso leva apenas alguns minutos...
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bot className="mr-2 h-6 w-6 text-blue-600 animate-pulse" />
              Processando com IA
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Loader2 className="w-10 h-10 text-white animate-spin" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Criando seu produto...</h3>
              <Progress value={isGenerating ? 100 : 30} className="mb-4" />
            </div>

            <div className="space-y-3">
              {generatedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {!isGenerating && (
              <Button 
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                onClick={handleGenerate}
              >
                <Wand2 className="mr-2 h-4 w-4" />
                Gerar Produto com IA
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">🎉 Produto Criado com Sucesso!</h1>
        <p className="text-gray-600">
          Seu produto está pronto para vender. Confira tudo que a IA criou para você:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Preview */}
        <Card>
          <CardHeader>
            <CardTitle>Preview do Produto</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Image className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Imagem gerada pela IA</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg">{productData.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{productData.category}</p>
              <p className="text-2xl font-bold text-green-600">R$ {productData.price}</p>
            </div>
            <div className="space-y-2">
              <Badge variant="secondary">📊 SEO Otimizado</Badge>
              <Badge variant="secondary">🎨 Design Profissional</Badge>
              <Badge variant="secondary">📱 Mobile Ready</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Generated Content */}
        <Card>
          <CardHeader>
            <CardTitle>Conteúdo Gerado</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium mb-2">📝 Copy de Vendas</h4>
              <p className="text-sm text-gray-600">
                Texto persuasivo criado com técnicas de copywriting avançadas...
              </p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium mb-2">💳 Página de Checkout</h4>
              <p className="text-sm text-gray-600">
                Sistema de pagamento integrado com PIX, cartão e boleto...
              </p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium mb-2">📧 E-mails Automáticos</h4>
              <p className="text-sm text-gray-600">
                Sequência de e-mails de confirmação e entrega...
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Próximos Passos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
              <Link className="mr-2 h-4 w-4" />
              Copiar Link de Vendas
            </Button>
            
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Editar Conteúdo
            </Button>
            
            <Button variant="outline">
              <CreditCard className="mr-2 h-4 w-4" />
              Configurar Pagamento
            </Button>
          </div>
          
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="font-medium text-green-800 mb-2">🔗 Link do seu produto:</h4>
            <code className="text-sm bg-white p-2 rounded border block">
              https://agentgreen.com/p/{productData.name?.toLowerCase().replace(/\s+/g, '-')}
            </code>
            <p className="text-sm text-green-700 mt-2">
              Compartilhe este link para começar a vender imediatamente!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}