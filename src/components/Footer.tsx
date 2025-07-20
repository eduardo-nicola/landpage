import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Bot
} from "lucide-react";

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#000C0B', color: '#FFFFFF' }}>
      {/* Newsletter section */}
      <div className="border-b" style={{ borderColor: '#374151' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Dicas Exclusivas sobre IA e Análise de Vendas
            </h3>
            <p className="text-lg mb-8" style={{ color: '#9CA3AF' }}>
              Estratégias e insights para maximizar seus resultados com Agent Green
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Seu melhor e-mail"
                className="flex-1"
                style={{ backgroundColor: '#374151', borderColor: '#4B5563', color: '#FFFFFF' }}
              />
              <Button className="bg-agent-gradient hover:bg-agent-gradient-hover text-white border-0">
                Receber Dicas
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-agent-gradient">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-semibold">Agent Green</span>
            </div>
            <p className="mb-6 leading-relaxed" style={{ color: '#9CA3AF' }}>
              A inteligência artificial que otimiza seu negócio no Greenn. Análise de vendas, recuperação de carrinhos e insights personalizados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors" style={{ backgroundColor: '#374151' }}>
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors" style={{ backgroundColor: '#374151' }}>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors" style={{ backgroundColor: '#374151' }}>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors" style={{ backgroundColor: '#374151' }}>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors" style={{ backgroundColor: '#374151' }}>
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Funcionalidades */}
          <div>
            <h4 className="font-semibold mb-6">Funcionalidades</h4>
            <ul className="space-y-4" style={{ color: '#9CA3AF' }}>
              <li><a href="#" className="hover:text-white transition-colors">Análise de Vendas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recuperação de Carrinhos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Desk IA</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marcos de Crescimento</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Insights Personalizados</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gestão Financeira</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-6">Recursos</h4>
            <ul className="space-y-4" style={{ color: '#9CA3AF' }}>
              <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guias de Otimização</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cases de Sucesso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Comunidade</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6">Contato</h4>
            <ul className="space-y-4" style={{ color: '#9CA3AF' }}>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3" style={{ color: '#00969C' }} />
                <a href="mailto:suporte@agentgreen.com" className="hover:text-white transition-colors">
                  suporte@agentgreen.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3" style={{ color: '#00969C' }} />
                <a href="tel:+5511999999999" className="hover:text-white transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1" style={{ color: '#00969C' }} />
                <span>
                  São Paulo, SP<br />
                  Brasil
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <Button className="w-full bg-agent-gradient hover:bg-agent-gradient-hover text-white border-0">
                Começar no Agent Green
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: '#374151' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm" style={{ color: '#9CA3AF' }}>
              © 2025 Agent Green. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm mt-4 md:mt-0" style={{ color: '#9CA3AF' }}>
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
              <a href="#" className="hover:text-white transition-colors">Segurança</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}