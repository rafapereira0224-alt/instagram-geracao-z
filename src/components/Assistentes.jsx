
import { useEffect, useState } from "react";
import NPCChat from "./NPCChat";
import "./Assistentes.css";

// =====================================================
// PROFESSORES VIRTUAIS
// =====================================================

const professores = [
  {
    id: "bruna",
    nome: "Professora Bruna",
    nomeCurto: "Bruna",
    especialidade: "Inglês",
    descricao:
      "Aprenda inglês de um jeito divertido e descubra sua influência nos jogos, filmes, músicas e na internet.",
    imagem: `${import.meta.env.BASE_URL}bruna.png`,
    cor: "#a855f7",
    emoji: "🇬🇧",
  },
  {
    id: "grace",
    nome: "Professora Grace",
    nomeCurto: "Grace",
    especialidade: "História e Sociologia",
    descricao:
      "Explore os acontecimentos históricos, as transformações sociais e a cultura que marcaram uma geração.",
    imagem: `${import.meta.env.BASE_URL}Grace.png`,
    cor: "#10b981",
    emoji: "🌍",
  },
  {
    id: "allan",
    nome: "Professor Allan",
    nomeCurto: "Allan",
    especialidade: "Física",
    descricao:
      "Descubra a ciência por trás das tecnologias, dos movimentos, da energia e das grandes descobertas.",
    imagem: `${import.meta.env.BASE_URL}Allan.png`,
    cor: "#3b82f6",
    emoji: "⚛️",
  },
];

// =====================================================
// COMPONENTE PRINCIPAL
// =====================================================

function Assistentes({ onNavigateYear }) {
  const [professorSelecionado, setProfessorSelecionado] =
    useState(null);

  const [chatAberto, setChatAberto] = useState(false);

  // =====================================================
  // ABRIR CONVERSA
  // =====================================================

  function abrirChat(professor) {
    setProfessorSelecionado(professor);
    setChatAberto(true);
  }

  // =====================================================
  // FECHAR CONVERSA
  // =====================================================

  function fecharChat() {
    setChatAberto(false);
    setProfessorSelecionado(null);
  }

  // =====================================================
  // NAVEGAR PARA AS PUBLICAÇÕES
  // =====================================================

  function navegarParaAno(year) {
    if (typeof onNavigateYear !== "function") {
      return false;
    }

    const sucesso = onNavigateYear(year) === true;

    if (sucesso) {
      fecharChat();
    }

    return sucesso;
  }

  // =====================================================
  // TECLA ESC
  // =====================================================

  useEffect(() => {
    if (!chatAberto) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        fecharChat();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [chatAberto]);

  // =====================================================
  // BLOQUEAR ROLAGEM COM CHAT ABERTO
  // =====================================================

  useEffect(() => {
    if (!chatAberto) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [chatAberto]);

  // =====================================================
  // INTERFACE
  // =====================================================

  return (
    <>
      <section
        className="assistentes-section"
        aria-label="Assistentes virtuais da Geração Z"
      >
        {/* ============================================
            CABEÇALHO
        ============================================ */}

        <div className="assistentes-heading">
          <span className="assistentes-tag">
            ✨ APRENDA COM NOSSOS GUIAS
          </span>

          <h2>Conheça seus professores virtuais</h2>

          <p>
            Aprenda, descubra curiosidades e explore
            a história da Geração Z com a ajuda de
            três professores de diferentes áreas!
          </p>
        </div>

        {/* ============================================
            CARDS DOS PROFESSORES
        ============================================ */}

        <div className="assistentes-grid">
          {professores.map((professor) => (
            <button
              type="button"
              key={professor.id}
              className="assistente-card"
              style={{
                "--assistente-cor": professor.cor,
              }}
              onClick={() => abrirChat(professor)}
              aria-label={`Abrir conversa com ${professor.nome}, ${professor.especialidade}`}
            >
              {/* IMAGEM */}
              <div className="assistente-image-wrap">
                <img
                  src={professor.imagem}
                  alt={`Avatar ilustrado de ${professor.nome}`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.opacity = "0";
                  }}
                />

                <span className="assistente-status">
                  <span className="assistente-status-dot" />
                  Assistente disponível
                </span>
              </div>

              {/* INFORMAÇÕES */}
              <div className="assistente-info">
                <h3>{professor.nome}</h3>

                <span className="assistente-role">
                  {professor.emoji} {professor.especialidade}
                </span>

                <p>{professor.descricao}</p>

                <span className="assistente-action">
                  Iniciar conversa →
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* ============================================
            INFORMAÇÕES
        ============================================ */}

        <p className="assistentes-disclaimer">
          Os professores são representados por avatares
          ilustrativos. As conversas utilizam respostas
          educativas programadas.
        </p>
      </section>

      {/* ============================================
          MODAL DO CHATBOT
      ============================================ */}

      {chatAberto && professorSelecionado && (
        <div
          className="assistente-chat-overlay"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              fecharChat();
            }
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            boxSizing: "border-box",
            background: "rgba(6, 5, 15, 0.82)",
            backdropFilter: "blur(9px)",
          }}
        >
          <div
            style={{
              width: "min(430px, 100%)",
              maxHeight: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <NPCChat
              key={professorSelecionado.id}
              professor={professorSelecionado}
              onClose={fecharChat}
              onNavigateYear={navegarParaAno}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Assistentes;
