import { useState } from 'react';
import { AuthProvider, useAuth } from './components/AuthContext';

// Landing Page Components
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { BeforeAfter } from "./components/BeforeAfter";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { FloatingCTA } from "./components/FloatingCTA";

// Dashboard Components
import { Login } from './components/Login';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { SalesData } from './components/SalesData';
import { AbandonedCarts } from './components/AbandonedCarts';
import { HelpDesk } from './components/HelpDesk';
import { Financial } from './components/Financial';
import { Milestones } from './components/Milestones';

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

function DashboardApp() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onPageChange={setCurrentPage} />;
      case 'sales':
        return <SalesData />;
      case 'abandoned-carts':
        return <AbandonedCarts />;
      case 'helpdesk':
        return <HelpDesk />;
      case 'financial':
        return <Financial />;
      case 'milestones':
        return <Milestones />;
      default:
        return <Dashboard onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        <main className="flex-1 md:ml-64">
          <div className="p-6 md:p-8">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  );
}

function AppContent() {
  const { user } = useAuth();
  console.log('use ta logado nãp')
  if (!user) {
    return <LandingPage />;
  }

  return <DashboardApp />;
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}