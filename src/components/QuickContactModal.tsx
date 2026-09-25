import { useState } from 'react';
import { X, MessageCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../data/creditData';
import { formatPhone, createWhatsAppUrl } from '../utils/formatters';

interface QuickContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuickContactModal({ isOpen, onClose }: QuickContactModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [product, setProduct] = useState(PRODUCTS[0].name);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `👋 *Olá, Cred Sempre +! Gostaria de atendimento no WhatsApp:*`,
      name.trim() ? `👤 *Nome:* ${name.trim()}` : '',
      phone.trim() ? `📱 *Telefone:* ${phone.trim()}` : '',
      `💼 *Interesse em:* ${product}`,
      ``,
      `Poderiam me apresentar as condições disponíveis?`
    ]
      .filter(Boolean)
      .join('\n');

    const url = createWhatsAppUrl(COMPANY_INFO.whatsappNumber, text);
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-300 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-full bg-emerald-50 text-[#25D366] flex items-center justify-center mx-auto mb-3.5 border border-emerald-200">
            <MessageCircle className="w-7 h-7 fill-[#25D366]" />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#020612]">
            Falar com Atendente
          </h3>
          <p className="text-[14px] sm:text-[15px] text-slate-700 mt-1.5 font-medium leading-relaxed">
            Inicie uma conversa imediata no WhatsApp oficial da Cred Sempre +.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs sm:text-[13px] font-bold text-[#020612] uppercase tracking-wider mb-1.5">
              Seu Nome (Opcional)
            </label>
            <input
              type="text"
              placeholder="Como podemos te chamar?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-[16px] focus:outline-none focus:border-[#0c2f7c] focus:ring-1 focus:ring-blue-100 text-slate-900"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-[13px] font-bold text-[#020612] uppercase tracking-wider mb-1.5">
              Seu WhatsApp (Opcional)
            </label>
            <input
              type="tel"
              placeholder="(XX) 9XXXX-XXXX"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              maxLength={15}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-[16px] focus:outline-none focus:border-[#0c2f7c] focus:ring-1 focus:ring-blue-100 text-slate-900"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-[13px] font-bold text-[#020612] uppercase tracking-wider mb-1.5">
              Produto de Maior Interesse
            </label>
            <select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-[16px] focus:outline-none focus:border-[#0c2f7c] bg-white text-slate-900"
            >
              {PRODUCTS.map((p) => (
                <option key={p.id} value={p.name}>
                  {p.name}
                </option>
              ))}
              <option value="Quero orientação sobre qual o melhor para mim">
                Ainda não sei (Quero orientação)
              </option>
            </select>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-5 rounded-xl font-bold text-[16px] text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-md shadow-emerald-950/20 transition-all cursor-pointer border-b-2 border-[#1ca34d] min-h-[50px]"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>INICIAR CONVERSA NO WHATSAPP</span>
              <ArrowRight className="w-5 h-5 text-[#020612]" />
            </button>
          </div>

          <div className="text-center pt-1">
            <p className="text-xs sm:text-[13px] text-slate-600 flex items-center justify-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#0c2f7c]" />
              <span>Sem cobrança antecipada • Canal Oficial</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
