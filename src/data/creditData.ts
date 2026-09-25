export interface Product {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  targetAudience: string;
  description: string;
  benefits: string[];
  minAmount: number;
  maxAmount: number;
  defaultAmount: number;
  highlightText: string;
  iconName: string;
  colorScheme: {
    bg: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    accent: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  role: string;
  product: string;
  rating: number;
  comment: string;
  timeAgo: string;
  avatarUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const COMPANY_INFO = {
  name: "Cred Sempre +",
  tagline: "Crédito do seu jeito",
  subtagline: "Rápido • Digital • Seguro",
  phone: "(11) 97117-9442",
  whatsappNumber: "5511971179442", // format for wa.me
  email: "contatocredsempre+@gmail.com",
  hours: "Segunda a Sexta: 08:00 às 18:30 | Sábado: 08:30 às 13:00",
  cnpj: "40.081.386/0001-28",
  facebookUrl: "https://www.facebook.com/credsemoremais",
  instagramUrl: "https://www.instagram.com/credsempremaiss/",
  address: "Atendimento Digital Especializado em Todo o Brasil | São Paulo - SP",
  bacenNotice: "A Cred Sempre + atua como correspondente bancária autorizada nos termos da Resolução nº 3.954 do Banco Central do Brasil. Não somos uma instituição financeira e não realizamos operações de crédito diretamente. As análises de crédito, taxas e prazos são determinados pelas instituições financeiras parceiras devidamente autorizadas pelo Banco Central.",
  antiFraudAlert: "ALERTA DE SEGURANÇA: A Cred Sempre + NUNCA solicita adiantamentos, depósitos prévios, taxas de avalista, cartório ou PIX para liberação de empréstimos. Essa prática é ilegal. Em caso de dúvidas, fale somente através dos nossos canais oficiais."
};

export const PRODUCTS: Product[] = [
  {
    id: "consignado",
    name: "Empréstimo Consignado CLT",
    shortName: "Consignado CLT",
    badge: "Destaque Principal • Carteira Assinada",
    targetAudience: "Crédito do Trabalhador",
    description: "Para trabalhadores com carteira assinada, sujeito à análise de crédito e às condições disponíveis para o seu perfil.",
    benefits: [
      "Desconto automático em folha sem necessidade de boletos",
      "Taxas de juros atrativas para o trabalhador CLT",
      "Ajuda a reorganizar despesas, contas acumuladas ou imprevistos",
      "Prazos planejados que cabem no orçamento mensal",
      "Atendimento humanizado passo a passo pelo WhatsApp"
    ],
    minAmount: 1000,
    maxAmount: 100000,
    defaultAmount: 5000,
    highlightText: "Crédito do Trabalhador CLT • Desconto em Folha",
    iconName: "Landmark",
    colorScheme: {
      bg: "from-blue-600/10 to-indigo-600/5",
      border: "border-blue-300 hover:border-blue-600",
      badgeBg: "bg-blue-50 text-blue-900 border-blue-200",
      badgeText: "text-blue-700",
      accent: "text-blue-600"
    }
  },
  {
    id: "fgts",
    name: "Antecipação do Saque-Aniversário FGTS",
    shortName: "Saque FGTS",
    badge: "Alta Procura • Sem Parcela Mensal",
    targetAudience: "Trabalhadores com saldo FGTS ativo ou inativo",
    description: "Antecipe o Saque-Aniversário do FGTS conforme as regras vigentes. Limite de saques antecipáveis sujeito às regras atuais do FGTS (regra de transição de até 5 saques anuais até 31/10/2026; a partir de 01/11/2026 o limite passa a ser de até 3 saques anuais).",
    benefits: [
      "Antecipe o Saque-Aniversário conforme as regras vigentes",
      "Limite de saques sujeito às normas atuais do FGTS",
      "Sem boleto mensal: desconto anual debitado direto do fundo",
      "Não compromete seu salário ou renda mensal",
      "Liberação rápida via PIX após análise cadastral"
    ],
    minAmount: 150,
    maxAmount: 40000,
    defaultAmount: 3500,
    highlightText: "Regras vigentes do FGTS • Sem boleto mensal",
    iconName: "Wallet",
    colorScheme: {
      bg: "from-blue-500/10 to-amber-500/5",
      border: "border-blue-300 hover:border-blue-500",
      badgeBg: "bg-amber-50 text-amber-900 border-amber-300",
      badgeText: "text-amber-800",
      accent: "text-blue-600"
    }
  },
  {
    id: "inss",
    name: "Crédito INSS",
    shortName: "Crédito INSS",
    badge: "Atendimento Humanizado",
    targetAudience: "Aposentados e Pensionistas da Previdência Social",
    description: "Linhas dedicadas com margem consignável atualizada, suporte paciente para orientar sobre o melhor plano e portabilidade de contratos antigos.",
    benefits: [
      "Margem consignável de até 35% do benefício",
      "Atendimento respeitoso e passo a passo por atendentes reais",
      "Opções de refinanciamento para liberar troco em dinheiro",
      "Assinatura digital simples e segura por biometria"
    ],
    minAmount: 500,
    maxAmount: 80000,
    defaultAmount: 6000,
    highlightText: "Margem livre ou refinanciamento com troco",
    iconName: "HeartHandshake",
    colorScheme: {
      bg: "from-blue-900/10 to-blue-600/5",
      border: "border-blue-200 hover:border-blue-700",
      badgeBg: "bg-blue-50 text-blue-900 border-blue-200",
      badgeText: "text-blue-800",
      accent: "text-blue-700"
    }
  },
  {
    id: "bolsa-familia",
    name: "Bolsa Família & Benefícios",
    shortName: "Bolsa Família",
    badge: "Apoio Familiar Consciente",
    targetAudience: "Famílias beneficiárias de programas de auxílio",
    description: "Consulte opções de microcrédito e viabilidade financeira pensadas para quem recebe auxílio do governo e precisa resolver imprevistos familiares.",
    benefits: [
      "Consulta transparente das linhas ativas disponíveis",
      "Parcelas planejadas que cabem no seu orçamento",
      "Sem falsas promessas: análise séria e responsável",
      "Atendimento direto e sem burocracia desnecessária"
    ],
    minAmount: 300,
    maxAmount: 3000,
    defaultAmount: 1200,
    highlightText: "Microcrédito consciente para seu momento",
    iconName: "Users",
    colorScheme: {
      bg: "from-amber-500/10 to-blue-500/5",
      border: "border-amber-200 hover:border-amber-500",
      badgeBg: "bg-amber-50 text-amber-900 border-amber-200",
      badgeText: "text-amber-800",
      accent: "text-amber-600"
    }
  },
  {
    id: "energia",
    name: "Crédito na Conta de Energia",
    shortName: "Conta de Luz",
    badge: "Sem Conta em Banco",
    targetAudience: "Titulares da fatura de energia elétrica residencial",
    description: "Empréstimo facilitado onde as parcelas vêm cobradas mensalmente na sua conta de luz. Uma das formas mais práticas de obter crédito sem burocracia.",
    benefits: [
      "Não é obrigatório ter conta bancária em instituição tradicional",
      "Parcelas incluídas diretamente no boleto mensal de energia",
      "Aprovação facilitada e análise de perfil descomplicada",
      "Diversas distribuidoras conveniadas em todo o Brasil"
    ],
    minAmount: 500,
    maxAmount: 4500,
    defaultAmount: 1800,
    highlightText: "Parcelado direto na sua fatura mensal",
    iconName: "Zap",
    colorScheme: {
      bg: "from-amber-400/10 to-blue-600/5",
      border: "border-amber-300 hover:border-amber-500",
      badgeBg: "bg-amber-50 text-amber-900 border-amber-200",
      badgeText: "text-amber-800",
      accent: "text-amber-600"
    }
  }
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Faça sua Simulação",
    desc: "Preencha seus dados básicos e selecione o produto de interesse no nosso formulário interativo.",
    icon: "Calculator"
  },
  {
    step: "02",
    title: "Atendimento no WhatsApp",
    desc: "Nossos consultores especialistas recebem sua simulação e analisam as melhores opções em nossos bancos conveniados.",
    icon: "MessageSquareText"
  },
  {
    step: "03",
    title: "Formalização 100% Segura",
    desc: "Você recebe a proposta detalhada, confere todas as taxas sem pegadinhas e assina com segurança digital.",
    icon: "ShieldCheck"
  },
  {
    step: "04",
    title: "Dinheiro na Conta",
    desc: "Após a aprovação pela instituição financeira parceira, o valor é creditado via PIX ou TED na sua conta.",
    icon: "Banknote"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Maria Aparecida dos Santos",
    city: "São Paulo - SP",
    role: "Aposentada do INSS",
    product: "Crédito INSS",
    rating: 5,
    comment: "Eu tinha muito medo de cair em golpe pela internet, mas a atendente da Cred Sempre + teve toda paciência do mundo para me explicar. Não me cobraram nenhum centavo antes e o dinheiro caiu certinho para eu reformar meu quarto.",
    timeAgo: "Há 3 dias",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80"
  },
  {
    id: "2",
    name: "Carlos Eduardo Ribeiro",
    city: "Belo Horizonte - MG",
    role: "Trabalhador CLT",
    product: "Antecipação FGTS",
    rating: 5,
    comment: "Fiz a antecipação do Saque Aniversário do FGTS. Em menos de 2 horas depois do envio da proposta pelo WhatsApp, o PIX já estava na minha conta. Atendimento rápido, transparente e sem enrolação.",
    timeAgo: "Há 1 semana",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80"
  },
  {
    id: "3",
    name: "Solange Mendes de Oliveira",
    city: "Salvador - BA",
    role: "Dona de Casa e Autônoma",
    product: "Crédito na Conta de Luz",
    rating: 5,
    comment: "Eu não tinha comprovação formal de renda e nem limite no cartão. O crédito na conta de energia foi a salvação para repor as mercadorias do meu pequeno comércio. A equipe é muito humana!",
    timeAgo: "Há 2 semanas",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80"
  },
  {
    id: "4",
    name: "José Marcos da Silva",
    city: "Curitiba - PR",
    role: "Servidor Público Municipal",
    product: "Crédito Consignado",
    rating: 5,
    comment: "Consegui uma taxa muito mais vantajosa do que o banco onde recebo salário me oferecia. Economizei mais de R$ 180 por parcela no consignado. Recomendo muito o trabalho da Cred Sempre +.",
    timeAgo: "Há 3 semanas",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quem tem nome negativado ou restrição no CPF pode simular?",
    answer: "Sim! Modalidades como a Antecipação do Saque FGTS e o Crédito na Conta de Energia avaliam critérios diferenciados e não dependem exclusivamente de consulta restritiva tradicional no SPC/Serasa. O Crédito Consignado para aposentados e pensionistas também pode ser contratado mesmo com apontamentos cadastrais, respeitando a margem disponível."
  },
  {
    question: "Como funciona o crédito debitado na conta de luz?",
    answer: "É uma modalidade onde o valor aprovado é liberado em sua conta corrente, poupança ou via PIX, e o pagamento das parcelas mensais vem adicionado diretamente na fatura de energia da concessionária conveniada (como Enel, Neoenergia, CPFL, Equatorial, entre outras). O titular da conta de luz deve ser o solicitante do empréstimo."
  },
  {
    question: "A Cred Sempre + cobra alguma taxa antecipada para liberação?",
    answer: "NUNCA! De acordo com as normas estritas do Banco Central do Brasil, a cobrança de taxa de cadastro, avalista, fiador ou depósito prévio para liberação de empréstimo é CRIME. Você nunca paga nada do seu bolso à Cred Sempre +. Os custos do serviço já estão diluídos nas parcelas aprovadas pelo banco parceiro."
  },
  {
    question: "Quanto tempo demora para o valor ser liberado após aprovação?",
    answer: "Para antecipação de Saque Aniversário do FGTS, a liberação costuma ocorrer em até 2 horas úteis após a confirmação. Para Crédito Consignado e Conta de Luz, o prazo habitual varia entre 2 horas e 24 horas úteis, dependendo do tempo de averbação do órgão pagador ou concessionária."
  },
  {
    question: "O que é preciso para fazer a antecipação do Saque FGTS?",
    answer: "Basta ser maior de 18 anos, possuir saldo no FGTS (em conta ativa ou inativa), optar pela modalidade 'Saque-Aniversário' no aplicativo oficial do FGTS e autorizar o banco parceiro indicado pela nossa equipe a consultar o seu saldo."
  },
  {
    question: "É seguro enviar meus dados e documentos pelo WhatsApp?",
    answer: "Sim. Nossos canais possuem atendimento oficial, seguimos rigorosamente as diretrizes da Lei Geral de Proteção de Dados (LGPD nº 13.709/2018) e a assinatura dos contratos é realizada diretamente através de links criptografados oficiais dos bancos conveniados com autenticação por selfie ou biometria facial."
  }
];
