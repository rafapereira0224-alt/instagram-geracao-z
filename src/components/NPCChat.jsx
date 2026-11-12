
import { useEffect, useRef, useState } from "react";

// =====================================================
// CONFIGURAÇÕES
// =====================================================

const ANO_INICIAL = 1997;
const ANO_FINAL = 2012;

const professorPadrao = {
  id: "bruna",
  nome: "Professora Bruna",
  especialidade: "Inglês",
  imagem: `${import.meta.env.BASE_URL}bruna.png`,
  cor: "#a855f7",
};

// =====================================================
// BASE HISTÓRICA DO INSTAGRAM
// =====================================================

const acontecimentos = {
  1997: [
    "Fundação da Netflix",
    "Lançamento do primeiro livro de Harry Potter",
  ],
  1998: [
    "Criação do Google",
    "Lançamento do Windows 98",
  ],
  1999: [
    "Popularização do Napster",
    "Lançamento do filme Matrix",
  ],
  2000: [
    "Estouro da bolha da internet",
    "Lançamento do PlayStation 2",
  ],
  2001: [
    "Atentados de 11 de setembro",
    "Criação da Wikipédia",
  ],
  2002: [
    "Pentacampeonato do Brasil",
    "Entrada em circulação das notas de euro",
  ],
  2003: [
    "Popularização do MySpace",
    "Início da Guerra do Iraque",
  ],
  2004: [
    "Tsunami no Oceano Índico",
    "Criação do Facebook",
  ],
  2005: [
    "Furacão Katrina",
    "Criação do YouTube",
  ],
  2006: [
    "Lançamento do Nintendo Wii",
    "Criação do Twitter",
  ],
  2007: [
    "Lançamento do primeiro iPhone",
    "Início do streaming da Netflix",
  ],
  2008: [
    "Eleição de Barack Obama",
    "Crise financeira mundial",
  ],
  2009: [
    "Pandemia de H1N1",
    "Primeiras versões públicas de Minecraft",
  ],
  2010: [
    "Início da Primavera Árabe",
    "Criação do Instagram",
  ],
  2011: [
    "Criação do Snapchat",
    "Terremoto e tsunami no Japão",
  ],
  2012: [
    "Gangnam Style chega a 1 bilhão de visualizações",
    "Pouso do robô Curiosity em Marte",
  ],
};

// =====================================================
// NORMALIZAÇÃO DE TEXTO
// =====================================================

function normalizar(texto = "") {
  return String(texto)
    .toLocaleLowerCase("pt-BR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function contem(texto, palavras) {
  return palavras.some((palavra) =>
    texto.includes(normalizar(palavra))
  );
}

// =====================================================
// IDENTIFICAR ANO
// =====================================================

function identificarAno(mensagem) {
  const encontrados = String(mensagem).match(
    /\b(?:19\d{2}|20\d{2})\b/g
  );

  if (!encontrados) return null;

  return Number(encontrados[0]);
}

// =====================================================
// RECONHECER PEDIDO DE NAVEGAÇÃO
// =====================================================

function querNavegar(mensagem) {
  const texto = normalizar(mensagem);

  return (
    /\b(mostra|mostrar|mostre|abre|abrir|abra|visitar|visite|acessar|filtrar|leva|levar|veja|ver)\b/.test(
      texto
    ) ||
    /\b(quero|vamos|ir)\b.*\b(posts?|publicacoes|ano|acontecimentos)\b/.test(
      texto
    )
  );
}

// =====================================================
// RESPOSTAS GERAIS
// =====================================================

const respostasGerais = [
  {
    termos: ["geracao z", "gen z"],
    resposta:
      "🌎 A Geração Z é geralmente associada às pessoas nascidas entre o fim dos anos 1990 e o início dos anos 2010.\n\n" +
      "Essa geração cresceu acompanhando a expansão da internet, dos smartphones e das redes sociais.\n\n" +
      "Neste projeto, exploramos acontecimentos históricos de 1997 a 2012.",
  },
  {
    termos: [
      "como funciona o instagram",
      "como funciona o site",
      "como funciona o perfil",
      "como usar o site",
    ],
    resposta:
      "📸 Nosso Instagram é uma experiência educacional!\n\n" +
      "Você pode:\n\n" +
      "• Explorar 32 publicações históricas\n" +
      "• Assistir aos Stories de cada ano\n" +
      "• Ver destaques por categoria\n" +
      "• Pesquisar acontecimentos\n" +
      "• Filtrar publicações por ano\n\n" +
      "Também posso te levar diretamente às publicações. Experimente: 'Me mostra 2007'.",
  },
  {
    termos: ["tecnologia", "internet", "redes sociais"],
    resposta:
      "💻 Algumas tecnologias importantes da nossa linha histórica:\n\n" +
      "• Google — 1998\n" +
      "• Windows 98 — 1998\n" +
      "• YouTube — 2005\n" +
      "• iPhone — 2007\n" +
      "• Instagram — 2010\n\n" +
      "Escolha um ano para descobrir mais!",
  },
  {
    termos: ["games", "videogames", "jogos eletrônicos"],
    resposta:
      "🎮 Os jogos marcaram a Geração Z!\n\n" +
      "• PlayStation 2 — 2000\n" +
      "• Nintendo Wii — 2006\n" +
      "• Minecraft — 2009\n\n" +
      "Esses lançamentos ajudaram a transformar o entretenimento digital.",
  },
  {
    termos: [
      "todos os anos",
      "explorar os anos",
      "linha do tempo",
      "quais anos",
    ],
    resposta:
      "📅 Nossa linha do tempo começa em 1997 e termina em 2012.\n\n" +
      "Temos dois acontecimentos selecionados para cada ano, totalizando 32 publicações.\n\n" +
      "Você pode escrever qualquer ano desse período!",
  },
];

// =====================================================
// CONHECIMENTOS DA BRUNA — INGLÊS
// =====================================================

const respostasBruna = [
  {
    termos: [
      "present simple",
      "simple present",
      "presente simples",
    ],
    resposta:
      "🇬🇧 O Simple Present é usado para hábitos, rotinas e fatos gerais.\n\n" +
      "Exemplos:\n" +
      "• I study English. = Eu estudo inglês.\n" +
      "• She plays games. = Ela joga videogame.\n\n" +
      "Com he, she e it, normalmente adicionamos -s ao verbo na forma afirmativa.",
  },
  {
    termos: [
      "past simple",
      "simple past",
      "passado simples",
    ],
    resposta:
      "📚 O Simple Past é usado para ações concluídas no passado.\n\n" +
      "Exemplos:\n" +
      "• I watched a movie yesterday.\n" +
      "Eu assisti a um filme ontem.\n\n" +
      "• Google started in 1998.\n" +
      "O Google começou em 1998.\n\n" +
      "Verbos regulares normalmente recebem -ed. Os irregulares têm formas próprias.",
  },
  {
    termos: [
      "present continuous",
      "presente continuo",
    ],
    resposta:
      "📖 O Present Continuous geralmente descreve ações que estão acontecendo agora.\n\n" +
      "Estrutura: am/is/are + verbo com -ing.\n\n" +
      "Exemplos:\n" +
      "• I am studying. = Estou estudando.\n" +
      "• They are playing. = Eles estão jogando.",
  },
  {
    termos: ["verb to be", "verbo to be"],
    resposta:
      "🇬🇧 O verbo to be significa principalmente ser ou estar.\n\n" +
      "• I am = Eu sou/estou\n" +
      "• You are = Você é/está\n" +
      "• He is = Ele é/está\n" +
      "• She is = Ela é/está\n" +
      "• We are = Nós somos/estamos\n\n" +
      "Exemplo: I am happy. = Estou feliz.",
  },
  {
    termos: ["ingles nos jogos", "ingles em jogos"],
    resposta:
      "🎮 Os videogames são ótimos para aprender vocabulário!\n\n" +
      "• Start = Começar\n" +
      "• Save = Salvar\n" +
      "• Level = Nível\n" +
      "• Game over = Fim de jogo\n" +
      "• Loading = Carregando\n" +
      "• Achievement = Conquista\n\n" +
      "Prestar atenção aos menus e diálogos ajuda a aprender expressões em contexto.",
  },
  {
    termos: [
      "ingles na internet",
      "ingles na tecnologia",
      "palavras em ingles",
    ],
    resposta:
      "💻 Muitas palavras da tecnologia vêm do inglês!\n\n" +
      "• Download = Baixar\n" +
      "• Upload = Enviar arquivo\n" +
      "• Password = Senha\n" +
      "• Username = Nome de usuário\n" +
      "• Share = Compartilhar\n" +
      "• Follow = Seguir\n\n" +
      "A expansão da internet tornou essas palavras muito comuns.",
  },
  {
    termos: [
      "como aprender ingles",
      "dicas de ingles",
      "estudar ingles",
    ],
    resposta:
      "🇬🇧 Minhas dicas para aprender inglês:\n\n" +
      "1. Estude um pouco todos os dias.\n" +
      "2. Assista a vídeos com legendas.\n" +
      "3. Aprenda vocabulário nos jogos.\n" +
      "4. Leia textos curtos.\n" +
      "5. Pratique frases em voz alta.\n\n" +
      "O importante é manter a constância!",
  },
  {
    termos: ["traduzir hello", "significado de hello"],
    resposta:
      "Hello significa 'olá' em inglês! 👋\n\n" +
      "Outras saudações:\n" +
      "• Good morning = Bom dia\n" +
      "• Good afternoon = Boa tarde\n" +
      "• Good night = Boa noite, geralmente como despedida.",
  },
];

// =====================================================
// CONHECIMENTOS DA GRACE — HISTÓRIA E SOCIOLOGIA
// =====================================================

const respostasGrace = [
  {
    termos: ["sociologia", "o que e sociedade"],
    resposta:
      "🌍 A Sociologia estuda a sociedade, as relações humanas, as instituições e as transformações sociais.\n\n" +
      "Ela nos ajuda a entender como a tecnologia, a cultura e a política influenciam nosso comportamento.",
  },
  {
    termos: [
      "globalizacao",
      "mundo globalizado",
    ],
    resposta:
      "🌐 Globalização é o processo de intensificação das conexões econômicas, culturais, políticas e tecnológicas entre diferentes regiões do mundo.\n\n" +
      "A internet acelerou a circulação de informações, produtos e manifestações culturais.",
  },
  {
    termos: [
      "11 de setembro",
      "torres gemeas",
      "atentados de 2001",
    ],
    resposta:
      "📖 Em 11 de setembro de 2001, ataques terroristas atingiram os Estados Unidos, incluindo as Torres Gêmeas, em Nova York.\n\n" +
      "O acontecimento provocou profundas mudanças nas políticas de segurança e nas relações internacionais.\n\n" +
      "Esse é um dos temas presentes nas publicações de 2001.",
  },
  {
    termos: [
      "guerra do iraque",
      "iraque",
    ],
    resposta:
      "📖 A Guerra do Iraque começou em 2003, com uma invasão liderada pelos Estados Unidos e aliados.\n\n" +
      "O conflito provocou grandes consequências políticas, sociais e humanitárias.\n\n" +
      "Você pode explorar esse acontecimento no ano de 2003.",
  },
  {
    termos: [
      "crise de 2008",
      "crise financeira",
      "crise economica mundial",
    ],
    resposta:
      "💰 A crise financeira de 2008 foi uma grave crise econômica internacional, ligada inicialmente a problemas no mercado imobiliário e financeiro dos Estados Unidos.\n\n" +
      "Ela provocou falências, desemprego e recessão em muitos países.",
  },
  {
    termos: [
      "primavera arabe",
      "protestos arabes",
    ],
    resposta:
      "🌍 A Primavera Árabe foi uma onda de protestos e movimentos populares que começou no fim de 2010 e se espalhou por diferentes países em 2011.\n\n" +
      "As manifestações envolveram reivindicações políticas, econômicas e sociais.",
  },
  {
    termos: [
      "redes sociais e sociedade",
      "impacto das redes sociais",
      "sociedade digital",
    ],
    resposta:
      "📱 As redes sociais transformaram a comunicação e a participação social.\n\n" +
      "Elas facilitaram a circulação de informações e a mobilização coletiva, mas também trouxeram desafios, como desinformação e exposição excessiva.",
  },
  {
    termos: [
      "cultura da geracao z",
      "identidade cultural",
      "cultura digital",
    ],
    resposta:
      "🎭 A cultura da Geração Z foi influenciada pela internet, pelos videogames, pela música digital e pelas redes sociais.\n\n" +
      "Essas tecnologias mudaram a maneira de consumir informação, criar comunidades e expressar identidades.",
  },
];

// =====================================================
// CONHECIMENTOS DO ALLAN — FÍSICA
// =====================================================

const respostasAllan = [
  {
    termos: ["gravidade", "gravitacao"],
    resposta:
      "⚛️ A gravidade é a interação responsável pela atração entre corpos com massa.\n\n" +
      "Ela mantém os planetas em órbita e faz os objetos caírem em direção ao solo.\n\n" +
      "Na superfície da Terra, a aceleração gravitacional é aproximadamente 9,8 m/s².",
  },
  {
    termos: ["velocidade media", "calcular velocidade"],
    resposta:
      "🚗 A velocidade média pode ser calculada por:\n\n" +
      "Vm = Δs / Δt\n\n" +
      "Δs é o deslocamento e Δt é o intervalo de tempo.\n\n" +
      "Exemplo: se um carro se desloca 100 km em 2 horas, a velocidade média é 50 km/h, considerando esse deslocamento.",
  },
  {
    termos: [
      "leis de newton",
      "primeira lei de newton",
      "segunda lei de newton",
      "terceira lei de newton",
    ],
    resposta:
      "⚛️ As três leis de Newton são fundamentais para estudar o movimento:\n\n" +
      "1. Inércia: um corpo mantém seu estado de movimento se a força resultante for zero.\n\n" +
      "2. Dinâmica: força resultante = massa × aceleração (F = m × a).\n\n" +
      "3. Ação e reação: forças de interação aparecem em pares de mesma intensidade e sentidos opostos.",
  },
  {
    termos: [
      "energia cinetica",
      "energia potencial",
      "tipos de energia",
    ],
    resposta:
      "⚡ Existem diferentes formas de energia!\n\n" +
      "• Cinética: associada ao movimento.\n" +
      "• Potencial gravitacional: associada à posição em um campo gravitacional.\n" +
      "• Térmica: relacionada à energia microscópica de um sistema.\n" +
      "• Elétrica: associada a cargas e campos elétricos.\n\n" +
      "A energia pode ser transferida e transformada.",
  },
  {
    termos: [
      "eletricidade",
      "corrente eletrica",
      "tensao eletrica",
    ],
    resposta:
      "🔌 A eletricidade está presente em praticamente toda a tecnologia moderna.\n\n" +
      "Corrente elétrica envolve movimento ordenado de cargas.\n\n" +
      "Tensão elétrica é a diferença de potencial elétrico entre dois pontos.\n\n" +
      "A resistência elétrica relaciona a tensão e a corrente em componentes ôhmicos pela Lei de Ohm: U = R × I.",
  },
  {
    termos: [
      "luz",
      "optica",
      "velocidade da luz",
    ],
    resposta:
      "💡 A luz é uma forma de radiação eletromagnética.\n\n" +
      "No vácuo, sua velocidade é aproximadamente 300 mil quilômetros por segundo.\n\n" +
      "A Óptica estuda fenômenos como reflexão, refração e formação de imagens.",
  },
  {
    termos: [
      "som",
      "ondas sonoras",
      "frequencia",
    ],
    resposta:
      "🔊 O som é uma onda mecânica e precisa de um meio material para se propagar.\n\n" +
      "Sua frequência está relacionada à altura do som: frequências maiores correspondem a sons mais agudos.\n\n" +
      "Já a amplitude está relacionada à intensidade sonora.",
  },
  {
    termos: [
      "marte",
      "curiosity",
      "exploracao espacial",
    ],
    resposta:
      "🚀 O rover Curiosity pousou em Marte em agosto de 2012.\n\n" +
      "Ele foi enviado pela NASA para estudar a geologia, o ambiente e as condições que poderiam ter permitido vida microbiana no passado marciano.\n\n" +
      "Esse acontecimento está nas publicações de 2012!",
  },
  {
    termos: [
      "como funciona um celular",
      "fisica no celular",
      "fisica na tecnologia",
    ],
    resposta:
      "📱 Os celulares reúnem várias aplicações da Física!\n\n" +
      "• Ondas eletromagnéticas: comunicação sem fio.\n" +
      "• Eletricidade: alimentação dos circuitos.\n" +
      "• Óptica: funcionamento das câmeras.\n" +
      "• Sensores: identificação de movimento e orientação.",
  },
];

// =====================================================
// PERGUNTAS RÁPIDAS POR PROFESSOR
// =====================================================

const sugestoes = {
  bruna: [
    {
      label: "🇬🇧 Verbo to be",
      mensagem: "Explique o verbo to be",
    },
    {
      label: "📚 Simple Present",
      mensagem: "O que é Simple Present?",
    },
    {
      label: "🎮 Inglês nos jogos",
      mensagem: "Inglês nos jogos",
    },
    {
      label: "💻 Inglês na internet",
      mensagem: "Inglês na internet",
    },
    {
      label: "📅 Ver 2007",
      mensagem: "Me mostra 2007",
    },
  ],
  grace: [
    {
      label: "🌍 Sociologia",
      mensagem: "O que é Sociologia?",
    },
    {
      label: "🌐 Globalização",
      mensagem: "Explique globalização",
    },
    {
      label: "📖 11 de setembro",
      mensagem: "Explique o 11 de setembro",
    },
    {
      label: "📱 Redes sociais",
      mensagem: "Qual o impacto das redes sociais?",
    },
    {
      label: "📅 Ver 2008",
      mensagem: "Me mostra 2008",
    },
  ],
  allan: [
    {
      label: "⚛️ Gravidade",
      mensagem: "Explique gravidade",
    },
    {
      label: "🚗 Velocidade média",
      mensagem: "Como calcular velocidade média?",
    },
    {
      label: "⚡ Energia",
      mensagem: "Quais os tipos de energia?",
    },
    {
      label: "🚀 Marte",
      mensagem: "Me explique sobre o Curiosity em Marte",
    },
    {
      label: "📅 Ver 2012",
      mensagem: "Me mostra 2012",
    },
  ],
};

// =====================================================
// MENSAGEM INICIAL
// =====================================================

function mensagemInicial(professor) {
  const introducoes = {
    bruna:
      "Hello! 👋🇬🇧\n\n" +
      "Sou a Bruna virtual!\n\n" +
      "Podemos conversar sobre inglês, gramática, vocabulário, jogos e cultura digital.\n\n" +
      "What would you like to learn today?",
    grace:
      "Olá! 👋🌍\n\n" +
      "Sou a Grace virtual!\n\n" +
      "Vamos explorar História, Sociologia e os acontecimentos que transformaram nossa sociedade?\n\n" +
      "Escolha uma pergunta ou me conte o que deseja descobrir!",
    allan:
      "Fala, pessoal! 👋⚛️\n\n" +
      "Sou o Allan virtual!\n\n" +
      "Podemos conversar sobre Física, ciência, tecnologia e descobertas incríveis.\n\n" +
      "Qual fenômeno você quer entender hoje?",
  };

  return (
    introducoes[professor.id] ||
    `Olá! Sou ${professor.nome}, seu assistente virtual. Como posso ajudar?`
  );
}

// =====================================================
// GERAR RESPOSTA
// =====================================================

function gerarResposta(mensagem, professor) {
  const texto = normalizar(mensagem);

  // -----------------------------------------------------
  // ANOS DO PROJETO
  // -----------------------------------------------------

  const ano = identificarAno(mensagem);

  if (
    ano !== null &&
    ano >= ANO_INICIAL &&
    ano <= ANO_FINAL
  ) {
    const eventos = acontecimentos[ano];

    return {
      texto:
        `📅 Vamos explorar ${ano}!\n\n` +
        `Nesse ano, nosso Instagram destaca:\n\n` +
        `1. ${eventos[0]}\n` +
        `2. ${eventos[1]}\n\n` +
        "Você pode visitar essas publicações pelo botão abaixo.",
      ano,
    };
  }

  if (ano !== null) {
    return {
      texto:
        `📅 O ano de ${ano} não faz parte da nossa linha do tempo.\n\n` +
        "Este projeto aborda os acontecimentos de 1997 a 2012.",
      ano: null,
    };
  }

  // -----------------------------------------------------
  // SAUDAÇÕES
  // -----------------------------------------------------

  if (
    /^(oi+|ola|opa|eae|e ai|bom dia|boa tarde|boa noite)[!?.\s]*$/.test(
      texto
    )
  ) {
    return {
      texto: mensagemInicial(professor),
      ano: null,
    };
  }

  // -----------------------------------------------------
  // AGRADECIMENTOS
  // -----------------------------------------------------

  if (contem(texto, ["obrigado", "obrigada", "valeu"])) {
    return {
      texto:
        "Por nada! 😊 Fico feliz em ajudar. Quer explorar outro assunto?",
      ano: null,
    };
  }

  // -----------------------------------------------------
  // RESPOSTAS DA DISCIPLINA
  // -----------------------------------------------------

  const bases = {
    bruna: respostasBruna,
    grace: respostasGrace,
    allan: respostasAllan,
  };

  const base = bases[professor.id] || [];

  // Priorizar temas mais específicos
  const respostaEspecializada = base.find((item) =>
    contem(texto, item.termos)
  );

  if (respostaEspecializada) {
    return {
      texto: respostaEspecializada.resposta,
      ano: null,
    };
  }

  // -----------------------------------------------------
  // VERBO TO BE — VARIAÇÕES
  // -----------------------------------------------------

  if (
    professor.id === "bruna" &&
    contem(texto, ["to be", "am is are"])
  ) {
    return {
      texto: respostasBruna.find((item) =>
        item.termos.includes("verb to be")
      ).resposta,
      ano: null,
    };
  }

  // -----------------------------------------------------
  // ASSUNTOS GERAIS
  // -----------------------------------------------------

  const geral = respostasGerais.find((item) =>
    contem(texto, item.termos)
  );

  if (geral) {
    return {
      texto: geral.resposta,
      ano: null,
    };
  }

  // -----------------------------------------------------
  // PERGUNTA SOBRE O PROFESSOR
  // -----------------------------------------------------

  if (
    contem(texto, [
      "quem e voce",
      "qual sua materia",
      "o que voce ensina",
      "quem e o professor",
      "quem e a professora",
    ])
  ) {
    return {
      texto:
        `Eu sou a versão virtual de ${professor.nome}! 😊\n\n` +
        `Minha área é ${professor.especialidade}.\n\n` +
        "Posso responder perguntas programadas sobre minha disciplina e ajudar você a explorar o Instagram Geração Z.",
      ano: null,
    };
  }

  // -----------------------------------------------------
  // RESPOSTA PADRÃO PERSONALIZADA
  // -----------------------------------------------------

  const respostasPadrao = {
    bruna:
      "🇬🇧 Ainda não tenho uma resposta preparada para essa pergunta.\n\n" +
      "Mas posso ajudar com:\n\n" +
      "• Verbo to be\n" +
      "• Simple Present e Simple Past\n" +
      "• Inglês na internet\n" +
      "• Vocabulário dos jogos\n\n" +
      "Experimente uma das sugestões abaixo!",
    grace:
      "🌍 Ainda não tenho uma resposta preparada para esse assunto.\n\n" +
      "Podemos explorar:\n\n" +
      "• Sociologia\n" +
      "• Globalização\n" +
      "• Guerras e crises históricas\n" +
      "• Cultura e sociedade\n" +
      "• Acontecimentos de 1997 a 2012",
    allan:
      "⚛️ Ainda não tenho uma explicação programada para essa pergunta.\n\n" +
      "Mas posso conversar sobre:\n\n" +
      "• Gravidade\n" +
      "• Leis de Newton\n" +
      "• Velocidade\n" +
      "• Energia\n" +
      "• Eletricidade\n" +
      "• Exploração espacial",
  };

  return {
    texto:
      respostasPadrao[professor.id] ||
      "Não encontrei uma resposta preparada. Experimente outro assunto!",
    ano: null,
  };
}

// =====================================================
// COMPONENTE PRINCIPAL
// =====================================================

function NPCChat({
  professor = professorPadrao,
  onClose,
  onNavigateYear,
}) {
  const [mensagens, setMensagens] = useState(() => [
    {
      id: 1,
      autor: "bot",
      texto: mensagemInicial(professor),
      ano: null,
    },
  ]);

  const [entrada, setEntrada] = useState("");

  const proximoId = useRef(2);
  const mensagensContainerRef = useRef(null);
  const inputRef = useRef(null);

  const cor = professor.cor || "#8b5cf6";

  const perguntasRapidas =
    sugestoes[professor.id] || [];

  // =====================================================
  // ROLAR MENSAGENS
  // =====================================================

  useEffect(() => {
    const container = mensagensContainerRef.current;

    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [mensagens]);

  // =====================================================
  // FOCAR O CAMPO DE TEXTO
  // =====================================================

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // =====================================================
  // NAVEGAR PARA AS PUBLICAÇÕES
  // =====================================================

  function navegarParaAno(ano) {
    if (typeof onNavigateYear !== "function") {
      return false;
    }

    return onNavigateYear(ano) === true;
  }

  // =====================================================
  // ADICIONAR MENSAGEM
  // =====================================================

  function adicionarMensagem(autor, texto, ano = null) {
    return {
      id: proximoId.current++,
      autor,
      texto,
      ano,
    };
  }

  // =====================================================
  // ENVIAR MENSAGEM
  // =====================================================

  function enviarMensagem(valor) {
    const mensagem = String(valor || "").trim();

    if (!mensagem) return;

    setEntrada("");

    const resposta = gerarResposta(mensagem, professor);

    // Comandos de navegação
    if (resposta.ano !== null && querNavegar(mensagem)) {
      const sucesso = navegarParaAno(resposta.ano);

      if (sucesso) {
        return;
      }
    }

    const novaMensagem = adicionarMensagem(
      "usuario",
      mensagem
    );

    const respostaBot = adicionarMensagem(
      "bot",
      resposta.texto,
      resposta.ano
    );

    setMensagens((anteriores) => [
      ...anteriores,
      novaMensagem,
      respostaBot,
    ]);
  }

  // =====================================================
  // BOTÃO DE VISITAR PUBLICAÇÕES
  // =====================================================

  function visitarAno(ano) {
    const sucesso = navegarParaAno(ano);

    if (!sucesso) {
      setMensagens((anteriores) => [
        ...anteriores,
        adicionarMensagem(
          "bot",
          "Não foi possível abrir essas publicações automaticamente. Utilize o filtro de anos do Instagram."
        ),
      ]);
    }
  }

  // =====================================================
  // CORES E ESTILOS
  // =====================================================

  const estilos = {
    janela: {
      width: "100%",
      height: "min(570px, 88dvh)",
      maxHeight: "100%",
      background: "#181623",
      border: `1px solid ${cor}`,
      borderRadius: "22px",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      color: "#ffffff",
      boxShadow: "0 24px 70px rgba(0,0,0,0.48)",
      fontFamily: "inherit",
      boxSizing: "border-box",
    },

    cabecalho: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "15px",
      flexShrink: 0,
      background: "#252133",
      borderBottom: `2px solid ${cor}`,
    },

    foto: {
      width: "52px",
      height: "52px",
      objectFit: "cover",
      objectPosition: "center 18%",
      borderRadius: "50%",
      border: `2px solid ${cor}`,
      background: "#e9e3f5",
      flexShrink: 0,
    },

    mensagens: {
      flex: 1,
      minHeight: 0,
      overflowY: "auto",
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      gap: "13px",
      overscrollBehavior: "contain",
    },

    sugestoes: {
      display: "flex",
      gap: "8px",
      padding: "11px",
      overflowX: "auto",
      borderTop: "1px solid #393448",
      flexShrink: 0,
    },

    formulario: {
      display: "flex",
      alignItems: "center",
      gap: "9px",
      padding: "12px",
      borderTop: "1px solid #393448",
      flexShrink: 0,
    },
  };

  // =====================================================
  // INTERFACE
  // =====================================================

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Chat com ${professor.nome}`}
      style={estilos.janela}
    >
      {/* ============================================
          CABEÇALHO
      ============================================ */}

      <header style={estilos.cabecalho}>
        <img
          src={professor.imagem}
          alt={`Avatar de ${professor.nome}`}
          style={estilos.foto}
        />

        <div style={{ flex: 1, minWidth: 0 }}>
          <strong
            style={{
              display: "block",
              fontSize: "15px",
              fontWeight: 800,
              marginBottom: "5px",
            }}
          >
            {professor.nome}
          </strong>

          <span
            style={{
              display: "block",
              color: "#beb7d0",
              fontSize: "11px",
            }}
          >
            {professor.especialidade}
          </span>

          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginTop: "6px",
              fontSize: "10px",
              color: "#9ee9c6",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#34d399",
              }}
            />
            Assistente virtual
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar conversa"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#fff",
            width: "35px",
            height: "35px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "24px",
          }}
        >
          ×
        </button>
      </header>

      {/* ============================================
          ÁREA DE MENSAGENS
      ============================================ */}

      <div
        ref={mensagensContainerRef}
        aria-live="polite"
        aria-relevant="additions"
        style={estilos.mensagens}
      >
        {mensagens.map((mensagem) => {
          const doUsuario = mensagem.autor === "usuario";

          return (
            <div
              key={mensagem.id}
              style={{
                alignSelf: doUsuario
                  ? "flex-end"
                  : "flex-start",
                maxWidth: "88%",
                minWidth: 0,
              }}
            >
              {!doUsuario && (
                <span
                  style={{
                    fontSize: "10px",
                    color: "#b5aec8",
                    display: "block",
                    marginBottom: "5px",
                    paddingLeft: "5px",
                  }}
                >
                  {professor.nome}
                </span>
              )}

              <div
                style={{
                  background: doUsuario ? cor : "#302c3f",
                  padding: "12px 14px",
                  borderRadius: doUsuario
                    ? "16px 16px 4px 16px"
                    : "16px 16px 16px 4px",
                  fontSize: "13px",
                  lineHeight: 1.65,
                  whiteSpace: "pre-wrap",
                  overflowWrap: "anywhere",
                  boxShadow: "0 3px 12px rgba(0,0,0,0.1)",
                }}
              >
                {mensagem.texto}

                {!doUsuario &&
                  mensagem.ano !== null && (
                    <button
                      type="button"
                      onClick={() => visitarAno(mensagem.ano)}
                      style={{
                        width: "100%",
                        display: "block",
                        marginTop: "14px",
                        padding: "11px",
                        border: 0,
                        borderRadius: "10px",
                        background: cor,
                        color: "#ffffff",
                        fontWeight: 800,
                        fontSize: "12px",
                        cursor: "pointer",
                      }}
                    >
                      📸 Ver publicações de {mensagem.ano}
                    </button>
                  )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ============================================
          SUGESTÕES RÁPIDAS
      ============================================ */}

      <div
        style={estilos.sugestoes}
        aria-label="Sugestões de perguntas"
      >
        {perguntasRapidas.map((sugestao) => (
          <button
            key={sugestao.label}
            type="button"
            onClick={() =>
              enviarMensagem(sugestao.mensagem)
            }
            style={{
              flexShrink: 0,
              padding: "9px 12px",
              borderRadius: "20px",
              background: "#312b40",
              border: `1px solid ${cor}80`,
              color: "#f1e9ff",
              cursor: "pointer",
              fontSize: "11px",
              fontWeight: 600,
            }}
          >
            {sugestao.label}
          </button>
        ))}
      </div>

      {/* ============================================
          CAMPO DE DIGITAÇÃO
      ============================================ */}

      <form
        style={estilos.formulario}
        onSubmit={(event) => {
          event.preventDefault();
          enviarMensagem(entrada);
        }}
      >
        <input
          ref={inputRef}
          type="text"
          value={entrada}
          onChange={(event) =>
            setEntrada(event.target.value)
          }
          placeholder="Escreva sua pergunta..."
          aria-label={`Enviar mensagem para ${professor.nome}`}
          maxLength={400}
          style={{
            flex: 1,
            minWidth: 0,
            padding: "12px",
            background: "#292535",
            border: "1px solid #4a425a",
            borderRadius: "12px",
            color: "#ffffff",
            fontSize: "13px",
            outlineColor: cor,
            fontFamily: "inherit",
          }}
        />

        <button
          type="submit"
          disabled={!entrada.trim()}
          style={{
            padding: "12px 16px",
            borderRadius: "12px",
            border: 0,
            background: cor,
            color: "#ffffff",
            fontWeight: 800,
            fontSize: "12px",
            cursor: entrada.trim()
              ? "pointer"
              : "not-allowed",
            opacity: entrada.trim() ? 1 : 0.5,
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default NPCChat;
