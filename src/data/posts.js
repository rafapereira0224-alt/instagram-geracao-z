
/* =========================================
   INSTAGRAM GERAÇÃO Z
   32 ACONTECIMENTOS — 1997 A 2012

   Ordem: mais recente para mais antigo

   Imagens:
   public/posts/nome-do-arquivo.jpg
========================================= */

const rawPostsData = [
  // =====================================
  // 2012
  // =====================================

  {
    id: 1,
    title: 'Gangnam Style faz história',
    year: '2012',
    date: '2012-12-21',
    category: 'Música e Internet',
    image: '/posts/gangnam-style-2012.jpg',
    caption:
      '🎵 GANGNAM STYLE: UM FENÔMENO MUNDIAL!\n\n' +
      '📅 Em 21 de dezembro de 2012, Gangnam Style, do artista sul-coreano PSY, tornou-se o primeiro vídeo do YouTube a alcançar 1 bilhão de visualizações.\n\n' +
      '🌎 A música conquistou o mundo com sua coreografia e demonstrou o poder da internet para transformar uma produção musical em um fenômeno internacional.\n\n' +
      '💡 CURIOSIDADE: O sucesso foi tão grande que o YouTube precisou atualizar seu contador de visualizações anos depois.\n\n' +
      '✨ IMPACTO: Gangnam Style ajudou a abrir espaço para a popularização internacional do K-pop e mostrou a força dos vídeos virais.\n\n' +
      '#GeracaoZ #GangnamStyle #YouTube #Kpop',
    likes: 12842,
  },

  {
    id: 2,
    title: 'Curiosity chega a Marte',
    year: '2012',
    date: '2012-08-06',
    category: 'Ciência e Tecnologia',
    image: '/posts/curiosity-2012.jpg',
    caption:
      '🚀 A HUMANIDADE EXPLORA MARTE!\n\n' +
      '📅 Em 6 de agosto de 2012, no horário UTC, o robô Curiosity da NASA pousou com sucesso na superfície de Marte.\n\n' +
      '🔬 Sua missão era investigar as condições ambientais do planeta e descobrir se Marte já poderia ter oferecido condições adequadas à vida microbiana.\n\n' +
      '🪐 Equipado com câmeras e instrumentos científicos, o robô passou a estudar rochas, solo e a atmosfera marciana.\n\n' +
      '💡 CURIOSIDADE: O pouso utilizou um sistema chamado Sky Crane, que baixou o robô até a superfície por cabos.\n\n' +
      '✨ IMPACTO: A missão ampliou nosso conhecimento sobre Marte e inspirou novas gerações a estudar ciência e exploração espacial.\n\n' +
      '#GeracaoZ #NASA #Marte #Curiosity #Ciencia',
    likes: 9342,
  },

  // =====================================
  // 2011
  // =====================================

  {
    id: 3,
    title: 'O nascimento do Snapchat',
    year: '2011',
    date: '2011-09-01',
    category: 'Redes Sociais',
    image: '/posts/snapchat-2011.jpg',
    caption:
      '👻 SNAPCHAT: AS MENSAGENS QUE DESAPARECEM!\n\n' +
      '📅 Em 2011, surgiu o Snapchat, aplicativo que ganhou destaque por permitir o envio de fotografias e mensagens temporárias.\n\n' +
      '📱 A proposta era tornar a comunicação mais espontânea, com conteúdos que não permaneceriam disponíveis indefinidamente.\n\n' +
      '🌎 O aplicativo conquistou muitos jovens e popularizou formatos que influenciaram outras redes sociais.\n\n' +
      '💡 CURIOSIDADE: Antes de receber o nome Snapchat, o projeto foi chamado Picaboo.\n\n' +
      '✨ IMPACTO: Recursos como filtros, mensagens efêmeras e Stories ajudaram a transformar a comunicação digital.\n\n' +
      '#GeracaoZ #Snapchat #RedesSociais',
    likes: 8431,
  },

  {
    id: 4,
    title: 'O desastre de Fukushima',
    year: '2011',
    date: '2011-03-11',
    category: 'História Mundial',
    image: '/posts/fukushima-2011.jpg',
    caption:
      '🌊 O TERREMOTO QUE MARCOU O JAPÃO!\n\n' +
      '📅 Em 11 de março de 2011, um terremoto de magnitude 9,0 atingiu a região nordeste do Japão.\n\n' +
      '🌊 O tremor provocou um tsunami devastador, responsável por milhares de mortes e enorme destruição.\n\n' +
      '☢️ O desastre também comprometeu os sistemas de resfriamento da usina nuclear de Fukushima Daiichi, provocando um grave acidente nuclear.\n\n' +
      '🌎 O acontecimento provocou debates internacionais sobre prevenção de desastres e segurança nuclear.\n\n' +
      '✨ IMPACTO: A tragédia levou países a revisar políticas de proteção civil e segurança energética.\n\n' +
      '#GeracaoZ #Japao #Fukushima #Historia',
    likes: 7830,
  },

  // =====================================
  // 2010
  // =====================================

  {
    id: 5,
    title: 'O início da Primavera Árabe',
    year: '2010',
    date: '2010-12-17',
    category: 'História e Política',
    image: '/posts/primavera-arabe-2010.jpg',
    caption:
      '🌍 A PRIMAVERA ÁRABE!\n\n' +
      '📅 Em dezembro de 2010, protestos começaram na Tunísia após um episódio envolvendo o vendedor ambulante Mohamed Bouazizi.\n\n' +
      '✊ As manifestações denunciaram problemas como desemprego, corrupção e autoritarismo.\n\n' +
      '🌎 Nos meses seguintes, movimentos semelhantes ocorreram em diversos países do Norte da África e do Oriente Médio.\n\n' +
      '📱 Redes sociais e celulares tiveram importância na divulgação das manifestações e no compartilhamento de informações.\n\n' +
      '✨ IMPACTO: A Primavera Árabe provocou mudanças políticas profundas, mas também conflitos e consequências complexas em diferentes países.\n\n' +
      '#GeracaoZ #PrimaveraArabe #Historia',
    likes: 6290,
  },

  {
    id: 6,
    title: 'O nascimento do Instagram',
    year: '2010',
    date: '2010-10-06',
    category: 'Redes Sociais',
    image: '/posts/instagram-2010.jpg',
    caption:
      '📸 NASCE UMA DAS MAIORES REDES SOCIAIS!\n\n' +
      '📅 Em 6 de outubro de 2010, Kevin Systrom e Mike Krieger lançaram o Instagram para iPhone.\n\n' +
      '📱 Inicialmente, o aplicativo era focado no compartilhamento de fotografias com filtros digitais.\n\n' +
      '🌎 Com o passar dos anos, a plataforma incorporou vídeos, Stories, Reels e diversas outras funcionalidades.\n\n' +
      '💡 CURIOSIDADE: Em 2012, o Facebook anunciou a compra do Instagram por aproximadamente 1 bilhão de dólares.\n\n' +
      '✨ IMPACTO: O Instagram transformou a comunicação visual, o marketing digital e a maneira como jovens compartilham experiências.\n\n' +
      '#GeracaoZ #Instagram #Tecnologia',
    likes: 11320,
  },

  // =====================================
  // 2009
  // =====================================

  {
    id: 7,
    title: 'A pandemia de H1N1',
    year: '2009',
    date: '2009-06-11',
    category: 'Saúde e História',
    image: '/posts/h1n1-2009.jpg',
    caption:
      '🦠 A PANDEMIA DE GRIPE H1N1!\n\n' +
      '📅 Em 11 de junho de 2009, a Organização Mundial da Saúde declarou a pandemia de influenza A(H1N1).\n\n' +
      '🌎 O vírus se espalhou por diversos países e provocou uma grande mobilização dos sistemas de saúde.\n\n' +
      '🏥 Governos e profissionais de saúde adotaram estratégias de prevenção, vigilância e vacinação.\n\n' +
      '💡 CURIOSIDADE: O vírus ficou popularmente conhecido como gripe suína, embora a transmissão entre pessoas fosse o principal fator de propagação.\n\n' +
      '✨ IMPACTO: O episódio trouxe aprendizados importantes para a preparação diante de futuras pandemias.\n\n' +
      '#GeracaoZ #H1N1 #Historia #Saude',
    likes: 6842,
  },

  {
    id: 8,
    title: 'O nascimento do Minecraft',
    year: '2009',
    date: '2009-05-17',
    category: 'Games',
    image: '/posts/minecraft-2009.jpg',
    caption:
      '🎮 MINECRAFT: UM MUNDO DE POSSIBILIDADES!\n\n' +
      '📅 Em 17 de maio de 2009, uma versão inicial pública de Minecraft foi disponibilizada pelo desenvolvedor Markus Persson, conhecido como Notch.\n\n' +
      '🧱 O jogo apresentou um universo formado por blocos, permitindo construir, explorar e experimentar diferentes ideias.\n\n' +
      '🌎 Com o tempo, Minecraft conquistou milhões de jogadores e se tornou um fenômeno da cultura dos videogames.\n\n' +
      '💡 CURIOSIDADE: O lançamento completo do jogo aconteceu em 2011.\n\n' +
      '✨ IMPACTO: Minecraft influenciou a criatividade, o desenvolvimento de comunidades online e até atividades educacionais.\n\n' +
      '#GeracaoZ #Minecraft #Games',
    likes: 15420,
  },

  // =====================================
  // 2008
  // =====================================

  {
    id: 9,
    title: 'Barack Obama é eleito',
    year: '2008',
    date: '2008-11-04',
    category: 'História e Política',
    image: '/posts/obama-2008.jpg',
    caption:
      '🇺🇸 UMA ELEIÇÃO HISTÓRICA!\n\n' +
      '📅 Em 4 de novembro de 2008, Barack Obama foi eleito presidente dos Estados Unidos.\n\n' +
      '🌎 Sua vitória marcou a história por torná-lo o primeiro afro-americano eleito para a presidência do país.\n\n' +
      '📱 Sua campanha também ganhou destaque pelo uso da internet e de ferramentas digitais para mobilizar eleitores.\n\n' +
      '💡 CURIOSIDADE: Obama assumiu oficialmente a presidência em 20 de janeiro de 2009.\n\n' +
      '✨ IMPACTO: A eleição marcou debates sobre representação, participação política e novas estratégias de comunicação.\n\n' +
      '#GeracaoZ #Obama #Historia',
    likes: 8740,
  },

  {
    id: 10,
    title: 'A crise financeira mundial',
    year: '2008',
    date: '2008-09-15',
    category: 'Economia e História',
    image: '/posts/crise-2008.jpg',
    caption:
      '📉 A CRISE ECONÔMICA DE 2008!\n\n' +
      '📅 Em setembro de 2008, a falência do banco Lehman Brothers marcou uma fase crítica da crise financeira mundial.\n\n' +
      '🏦 A crise teve relação com o mercado imobiliário dos Estados Unidos e com problemas no sistema financeiro.\n\n' +
      '🌎 Seus efeitos atingiram empresas, trabalhadores e economias de diversos países.\n\n' +
      '💡 CURIOSIDADE: O colapso ajudou a provocar uma das maiores recessões econômicas desde a Grande Depressão.\n\n' +
      '✨ IMPACTO: A crise influenciou políticas econômicas, a regulação bancária e as oportunidades de trabalho de muitas famílias.\n\n' +
      '#GeracaoZ #Economia #Crise2008',
    likes: 7320,
  },

  // =====================================
  // 2007
  // =====================================

  {
    id: 11,
    title: 'O primeiro iPhone',
    year: '2007',
    date: '2007-06-29',
    category: 'Tecnologia',
    image: '/posts/iphone-2007.jpg',
    caption:
      '📱 O IPHONE TRANSFORMA OS SMARTPHONES!\n\n' +
      '📅 Em 9 de janeiro de 2007, Steve Jobs apresentou o primeiro iPhone. O aparelho começou a ser vendido em 29 de junho daquele ano.\n\n' +
      '🍎 O dispositivo reuniu telefone, reprodução de músicas e navegação na internet em uma interface multitoque.\n\n' +
      '🌎 Seu lançamento influenciou o desenvolvimento dos smartphones modernos e de aplicativos para dispositivos móveis.\n\n' +
      '💡 CURIOSIDADE: O primeiro iPhone não possuía a App Store, que seria lançada em 2008.\n\n' +
      '✨ IMPACTO: A evolução dos smartphones transformou a comunicação, os estudos e o entretenimento da Geração Z.\n\n' +
      '#GeracaoZ #iPhone #Apple #Tecnologia',
    likes: 14200,
  },

  {
    id: 12,
    title: 'Netflix começa o streaming',
    year: '2007',
    date: '2007-01-16',
    category: 'Tecnologia e Entretenimento',
    image: '/posts/netflix-streaming-2007.jpg',
    caption:
      '🎬 A NETFLIX ENTRA NA ERA DO STREAMING!\n\n' +
      '📅 Em janeiro de 2007, a Netflix começou a disponibilizar seu serviço de filmes e séries pela internet nos Estados Unidos.\n\n' +
      '💻 Antes disso, a empresa era conhecida principalmente pelo aluguel de DVDs enviados pelo correio.\n\n' +
      '🌎 O novo modelo permitiu assistir a conteúdos sem esperar a chegada de um disco físico.\n\n' +
      '💡 CURIOSIDADE: No início, o catálogo de streaming era bem menor do que o catálogo de DVDs.\n\n' +
      '✨ IMPACTO: O streaming mudou gradualmente a maneira como as pessoas consomem filmes e séries.\n\n' +
      '#GeracaoZ #Netflix #Streaming',
    likes: 10820,
  },

  // =====================================
  // 2006
  // =====================================

  {
    id: 13,
    title: 'O lançamento do Nintendo Wii',
    year: '2006',
    date: '2006-11-19',
    category: 'Games',
    image: '/posts/nintendo-wii-2006.jpg',
    caption:
      '🎮 NINTENDO WII: JOGAR EM MOVIMENTO!\n\n' +
      '📅 Em 19 de novembro de 2006, a Nintendo lançou o Wii nos Estados Unidos.\n\n' +
      '🕹️ O console chamou a atenção pelos controles capazes de detectar movimentos dos jogadores.\n\n' +
      '👨‍👩‍👧‍👦 Jogos como Wii Sports ajudaram a aproximar pessoas de diferentes idades dos videogames.\n\n' +
      '💡 CURIOSIDADE: O Wii conquistou um público muito além dos jogadores tradicionais.\n\n' +
      '✨ IMPACTO: O console contribuiu para popularizar experiências interativas e jogos em família.\n\n' +
      '#GeracaoZ #Nintendo #Wii #Games',
    likes: 12300,
  },

  {
    id: 14,
    title: 'O nascimento do Twitter',
    year: '2006',
    date: '2006-03-21',
    category: 'Redes Sociais',
    image: '/posts/twitter-2006.jpg',
    caption:
      '🐦 TWITTER: MENSAGENS CURTAS, IMPACTO GIGANTE!\n\n' +
      '📅 Em 21 de março de 2006, Jack Dorsey publicou a primeira mensagem no serviço que viria a ser conhecido como Twitter.\n\n' +
      '💬 A plataforma ficou conhecida por permitir publicações curtas e rápidas.\n\n' +
      '🌎 Com o tempo, passou a desempenhar um papel importante na divulgação de notícias, debates e acontecimentos mundiais.\n\n' +
      '💡 CURIOSIDADE: O Twitter passou a utilizar o nome X em 2023.\n\n' +
      '✨ IMPACTO: A rede transformou a comunicação em tempo real e influenciou a forma como notícias circulam pela internet.\n\n' +
      '#GeracaoZ #Twitter #RedesSociais',
    likes: 9210,
  },

  // =====================================
  // 2005
  // =====================================

  {
    id: 15,
    title: 'O furacão Katrina',
    year: '2005',
    date: '2005-08-29',
    category: 'História Mundial',
    image: '/posts/katrina-2005.jpg',
    caption:
      '🌪️ O FURACÃO KATRINA!\n\n' +
      '📅 Em 29 de agosto de 2005, o furacão Katrina atingiu a costa do Golfo dos Estados Unidos.\n\n' +
      '🌊 A cidade de Nova Orleans sofreu inundações devastadoras após falhas em sistemas de proteção contra enchentes.\n\n' +
      '🏘️ O desastre provocou numerosas mortes, deslocamento de moradores e prejuízos econômicos enormes.\n\n' +
      '🌎 A tragédia também revelou problemas sociais e dificuldades na resposta às emergências.\n\n' +
      '✨ IMPACTO: O acontecimento ampliou debates sobre infraestrutura, desigualdade social e preparação para desastres naturais.\n\n' +
      '#GeracaoZ #Katrina #Historia',
    likes: 5960,
  },

  {
    id: 16,
    title: 'A fundação do YouTube',
    year: '2005',
    date: '2005-02-14',
    category: 'Internet e Tecnologia',
    image: '/posts/youtube-2005.jpg',
    caption:
      '▶️ NASCE O YOUTUBE!\n\n' +
      '📅 Em fevereiro de 2005, Chad Hurley, Steve Chen e Jawed Karim fundaram o YouTube.\n\n' +
      '💻 A plataforma facilitou o compartilhamento de vídeos pela internet e abriu espaço para diferentes tipos de conteúdo.\n\n' +
      '🎥 O primeiro vídeo publicado foi Me at the zoo, enviado por Jawed Karim em abril de 2005.\n\n' +
      '💡 CURIOSIDADE: O Google comprou o YouTube em 2006.\n\n' +
      '✨ IMPACTO: A plataforma transformou o entretenimento, a educação e o surgimento de criadores de conteúdo digitais.\n\n' +
      '#GeracaoZ #YouTube #Internet',
    likes: 15320,
  },

  // =====================================
  // 2004
  // =====================================

  {
    id: 17,
    title: 'O tsunami no Oceano Índico',
    year: '2004',
    date: '2004-12-26',
    category: 'História Mundial',
    image: '/posts/tsunami-2004.jpg',
    caption:
      '🌊 UMA DAS MAIORES TRAGÉDIAS NATURAIS!\n\n' +
      '📅 Em 26 de dezembro de 2004, um terremoto submarino de magnitude aproximada de 9,1 ocorreu próximo à ilha de Sumatra, na Indonésia.\n\n' +
      '🌎 O terremoto provocou um tsunami que atingiu diversos países banhados pelo Oceano Índico.\n\n' +
      '🕊️ Mais de 200 mil pessoas perderam a vida, e milhões foram afetadas.\n\n' +
      '💡 CURIOSIDADE: O desastre impulsionou melhorias nos sistemas de alerta de tsunamis da região.\n\n' +
      '✨ IMPACTO: O acontecimento mostrou a importância da cooperação internacional e da prevenção de desastres.\n\n' +
      '#GeracaoZ #Tsunami #Historia',
    likes: 6410,
  },

  {
    id: 18,
    title: 'A criação do Facebook',
    year: '2004',
    date: '2004-02-04',
    category: 'Redes Sociais',
    image: '/posts/facebook-2004.jpg',
    caption:
      '🌐 NASCE O FACEBOOK!\n\n' +
      '📅 Em 4 de fevereiro de 2004, Mark Zuckerberg e outros estudantes de Harvard lançaram o TheFacebook.\n\n' +
      '💻 Inicialmente, a plataforma era voltada a estudantes universitários.\n\n' +
      '🌎 Com sua expansão, tornou-se uma das maiores redes sociais do mundo.\n\n' +
      '💡 CURIOSIDADE: O nome original da plataforma era TheFacebook, antes de ser simplificado.\n\n' +
      '✨ IMPACTO: O Facebook influenciou profundamente a comunicação digital, a divulgação de notícias e os relacionamentos online.\n\n' +
      '#GeracaoZ #Facebook #Internet',
    likes: 10350,
  },

  // =====================================
  // 2003
  // =====================================

  {
    id: 19,
    title: 'O nascimento do MySpace',
    year: '2003',
    date: '2003-08-01',
    category: 'Internet e Cultura',
    image: '/posts/myspace-2003.jpg',
    caption:
      '🌐 MYSPACE: A REDE SOCIAL DOS ANOS 2000!\n\n' +
      '📅 Em 2003, surgiu o MySpace, uma das plataformas mais populares da primeira fase das redes sociais.\n\n' +
      '🎵 Os usuários podiam personalizar seus perfis, compartilhar músicas e interagir com amigos.\n\n' +
      '🌎 A plataforma ganhou importância especialmente entre músicos e jovens.\n\n' +
      '💡 CURIOSIDADE: Muitos artistas divulgaram suas músicas pelo MySpace antes de conquistar reconhecimento mundial.\n\n' +
      '✨ IMPACTO: A rede ajudou a estabelecer práticas que se tornariam comuns nas plataformas sociais posteriores.\n\n' +
      '#GeracaoZ #MySpace #Internet',
    likes: 7230,
  },

  {
    id: 20,
    title: 'O início da Guerra do Iraque',
    year: '2003',
    date: '2003-03-20',
    category: 'História e Política',
    image: '/posts/iraque-2003.jpg',
    caption:
      '🌍 A GUERRA DO IRAQUE!\n\n' +
      '📅 Em março de 2003, uma coalizão liderada pelos Estados Unidos iniciou uma invasão do Iraque.\n\n' +
      '⚔️ O governo americano justificou a operação, entre outros argumentos, alegando a existência de armas de destruição em massa, cujos estoques declarados não foram encontrados posteriormente.\n\n' +
      '🌎 A invasão provocou a queda do governo de Saddam Hussein, mas também deu início a anos de conflitos e instabilidade.\n\n' +
      '🕊️ A guerra teve consequências humanas, econômicas e políticas profundas.\n\n' +
      '✨ IMPACTO: O conflito influenciou as relações internacionais e os debates sobre intervenções militares.\n\n' +
      '#GeracaoZ #Iraque #Historia',
    likes: 5840,
  },

  // =====================================
  // 2002
  // =====================================

  {
    id: 21,
    title: 'O pentacampeonato do Brasil',
    year: '2002',
    date: '2002-06-30',
    category: 'Esportes e História',
    image: '/posts/brasil-penta-2002.jpg',
    caption:
      '🇧🇷 É PENTA! O BRASIL CAMPEÃO DO MUNDO!\n\n' +
      '📅 Em 30 de junho de 2002, a Seleção Brasileira conquistou seu quinto título da Copa do Mundo.\n\n' +
      '⚽ Na final disputada no Japão, o Brasil venceu a Alemanha por 2 a 0, com dois gols de Ronaldo.\n\n' +
      '🏆 A equipe contava com jogadores como Rivaldo, Ronaldinho Gaúcho, Cafu e Roberto Carlos.\n\n' +
      '💡 CURIOSIDADE: Ronaldo terminou a competição como artilheiro, com oito gols.\n\n' +
      '✨ IMPACTO: O pentacampeonato tornou-se um dos momentos mais marcantes da história esportiva brasileira.\n\n' +
      '#GeracaoZ #Brasil #Copa2002 #Penta',
    likes: 18720,
  },

  {
    id: 22,
    title: 'O euro entra em circulação',
    year: '2002',
    date: '2002-01-01',
    category: 'Economia e História',
    image: '/posts/euro-2002.jpg',
    caption:
      '💶 UMA NOVA MOEDA PARA A EUROPA!\n\n' +
      '📅 Em 1º de janeiro de 2002, notas e moedas de euro entraram em circulação em 12 países europeus.\n\n' +
      '🌍 O euro já existia desde 1999 como moeda utilizada em operações financeiras e registros contábeis.\n\n' +
      '🏦 A chegada do dinheiro físico marcou uma nova etapa da integração econômica europeia.\n\n' +
      '💡 CURIOSIDADE: Os países participantes substituíram moedas tradicionais, como o franco francês e o marco alemão.\n\n' +
      '✨ IMPACTO: A moeda facilitou transações comerciais e viagens entre países participantes.\n\n' +
      '#GeracaoZ #Euro #Economia #Europa',
    likes: 6940,
  },

  // =====================================
  // 2001
  // =====================================

  {
    id: 23,
    title: 'Os atentados de 11 de setembro',
    year: '2001',
    date: '2001-09-11',
    category: 'História Mundial',
    image: '/posts/11-setembro-2001.jpg',
    caption:
      '🕊️ 11 DE SETEMBRO DE 2001!\n\n' +
      '📅 Em 11 de setembro de 2001, os Estados Unidos sofreram ataques terroristas coordenados pela organização Al-Qaeda.\n\n' +
      '🏙️ Aviões sequestrados atingiram as Torres Gêmeas do World Trade Center, em Nova York, e o Pentágono, próximo a Washington.\n\n' +
      '🌎 Outro avião caiu na Pensilvânia após a reação de passageiros e tripulantes.\n\n' +
      '🕊️ Quase 3 mil vítimas morreram nos ataques.\n\n' +
      '✨ IMPACTO: O acontecimento transformou políticas de segurança, relações internacionais e a história do início do século XXI.\n\n' +
      '#GeracaoZ #11DeSetembro #Historia',
    likes: 9200,
  },

  {
    id: 24,
    title: 'A criação da Wikipédia',
    year: '2001',
    date: '2001-01-15',
    category: 'Internet e Educação',
    image: '/posts/wikipedia-2001.jpg',
    caption:
      '📚 WIKIPÉDIA: O CONHECIMENTO COLABORATIVO!\n\n' +
      '📅 Em 15 de janeiro de 2001, Jimmy Wales e Larry Sanger lançaram a Wikipédia.\n\n' +
      '🌎 A enciclopédia online permitiu que pessoas colaborassem na criação e edição de artigos sobre diversos assuntos.\n\n' +
      '💻 O projeto cresceu e passou a oferecer conteúdos em centenas de idiomas.\n\n' +
      '💡 CURIOSIDADE: A Wikipédia é mantida principalmente por uma comunidade de colaboradores voluntários.\n\n' +
      '✨ IMPACTO: A plataforma facilitou o acesso à informação e ampliou debates sobre fontes confiáveis e pesquisa na internet.\n\n' +
      '#GeracaoZ #Wikipedia #Educacao',
    likes: 8740,
  },

  // =====================================
  // 2000
  // =====================================

  {
    id: 25,
    title: 'O estouro da bolha da internet',
    year: '2000',
    date: '2000-03-10',
    category: 'Economia e Tecnologia',
    image: '/posts/bolha-internet-2000.jpg',
    caption:
      '📉 A BOLHA DAS PONTOCOM!\n\n' +
      '📅 Em março de 2000, o índice Nasdaq atingiu um pico e iniciou uma forte queda, simbolizando o estouro da bolha das empresas de internet.\n\n' +
      '💻 Durante os anos anteriores, investidores haviam apostado grandes quantias em empresas ligadas à nova economia digital.\n\n' +
      '🏦 Muitas dessas empresas não conseguiam gerar lucros suficientes para justificar suas avaliações de mercado.\n\n' +
      '🌎 A queda provocou falências, perdas financeiras e mudanças no setor de tecnologia.\n\n' +
      '✨ IMPACTO: O episódio mostrou a importância de avaliar os fundamentos econômicos de empresas e investimentos.\n\n' +
      '#GeracaoZ #Economia #Internet',
    likes: 6340,
  },

  {
    id: 26,
    title: 'O lançamento do PlayStation 2',
    year: '2000',
    date: '2000-03-04',
    category: 'Games',
    image: '/posts/playstation2-2000.jpg',
    caption:
      '🎮 PLAYSTATION 2: UM CONSOLE LENDÁRIO!\n\n' +
      '📅 Em 4 de março de 2000, a Sony lançou o PlayStation 2 no Japão.\n\n' +
      '🕹️ O videogame conquistou jogadores com um grande catálogo de jogos, gráficos avançados para a época e reprodução de DVDs.\n\n' +
      '🌎 Títulos como GTA: San Andreas, God of War e Gran Turismo 4 marcaram sua trajetória.\n\n' +
      '💡 CURIOSIDADE: O PlayStation 2 vendeu mais de 160 milhões de unidades mundialmente.\n\n' +
      '✨ IMPACTO: O console marcou a infância de milhões de jogadores e ajudou a popularizar os videogames como entretenimento de massa.\n\n' +
      '#GeracaoZ #PlayStation2 #PS2 #Games',
    likes: 19650,
  },

  // =====================================
  // 1999
  // =====================================

  {
    id: 27,
    title: 'O surgimento do Napster',
    year: '1999',
    date: '1999-06-01',
    category: 'Música e Tecnologia',
    image: '/posts/napster-1999.jpg',
    caption:
      '🎵 NAPSTER: A REVOLUÇÃO DA MÚSICA DIGITAL!\n\n' +
      '📅 Em 1999, Shawn Fanning e Sean Parker participaram da criação do Napster, serviço de compartilhamento de músicas pela internet.\n\n' +
      '💻 A plataforma permitia que usuários encontrassem e transferissem arquivos musicais entre computadores.\n\n' +
      '⚖️ O serviço enfrentou processos judiciais por violações de direitos autorais e acabou encerrando sua operação original.\n\n' +
      '🌎 Mesmo assim, sua popularidade mostrou que o mercado musical estava passando por uma grande transformação.\n\n' +
      '✨ IMPACTO: O Napster ajudou a abrir debates que influenciaram a evolução da distribuição digital de músicas.\n\n' +
      '#GeracaoZ #Napster #Musica',
    likes: 7540,
  },

  {
    id: 28,
    title: 'O lançamento de Matrix',
    year: '1999',
    date: '1999-03-31',
    category: 'Cinema e Cultura',
    image: '/posts/matrix-1999.jpg',
    caption:
      '💊 MATRIX: O QUE É REAL?\n\n' +
      '📅 Em 31 de março de 1999, Matrix estreou nos cinemas dos Estados Unidos.\n\n' +
      '🎬 Dirigido pelas irmãs Wachowski, o filme apresentou uma história envolvendo simulações digitais, inteligência artificial e o questionamento da realidade.\n\n' +
      '💻 Seus efeitos visuais e cenas de ação influenciaram produções cinematográficas posteriores.\n\n' +
      '💡 CURIOSIDADE: A técnica conhecida como bullet time tornou-se uma das marcas mais famosas do filme.\n\n' +
      '✨ IMPACTO: Matrix marcou a cultura pop e estimulou debates sobre tecnologia, liberdade e percepção da realidade.\n\n' +
      '#GeracaoZ #Matrix #Cinema',
    likes: 13240,
  },

  // =====================================
  // 1998
  // =====================================

  {
    id: 29,
    title: 'A fundação do Google',
    year: '1998',
    date: '1998-09-04',
    category: 'Internet e Tecnologia',
    image: '/posts/google-1998.jpg',
    caption:
      '🔎 GOOGLE: A REVOLUÇÃO DAS BUSCAS!\n\n' +
      '📅 Em 4 de setembro de 1998, Larry Page e Sergey Brin fundaram oficialmente o Google.\n\n' +
      '💻 O projeto nasceu de pesquisas desenvolvidas na Universidade Stanford e tinha como objetivo organizar informações da internet.\n\n' +
      '🌎 O mecanismo de busca ganhou popularidade por sua capacidade de encontrar páginas relevantes.\n\n' +
      '💡 CURIOSIDADE: O projeto de pesquisa que deu origem ao Google tinha o nome BackRub.\n\n' +
      '✨ IMPACTO: O Google transformou a maneira como estudantes, profissionais e usuários encontram informações na internet.\n\n' +
      '#GeracaoZ #Google #Tecnologia',
    likes: 14820,
  },

  {
    id: 30,
    title: 'O lançamento do Windows 98',
    year: '1998',
    date: '1998-06-25',
    category: 'Tecnologia',
    image: '/posts/windows98-1998.jpg',
    caption:
      '💻 WINDOWS 98: UMA NOVA ERA DOS COMPUTADORES!\n\n' +
      '📅 Em 25 de junho de 1998, a Microsoft lançou o Windows 98.\n\n' +
      '🖥️ O sistema trouxe melhorias na integração com a internet, no suporte a dispositivos USB e no gerenciamento de arquivos.\n\n' +
      '🌐 O Internet Explorer e diferentes recursos de navegação ajudaram a aproximar a experiência do computador da internet.\n\n' +
      '💡 CURIOSIDADE: O Windows 98 ficou associado a uma época em que a internet discada era comum em muitos computadores domésticos.\n\n' +
      '✨ IMPACTO: O sistema participou da popularização da informática pessoal e dos primeiros contatos de muitas famílias com computadores conectados.\n\n' +
      '#GeracaoZ #Windows98 #Microsoft',
    likes: 12450,
  },

  // =====================================
  // 1997
  // =====================================

  {
    id: 31,
    title: 'O nascimento da Netflix',
    year: '1997',
    date: '1997-08-29',
    category: 'Tecnologia e Entretenimento',
    image: '/posts/netflix-1997.jpg',
    caption:
      '📀 NETFLIX: DE DVDs PELO CORREIO AO STREAMING!\n\n' +
      '📅 Em 29 de agosto de 1997, Reed Hastings e Marc Randolph fundaram a Netflix nos Estados Unidos.\n\n' +
      '🎬 Em 1998, a empresa lançou seu serviço de aluguel de DVDs pela internet, com entregas pelo correio.\n\n' +
      '💻 Em 2007, a Netflix começou a oferecer streaming, dando início a uma nova fase de sua história.\n\n' +
      '💡 CURIOSIDADE: A Netflix foi fundada antes mesmo do Google, criado em 1998.\n\n' +
      '✨ IMPACTO: A empresa participou da transformação da distribuição e do consumo de filmes e séries.\n\n' +
      '#GeracaoZ #Netflix #Historia',
    likes: 8997,
  },

  {
    id: 32,
    title: 'O nascimento de Harry Potter',
    year: '1997',
    date: '1997-06-26',
    category: 'Literatura e Cultura',
    image: '/posts/harry-potter-1997.jpg',
    caption:
      '⚡ HARRY POTTER: O INÍCIO DE UMA SAGA MÁGICA!\n\n' +
      '📅 Em 26 de junho de 1997, a escritora J. K. Rowling publicou no Reino Unido o primeiro livro da série Harry Potter.\n\n' +
      '📚 Harry Potter e a Pedra Filosofal apresentou ao mundo um jovem bruxo que descobre sua ligação com Hogwarts.\n\n' +
      '🌎 O livro se tornou um fenômeno internacional e deu origem a uma das franquias mais conhecidas da cultura popular.\n\n' +
      '🎬 Em 2001, a história chegou aos cinemas.\n\n' +
      '💡 CURIOSIDADE: A primeira edição britânica teve uma tiragem inicial de apenas 500 exemplares.\n\n' +
      '✨ IMPACTO: A saga incentivou a leitura e marcou a infância e adolescência de muitos integrantes da Geração Z.\n\n' +
      '#GeracaoZ #HarryPotter #Literatura',
    likes: 11497,
  },
]


/* =========================================
   CAMINHOS DAS IMAGENS
   Compatível com GitHub Pages e Vercel
========================================= */

export const postsData = rawPostsData.map((post) => ({
  ...post,
  image: `${import.meta.env.BASE_URL}${post.image.replace(/^\/+/, "")}`,
}));
