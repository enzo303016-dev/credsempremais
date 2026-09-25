import { Landmark, Wallet, HeartHandshake, Users, Zap, Check, ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS, Product } from '../data/creditData';

interface ProductsSectionProps {
  onSelectProductForSim: (productId: string) => void;
}

export function ProductsSection({ onSelectProductForSim }: ProductsSectionProps) {
  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case 'Landmark':
        return <Landmark className="w-6 h-6 text-[#0c2f7c]" />;
      case 'Wallet':
        return <Wallet className="w-6 h-6 text-[#0c2f7c]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#0c2f7c]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#0c2f7c]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-600 fill-amber-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#0c2f7c]" />;
    }
  };

  return (
    <section id="produtos" className="py-20 bg-slate-200/50 border-t border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-[#020612] text-xs sm:text-[13px] font-bold uppercase tracking-wider mb-3.5 border border-slate-300 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>Soluções para o Seu Momento</span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-black text-[#020612] tracking-tight leading-tight">
            Nossos Produtos de Crédito
          </h2>
          <p className="mt-3.5 text-[17px] sm:text-[18px] text-slate-800 font-semibold leading-relaxed">
            Linhas pensadas para trabalhadores CLT, antecipação do FGTS, despesas inesperadas, manutenção do veículo e organização das contas do seu dia a dia.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCTS.map((product: Product) => {
            const isFeatured = product.id === 'consignado' || product.id === 'fgts';
            const isCLT = product.id === 'consignado';

            return (
              <div
                key={product.id}
                className={`group relative bg-white rounded-2xl p-6 sm:p-7 lg:p-8 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                  isFeatured
                    ? isCLT
                      ? 'border-2 border-[#0c2f7c] shadow-lg ring-2 ring-[#0c2f7c]/10'
                      : 'border-2 border-amber-500/80 shadow-lg ring-2 ring-amber-500/10'
                    : 'border border-slate-300 shadow-sm hover:shadow-xl hover:border-[#0c2f7c]'
                }`}
              >
                {/* Visual top indicator banner for top 2 priority products */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-6 right-6 flex justify-between items-center pointer-events-none">
                    <span className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md border ${
                      isCLT
                        ? 'bg-[#020612] text-amber-400 border-amber-500/30'
                        : 'bg-amber-500 text-[#020612] border-amber-600'
                    }`}>
                      {isCLT ? '⭐ 1º Destaque: Trabalhador CLT' : '⚡ 2º Destaque: Saldo FGTS'}
                    </span>
                  </div>
                )}

                <div className={isFeatured ? 'pt-2' : ''}>
                  {/* Top card bar with icon in blue & category badge */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-xs transition-transform group-hover:scale-105 duration-200 shrink-0 ${
                      isFeatured ? 'bg-blue-50 border border-blue-200' : 'bg-slate-100 border border-slate-300/80'
                    }`}>
                      {getProductIcon(product.iconName)}
                    </div>

                    <span className={`text-xs sm:text-[13px] font-bold px-3 py-1 rounded-full border flex items-center gap-1.5 ${
                      isFeatured
                        ? isCLT
                          ? 'bg-blue-50 text-[#0c2f7c] border-blue-200 font-black'
                          : 'bg-amber-50 text-amber-900 border-amber-300 font-black'
                        : 'bg-slate-100 text-[#020612] border-slate-300'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      {product.badge}
                    </span>
                  </div>

                  {/* Target Audience hint */}
                  <p className="text-xs sm:text-[13px] font-black text-[#0c2f7c] mb-1 uppercase tracking-wide">
                    {product.targetAudience}
                  </p>

                  {/* Product Title in Deep Midnight Navy */}
                  <h3 className="text-2xl sm:text-[23px] font-black text-[#020612] group-hover:text-[#0c2f7c] transition-colors leading-snug">
                    {product.name}
                  </h3>

                  {/* Product Description */}
                  <p className="mt-3 text-[16px] sm:text-[17px] text-slate-800 leading-relaxed font-normal">
                    {product.description}
                  </p>

                  {/* Benefits Checklist */}
                  <ul className="mt-5 space-y-2.5 border-t border-slate-200 pt-4 text-[15px] sm:text-[16px] text-slate-900 font-medium">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#0c2f7c] shrink-0 mt-1 stroke-[2.5]" />
                        <span className="leading-snug">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer: Highlight and SIMULAR button */}
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <div className="text-xs sm:text-[13px] font-medium text-slate-700 mb-3.5 flex items-center justify-between">
                    <span>Condições:</span>
                    <strong className="text-[#020612] font-black text-[14px] sm:text-[15px]">{product.highlightText}</strong>
                  </div>

                  {/* Button: SIMULAR */}
                  <button
                    onClick={() => onSelectProductForSim(product.id)}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-[16px] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer border-b-2 min-h-[48px] ${
                      isFeatured
                        ? isCLT
                          ? 'bg-[#0c2f7c] hover:bg-[#081f54] text-white border-[#051438]'
                          : 'bg-[#020612] hover:bg-[#0c2f7c] text-white border-black'
                        : 'bg-[#020612] hover:bg-[#0c2f7c] text-white border-black group-hover:border-[#051438]'
                    }`}
                  >
                    <span>SIMULAR</span>
                    <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Bonus Info / Custom Profile Assistance Card in Deep Navy & Gold */}
          <div className="bg-gradient-to-br from-[#020612] via-[#051336] to-[#020612] text-white rounded-2xl p-6 sm:p-7 lg:p-8 flex flex-col justify-between shadow-md border border-blue-950">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center border border-blue-400/30 mb-4 shrink-0">
                <Sparkles className="w-6 h-6 text-amber-400" />
              </div>
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-amber-400">
                Atendimento Especializado
              </span>
              <h3 className="text-2xl sm:text-[23px] font-black text-white mt-1 leading-snug">
                Precisa de ajuda para avaliar?
              </h3>
              <p className="mt-3 text-[16px] sm:text-[17px] text-slate-200 leading-relaxed font-normal">
                Nossos consultores realizam uma análise sem compromisso para apresentar as linhas com as melhores taxas e condições para a sua necessidade.
              </p>
              <div className="mt-4 p-3.5 bg-white/5 rounded-xl border border-white/10 text-[14px] sm:text-[15px] text-slate-300 font-medium leading-relaxed">
                💬 Atendimento 100% humanizado e sem qualquer taxa antecipada.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                onClick={() => onSelectProductForSim('consignado')}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-black text-[16px] text-[#020612] bg-amber-500 hover:bg-amber-600 transition-colors duration-200 shadow-md cursor-pointer border-b-2 border-amber-800 min-h-[48px]"
              >
                <span>CONSULTAR MEU PERFIL</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer about approval and bank criteria */}
        <div className="mt-10 p-5 rounded-xl bg-white border border-slate-300 text-center max-w-4xl mx-auto shadow-xs">
          <p className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed font-medium">
            <strong className="text-[#020612]">Aviso de Transparência & Regulação:</strong> A Cred Sempre + não promete nem garante aprovação prévia de crédito, valores fixos ou prazos sem consulta individual. Todas as propostas estão sujeitas à análise cadastral, margem disponível e políticas de crédito das instituições parceiras autorizadas pelo Banco Central. A antecipação de FGTS observa as regras e limites vigentes do fundo.
          </p>
        </div>
      </div>
    </section>
  );
}
