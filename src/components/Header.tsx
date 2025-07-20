import { Button } from "./ui/button";
import { Menu, X, Bot } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b" style={{ borderColor: '#E5E7E7' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-agent-gradient">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="ml-2 text-xl font-semibold" style={{ color: '#000C0B' }}>Agent Green</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="hover:text-opacity-80 transition-colors" style={{ color: '#6B7280' }}>
              Como Funciona
            </a>
            <a href="#benefits" className="hover:text-opacity-80 transition-colors" style={{ color: '#6B7280' }}>
              Análise de Vendas
            </a>
            <a href="#testimonials" className="hover:text-opacity-80 transition-colors" style={{ color: '#6B7280' }}>
              Cases de Sucesso
            </a>
            <a href="#faq" className="hover:text-opacity-80 transition-colors" style={{ color: '#6B7280' }}>
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" style={{ color: '#6B7280', borderColor: '#E5E7E7' }}>
              Login
            </Button>
            <Button className="bg-agent-gradient hover:bg-agent-gradient-hover text-white border-0">
              Acessar Análise
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: '#000C0B' }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t" style={{ borderColor: '#E5E7E7' }}>
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="hover:text-opacity-80 transition-colors" style={{ color: '#6B7280' }}>
                Como Funciona
              </a>
              <a href="#benefits" className="hover:text-opacity-80 transition-colors" style={{ color: '#6B7280' }}>
                Análise de Vendas
              </a>
              <a href="#testimonials" className="hover:text-opacity-80 transition-colors" style={{ color: '#6B7280' }}>
                Cases de Sucesso
              </a>
              <a href="#faq" className="hover:text-opacity-80 transition-colors" style={{ color: '#6B7280' }}>
                FAQ
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" style={{ color: '#6B7280', borderColor: '#E5E7E7' }}>
                  Login
                </Button>
                <Button className="bg-agent-gradient hover:bg-agent-gradient-hover text-white border-0">
                  Acessar Análise
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}