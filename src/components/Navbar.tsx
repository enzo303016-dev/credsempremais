import { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Shield, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/creditData';
import { createWhatsAppUrl } from '../utils/formatters';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenQuickChat: () => void;
  onNavigateToSimulator: (productId?: string) => void;
}

export function Navbar({ onNavigateToSimulator }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: Array<{ label: string; href: string; onClick?: () => void }> = [
    { label: 'Início', href: '#inicio' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  const handleWhatsAppClick = () => {
    const defaultMsg = `Olá! Gostaria de conversar com um consultor da Cred Sempre + para simular opções de crédito.`;
    const url = createWhatsAppUrl(COMPANY_INFO.whatsappNumber, defaultMsg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro bar for trust & hours with deeper midnight navy and warm gold accents */}
      <div className="bg-[#020612] text-slate-200 text-xs sm:text-[13px] py-2 px-4 border-b border-blue-950/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="font-semibold text-white">Consultores Online Agora</span>
            <span className="hidden sm:inline text-blue-300">•</span>
            <span className="hidden sm:inline text-slate-300">Atendimento humanizado sem espera</span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Shield className="w-4 h-4" />
              <span>Correspondente Bacen nº 3.954</span>
            </div>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
              className="hidden md:flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-bold text-white">{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar - Solid clean white so logo image blends seamlessly without seams */}
      <nav
        className={`transition-all duration-200 ${
          isScrolled
            ? 'bg-white shadow-md py-2 sm:py-2.5 border-b border-slate-300'
            : 'bg-white py-2.5 sm:py-3 shadow-xs border-b border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo from uploaded image reference */}
            <a href="#inicio" className="flex items-center py-1 group">
              <Logo variant="header" />
            </a>

            {/* Desktop Navigation Links (Reference: menu: 16–17px) */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-7">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                  }}
                  className="text-[16px] font-bold text-[#020612] hover:text-[#0c2f7c] transition-colors duration-150 py-1 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Buttons (Reference: botões: 16–17px) */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => onNavigateToSimulator()}
                className="text-[16px] font-bold px-4 py-2.5 rounded-xl text-[#020612] bg-slate-100 hover:bg-slate-200 border border-slate-300 hover:border-amber-500 transition-all cursor-pointer min-h-[44px] flex items-center justify-center"
              >
                Simular Rápido
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-[16px] px-5 py-2.5 rounded-xl shadow-md shadow-emerald-950/20 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 border-b-2 border-[#1ca34d] cursor-pointer min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Oficial</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={handleWhatsAppClick}
                aria-label="Abrir WhatsApp"
                className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center bg-[#25D366] text-white rounded-xl shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-[#020612] hover:bg-slate-100 focus:outline-none cursor-pointer"
                aria-label="Menu Principal"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown (Reference: menu: 16–17px, botões: 16–17px) */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                  }}
                  className="text-[17px] font-bold text-[#020612] hover:text-[#0c2f7c] py-2.5 px-1 border-b border-slate-100 flex items-center"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateToSimulator();
                  }}
                  className="w-full text-center py-3.5 rounded-xl font-bold text-[16px] text-[#020612] bg-slate-100 border border-slate-300 min-h-[48px] flex items-center justify-center cursor-pointer"
                >
                  Fazer Simulação Online
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleWhatsAppClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-[16px] text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-md shadow-emerald-950/20 border-b-2 border-[#1ca34d] min-h-[48px] cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Falar pelo WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
