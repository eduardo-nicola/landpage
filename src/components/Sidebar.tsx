import { useState } from 'react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  BarChart3, 
  Bot, 
  DollarSign, 
  Home, 
  ShoppingCart,
  Trophy,
  HelpCircle,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useAuth } from './AuthContext';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'sales', label: 'Dados de Vendas', icon: BarChart3 },
    { id: 'abandoned-carts', label: 'Carrinhos Abandonados', icon: ShoppingCart },
    { id: 'helpdesk', label: 'Help Desk IA', icon: HelpCircle },
    { id: 'financial', label: 'Financeiro', icon: DollarSign },
    { id: 'milestones', label: 'Marcos', icon: Trophy },
  ];

  const MenuItem = ({ item }: { item: typeof menuItems[0] }) => (
    <button
      onClick={() => {
        onPageChange(item.id);
        setIsOpen(false);
      }}
      className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
        currentPage === item.id
          ? 'text-white bg-agent-gradient'
          : 'hover:bg-agent-gray'
      }`}
      style={{
        color: currentPage === item.id ? '#FFFFFF' : '#000C0B'
      }}
    >
      <item.icon className="mr-3 h-5 w-5" />
      {item.label}
    </button>
  );

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        style={{ borderColor: '#E5E7E7' }}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `} style={{ borderRight: `1px solid #E5E7E7` }}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b" style={{ borderColor: '#E5E7E7' }}>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-agent-gradient">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-semibold" style={{ color: '#000C0B' }}>Agent Green</span>
            </div>
          </div>

          {/* User info */}
          <div className="p-4 border-b" style={{ borderColor: '#E5E7E7' }}>
            <div className="flex items-center">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user?.avatar} alt={user?.name} />
                <AvatarFallback style={{ backgroundColor: '#E5E7E7', color: '#000C0B' }}>
                  {user?.name?.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="text-sm font-medium" style={{ color: '#000C0B' }}>{user?.name}</p>
                <p className="text-xs" style={{ color: '#6B7280' }}>{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t" style={{ borderColor: '#E5E7E7' }}>
            <Button
              variant="outline"
              className="w-full"
              onClick={logout}
              style={{ borderColor: '#E5E7E7', color: '#000C0B' }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}