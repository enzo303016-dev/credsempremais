import { useState, useEffect } from 'react';
import {
  Calculator,
  MessageCircle,
  ShieldCheck,
  CheckCircle,
  Copy,
  ExternalLink,
  Info,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PRODUCTS, COMPANY_INFO } from '../data/creditData';
import { formatCurrency, formatPhone, createWhatsAppUrl } from '../utils/formatters';

interface SimulatorSectionProps {
  selectedProductId: string;
  onProductChange: (id: string) => void;
}

export function SimulatorSection({ selectedProductId, onProductChange }: SimulatorSectionProps) {
  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState<number>(3500);
  const [observations, setObservations] = useState('');
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [copied, setCopied] = useState(false);

  // Current selected product object
  const currentProduct = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  // Adjust default amount when product changes if current is out of range
  useEffect(() => {
    if (amount < currentProduct.minAmount || amount > currentProduct.maxAmount) {
      setAmount(currentProduct.defaultAmount);
    }
  }, [selectedProductId, currentProduct]);

  // Quick observation chips
  const quickObservationChips = [
    'Possuo restrição no nome',
    'Aposentado/Pensionista',
    'Tenho saldo no FGTS',
    'Conta de luz em meu nome',
    'Preciso com urgência no PIX',
    'Gostaria de refinanciar'
  ];

  const toggleChip = (chip: string) => {
    let updated: string[];
    if (selectedChips.includes(chip)) {
      updated = selectedChips.filter((c) => c !== chip);
    } else {
      updated = [...selectedChips, chip];
    }
    setSelectedChips(updated);

    // Also update observations text
    const currentBase = observations.trim();
    if (!selectedChips.includes(chip)) {
      const newObs = currentBase ? `${currentBase}, ${chip}` : chip;
      setObservations(newObs);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: '' }));
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (errors.name) {
      setErrors((prev) => ({ ...prev, name: '' }));
    }
  };

  // Quick amount suggestions
  const quickAmounts = [1000, 2500, 5000, 10000, 20000].filter(
    (val) => val >= currentProduct.minAmount && val <= currentProduct.maxAmount
  );

  // Calculate illustrative installment estimation
  const getEstimatedInstallments = () => {
    if (currentProduct.id === 'fgts') {
      return {
        label: 'Desconto Anual no FGTS',
        detail: 'Antecipação conforme regras vigentes do FGTS. Limite de saques sujeito às normas atuais, sem boletos mensais'
      };
    }
    if (currentProduct.id === 'consignado') {
      const est48 = Math.round((amount * 1.45) / 48);
      return {
        label: 'Desconto em Folha para CLT',
        detail: `Estimativa ilustrativa em até 48x de aprox. ${formatCurrency(est48)} (sujeito à análise de crédito e convênio da empresa)`
      };
    }
    if (currentProduct.id === 'energia') {
      const est18 = Math.round((amount * 1.48) / 18);
      return {
        label: 'Parcelado na Fatura de Luz',
        detail: `Em até 18x a 24x de aprox. ${formatCurrency(est18)} debitado mensalmente`
      };
    }
    if (currentProduct.id === 'inss') {
      const est72 = Math.round((amount * 1.5) / 72);
      return {
        label: 'Parcelas com Desconto no Benefício',
        detail: `Em até 72x a 84x de aprox. ${formatCurrency(est72)} (taxas reguladas pelo INSS)`
      };
    }
    const est24 = Math.round((amount * 1.35) / 24);
    return {
      label: 'Plano Acessível',
      detail: `Parcelas planejadas de aprox. ${formatCurrency(est24)} em até 24x`
    };
  };

  const handleSubmitSimulation = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) {
      newErrors.name = 'Por favor, informe seu nome completo.';
    }
    const rawDigits = phone.replace(/\D/g, '');
    if (!phone.trim() || rawDigits.length < 10) {
      newErrors.phone = 'Por favor, informe um WhatsApp válido com DDD.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Build the formatted message
    const formattedAmount = formatCurrency(amount);
    const obsText = observations.trim() ? observations.trim() : 'Nenhuma observação informada.';

    const message = [
      `👋 *Olá, Cred Sempre +! Acabei de fazer uma simulação no site:*`,
      ``,
      `👤 *Nome:* ${name.trim()}`,
      `📱 *WhatsApp:* ${phone.trim()}`,
      `💼 *Produto:* ${currentProduct.name}`,
      `💰 *Valor desejado:* ${formattedAmount}`,
      `📝 *Observações/Perfil:* ${obsText}`,
      ``,
      `Gostaria de consultar as opções de liberação e prazos disponíveis para mim. Obrigado!`
    ].join('\n');

    setGeneratedMessage(message);
    setSuccessModalOpen(true);

    // Open WhatsApp with official number
    const waUrl = createWhatsAppUrl(COMPANY_INFO.whatsappNumber, message);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="simulacao" className="py-20 bg-slate-200/50 relative scroll-mt-16 border-t border-slate-300">
      {/* Decorative gradient accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-300 text-[#020612] text-xs sm:text-[13px] font-bold uppercase tracking-wider mb-3.5 shadow-xs">
            <Calculator className="w-4 h-4 text-[#0c2f7c]" />
            <span>Simulador Rápido & Sem Compromisso</span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-black text-[#020612] tracking-tight leading-tight">
            Faça sua Simulação de Crédito
          </h2>
          <p className="mt-3.5 text-[17px] sm:text-[18px] text-slate-800 font-semibold leading-relaxed">
            Preencha seus dados para receber o contato de um consultor Cred Sempre + direto no seu WhatsApp com as opções disponíveis.
          </p>
        </div>

        {/* Product selector tabs */}
        <div className="mb-10 max-w-4xl mx-auto">
          <label className="block text-xs sm:text-[13px] font-bold text-slate-700 uppercase tracking-wider text-center mb-3">
            1. Selecione a Linha de Crédito Desejada
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 p-1.5 bg-slate-200 rounded-2xl border border-slate-300">
            {PRODUCTS.map((prod) => {
              const isSelected = prod.id === selectedProductId;
              return (
                <button
                  key={prod.id}
                  type="button"
                  onClick={() => onProductChange(prod.id)}
                  className={`py-3 px-2 rounded-xl text-[13px] sm:text-[14px] font-bold transition-all duration-200 text-center flex flex-col items-center justify-center gap-1 cursor-pointer min-h-[46px] ${
                    isSelected
                      ? 'bg-white text-[#020612] shadow-md border-2 border-[#0c2f7c]'
                      : 'text-slate-800 hover:text-[#020612] hover:bg-white/80'
                  }`}
                >
                  <span className="truncate w-full">{prod.shortName}</span>
                  {isSelected && (
                    <span className="inline-block w-2 h-2 rounded-full bg-amber-500" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Simulation Form & Live Preview Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Form Column - White Background */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-300 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-black text-[#020612] mb-6 flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#0c2f7c] text-white text-xs font-black shrink-0">
                2
              </span>
              <span>Informe os dados para simulação</span>
            </h3>

            <form onSubmit={handleSubmitSimulation} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-xs sm:text-[13px] font-bold text-[#020612] uppercase tracking-wider mb-2">
                  Nome Completo *
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Ex: Maria Aparecida da Silva"
                  value={name}
                  onChange={handleNameChange}
                  className={`w-full px-4 py-3.5 rounded-xl border text-[16px] focus:outline-none focus:ring-2 transition-all font-medium ${
                    errors.name
                      ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                      : 'border-slate-300 focus:border-[#0c2f7c] focus:ring-blue-100 text-slate-900'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs sm:text-sm text-rose-600 font-medium">{errors.name}</p>
                )}
              </div>

              {/* WhatsApp Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs sm:text-[13px] font-bold text-[#020612] uppercase tracking-wider mb-2">
                  Número de WhatsApp *
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="(11) 98765-4321"
                  value={phone}
                  onChange={handlePhoneChange}
                  maxLength={15}
                  className={`w-full px-4 py-3.5 rounded-xl border text-[16px] focus:outline-none focus:ring-2 transition-all font-medium ${
                    errors.phone
                      ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                      : 'border-slate-300 focus:border-[#0c2f7c] focus:ring-blue-100 text-slate-900'
                  }`}
                />
                {errors.phone ? (
                  <p className="mt-1 text-xs sm:text-sm text-rose-600 font-medium">{errors.phone}</p>
                ) : (
                  <p className="mt-1.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                    Seu contato receberá apenas o atendimento da simulação solicitada.
                  </p>
                )}
              </div>

              {/* Desired Amount */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="amount" className="text-xs sm:text-[13px] font-bold text-[#020612] uppercase tracking-wider">
                    Valor Desejado
                  </label>
                  <span className="text-2xl sm:text-3xl font-black text-[#0c2f7c]">
                    {formatCurrency(amount)}
                  </span>
                </div>

                {/* Range Slider in Blue */}
                <input
                  id="amount"
                  type="range"
                  min={currentProduct.minAmount}
                  max={currentProduct.maxAmount}
                  step={currentProduct.minAmount >= 1000 ? 500 : 50}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0c2f7c]"
                />

                <div className="flex justify-between text-xs sm:text-[13px] text-slate-800 mt-2 font-bold">
                  <span>Mínimo: {formatCurrency(currentProduct.minAmount)}</span>
                  <span>Máximo: {formatCurrency(currentProduct.maxAmount)}</span>
                </div>

                {/* Quick suggestions buttons */}
                {quickAmounts.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3.5 items-center">
                    <span className="text-xs sm:text-[13px] text-slate-800 mr-1 font-bold">Sugestões:</span>
                    {quickAmounts.map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setAmount(val)}
                        className={`text-xs sm:text-[13px] px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                          amount === val
                            ? 'bg-[#0c2f7c] text-white border-[#0c2f7c] font-bold shadow-xs'
                            : 'bg-slate-100 text-slate-800 border-slate-300 hover:bg-blue-50 hover:text-[#0c2f7c]'
                        }`}
                      >
                        {formatCurrency(val)}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Observations / Profile chips */}
              <div>
                <label htmlFor="observations" className="block text-xs sm:text-[13px] font-bold text-[#020612] uppercase tracking-wider mb-2">
                  Observações & Perfil (Opcional)
                </label>

                {/* Fast select chips */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {quickObservationChips.map((chip) => {
                    const isChipActive = selectedChips.includes(chip);
                    return (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => toggleChip(chip)}
                        className={`text-xs sm:text-[13px] px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                          isChipActive
                            ? 'bg-blue-100 text-[#020612] border-blue-500 font-bold'
                            : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        {isChipActive ? '✓ ' : '+ '}
                        {chip}
                      </button>
                    );
                  })}
                </div>

                <textarea
                  id="observations"
                  rows={2}
                  value={observations}
                  onChange={(e) => setObservations(e.target.value)}
                  placeholder="Conte um pouco sobre sua necessidade ou deixe observações adicionais..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-[16px] focus:outline-none focus:border-[#0c2f7c] focus:ring-2 focus:ring-blue-100 transition-all resize-none text-slate-900"
                />
              </div>

              {/* Action Button: CONTINUAR PELO WHATSAPP (botões: 16–17px, min-h-[52px]) */}
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-[16px] sm:text-[17px] text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-lg shadow-emerald-950/20 hover:-translate-y-0.5 border-b-2 border-[#1ca34d] transition-all duration-200 cursor-pointer min-h-[52px]"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>CONTINUAR PELO WHATSAPP</span>
                  <ArrowRight className="w-5 h-5 text-[#020612]" />
                </button>

                <p className="mt-3 text-center text-xs sm:text-[13px] text-slate-700 font-medium flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0c2f7c]" />
                  <span>Atendimento sem compromisso e sem cobrança antecipada.</span>
                </p>
              </div>
            </form>
          </div>

          {/* Dynamic Live Preview Column in Deep Navy & Gold */}
          <div className="lg:col-span-5 space-y-5">
            {/* Preview card */}
            <div className="bg-[#020612] text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-blue-950 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-blue-950">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <span className="font-bold text-xs sm:text-sm tracking-wide text-blue-300">
                    RESUMO DA SIMULAÇÃO
                  </span>
                </div>
                <span className="text-xs sm:text-[13px] px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold">
                  {currentProduct.badge}
                </span>
              </div>

              <div className="py-4 space-y-4">
                <div>
                  <span className="text-xs sm:text-[13px] text-slate-400 block">Produto selecionado</span>
                  <strong className="text-xl sm:text-2xl font-bold text-white block mt-0.5">
                    {currentProduct.name}
                  </strong>
                  <span className="text-xs sm:text-[13px] text-blue-200">
                    {currentProduct.targetAudience}
                  </span>
                </div>

                <div className="bg-[#01040d] p-4 rounded-xl border border-blue-950">
                  <div className="flex items-baseline justify-between mb-1.5">
                    <span className="text-xs sm:text-[13px] text-slate-400">Valor a consultar:</span>
                    <span className="text-2xl sm:text-3xl font-black text-amber-400">
                      {formatCurrency(amount)}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-blue-950 text-xs sm:text-[13px] text-slate-300">
                    <div className="font-bold text-white mb-0.5 text-sm sm:text-[15px]">
                      {getEstimatedInstallments().label}
                    </div>
                    <div className="text-slate-400 text-xs sm:text-[13px] leading-relaxed">
                      {getEstimatedInstallments().detail}
                    </div>
                  </div>
                </div>

                {/* Highlights of selected product */}
                <div className="space-y-2.5 pt-1 text-xs sm:text-[14px] text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{currentProduct.highlightText}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Liberação via PIX ou débito programado</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Zero taxas ou depósitos para liberação</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-blue-950 text-xs sm:text-[12.5px] text-slate-400 leading-relaxed">
                <Info className="w-3.5 h-3.5 text-amber-400 inline-block mr-1 -mt-0.5" />
                <span>
                  Valores e prazos exibidos são meramente estimativos e informativos. As condições finais são calculadas conforme a política das instituições parceiras após o envio da documentação básica no WhatsApp.
                </span>
              </div>
            </div>

            {/* Direct human specialist contact card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-300 text-[#020612] flex items-center justify-between gap-4 shadow-sm">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#020612]">
                  Prefere falar por telefone?
                </h4>
                <p className="text-xs sm:text-[14px] text-slate-800 mt-0.5 font-semibold">
                  Ligue diretamente para nossa equipe: <strong>{COMPANY_INFO.phone}</strong>
                </p>
              </div>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                className="shrink-0 bg-[#0c2f7c] hover:bg-[#081f54] text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-xl shadow-sm min-h-[44px] flex items-center justify-center"
              >
                Ligar Agora
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Success / WhatsApp Redirect Modal */}
      {successModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-300 relative">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-blue-50 text-[#0c2f7c] flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 fill-[#0c2f7c] text-[#0c2f7c]" />
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#020612]">
                Simulação Pronta para Envio!
              </h3>
              <p className="text-[15px] sm:text-[16px] text-slate-700 mt-1.5 font-medium leading-relaxed">
                Uma nova janela do WhatsApp com os seus dados foi aberta para você falar com um especialista.
              </p>
            </div>

            {/* Generated message preview */}
            <div className="mt-4 p-4 bg-slate-100 rounded-xl border border-slate-300 text-left">
              <span className="text-xs sm:text-[13px] font-bold text-slate-600 uppercase tracking-wider block mb-1.5">
                Mensagem enviada para o WhatsApp:
              </span>
              <pre className="text-[13px] sm:text-[14px] text-slate-800 font-sans whitespace-pre-wrap leading-relaxed max-h-36 overflow-y-auto">
                {generatedMessage}
              </pre>
            </div>

            {/* Modal actions (botões: 16–17px, min-h-[48px]) */}
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleCopyMessage}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-[15px] sm:text-[16px] text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer min-h-[48px]"
              >
                <Copy className="w-4 h-4" />
                <span>{copied ? 'Copiado!' : 'Copiar Mensagem'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  const waUrl = createWhatsAppUrl(COMPANY_INFO.whatsappNumber, generatedMessage);
                  window.open(waUrl, '_blank', 'noopener,noreferrer');
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-[15px] sm:text-[16px] text-white bg-[#25D366] hover:bg-[#20ba5a] border-b-2 border-[#1ca34d] shadow-md transition-colors cursor-pointer min-h-[48px]"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Abrir WhatsApp</span>
              </button>
            </div>

            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => setSuccessModalOpen(false)}
                className="text-sm sm:text-[15px] text-slate-600 hover:text-slate-900 font-semibold underline cursor-pointer p-1"
              >
                Fechar janela
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
