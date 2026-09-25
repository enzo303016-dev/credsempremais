import { useState } from 'react';
import { UserCheck, ShieldCheck, HeartHandshake, Sparkles, CheckCircle2, PhoneCall } from 'lucide-react';
import cltWorkerImg from '../assets/images/clt_worker_relief_1790356769261.jpg';
import familyCalmImg from '../assets/images/family_calm_relief_1790356781335.jpg';
import carResolvedImg from '../assets/images/car_repair_resolved_1790356794381.jpg';

interface Scene {
  id: 'clt' | 'familia' | 'carro';
  title: string;
  badge: string;
  image: string;
  alt: string;
  quote: string;
  subtitle: string;
  context: string;
}

export function HeroHumanScenes() {
  const [activeSceneId, setActiveSceneId] = useState<'clt' | 'familia' | 'carro'>('clt');

  const scenes: Scene[] = [
    {
      id: 'clt',
      title: 'Trabalhador CLT',
      badge: 'Alívio & Tranquilidade',
      image: cltWorkerImg,
      alt: 'Trabalhador CLT brasileiro sorrindo aliviado e tranquilo em casa tomando café e consultando o celular',
      quote: '"Consegui organizar minha vida financeira sem comprometer meu salário."',
      subtitle: 'Contas organizadas com desconto em folha e orientação humana.',
      context: 'Empréstimo Consignado CLT & FGTS'
    },
    {
      id: 'familia',
      title: 'Família Organizada',
      badge: 'Planejamento Familiar',
      image: familyCalmImg,
      alt: 'Casal brasileiro tranquilo organizando despesas familiares na mesa de casa com paz de espírito',
      quote: '"Encontrei uma opção que realmente coube no momento da nossa família."',
      subtitle: 'Despesas do mês organizadas com clareza e sem promessas mirabolantes.',
      context: 'Orçamento Doméstico em Dia'
    },
    {
      id: 'carro',
      title: 'Imprevisto Resolvido',
      badge: 'Solução do Dia a Dia',
      image: carResolvedImg,
      alt: 'Pessoa brasileira aliviada e satisfeita após resolver despesa de manutenção do carro',
      quote: '"Fui atendido por uma pessoa de verdade que me orientou no imprevisto."',
      subtitle: 'Manutenção do carro resolvida com rapidez e sem taxas antecipadas.',
      context: 'Despesas Inesperadas'
    }
  ];

  const currentScene = scenes.find((s) => s.id === activeSceneId) || scenes[0];

  return (
    <div className="relative mx-auto w-full max-w-[500px] lg:max-w-[540px]">
      {/* Ambient background brand glow */}
      <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-tr from-[#0c2f7c]/20 via-blue-500/15 to-amber-500/25 blur-2xl opacity-75" />

      {/* Main Container */}
      <div className="relative bg-white rounded-3xl p-3 sm:p-4 shadow-2xl border border-slate-300 overflow-hidden flex flex-col">
        {/* Top Header inside visual area: Human Support Indicator */}
        <div className="flex items-center justify-between pb-3 px-1 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#0c2f7c] text-white flex items-center justify-center">
              <HeartHandshake className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <span className="text-[13px] sm:text-[14px] font-black text-[#020612] block leading-tight">
                Atendimento por Pessoas Reais
              </span>
              <span className="text-[11px] text-slate-600 block">
                Empatia e respeito pelo seu momento financeiro
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
            <span>Consultores Online</span>
          </div>
        </div>

        {/* Scene Switcher Pills */}
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-xl my-2.5 border border-slate-200">
          {scenes.map((scene) => {
            const isActive = scene.id === activeSceneId;
            return (
              <button
                key={scene.id}
                type="button"
                onClick={() => setActiveSceneId(scene.id)}
                className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all text-center cursor-pointer min-h-[36px] flex items-center justify-center gap-1 ${
                  isActive
                    ? 'bg-[#020612] text-white shadow-sm'
                    : 'text-slate-700 hover:text-[#020612] hover:bg-white/70'
                }`}
              >
                <span>{scene.title}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Main Photograph Frame */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200 group">
          <img
            src={currentScene.image}
            alt={currentScene.alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
          />

          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020612]/85 via-[#020612]/30 to-transparent" />

          {/* Badge at top of image */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#020612] text-xs font-black shadow-md border border-white/60 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>{currentScene.badge}</span>
            </span>
          </div>

          {/* Context pill at top right */}
          <div className="absolute top-3 right-3 hidden sm:block">
            <span className="px-2.5 py-1 rounded-full bg-[#020612]/70 backdrop-blur-md text-slate-200 text-[11px] font-semibold border border-white/20">
              {currentScene.context}
            </span>
          </div>

          {/* Emotional quote at bottom of photo */}
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <p className="text-[14px] sm:text-[15px] font-bold leading-snug drop-shadow-sm text-slate-100">
              {currentScene.quote}
            </p>
            <p className="text-xs text-amber-300 mt-1 font-medium drop-shadow-xs flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{currentScene.subtitle}</span>
            </p>
          </div>
        </div>

        {/* Multi-scene thumbnails preview row to show connection between everyday situations */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          {scenes.map((scene) => {
            const isCurrent = scene.id === activeSceneId;
            return (
              <button
                key={scene.id}
                type="button"
                onClick={() => setActiveSceneId(scene.id)}
                className={`relative rounded-xl overflow-hidden border-2 transition-all p-1 text-left flex items-center gap-2 cursor-pointer ${
                  isCurrent
                    ? 'border-[#0c2f7c] bg-blue-50/70 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <img
                  src={scene.image}
                  alt={scene.title}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-lg object-cover shrink-0"
                />
                <div className="min-w-0 pr-1">
                  <span className="text-[11px] font-black text-[#020612] block truncate">
                    {scene.title}
                  </span>
                  <span className="text-[9.5px] text-slate-600 block truncate">
                    {scene.id === 'clt' ? 'Consignado / FGTS' : scene.id === 'familia' ? 'Planejamento' : 'Manutenção'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Humanized Reassurance Box at bottom of card */}
        <div className="mt-3 p-3 rounded-xl bg-slate-100/90 border border-slate-200 text-xs text-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-[#0c2f7c] shrink-0" />
            <span className="font-semibold text-[12px] sm:text-[13px] text-[#020612]">
              Orientação humana e transparente • Sem falsas promessas
            </span>
          </div>
          <div className="flex items-center gap-1 text-[#0c2f7c] font-black shrink-0 text-[11px]">
            <PhoneCall className="w-3.5 h-3.5 text-[#0c2f7c]" />
            <span className="hidden sm:inline">WhatsApp Direto</span>
          </div>
        </div>
      </div>
    </div>
  );
}
