
import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";

import { postsData } from "./data/posts";
import { highlightsData } from "./data/highlights";
import { storiesData } from "./data/stories";

import StoryViewer from "./components/StoryViewer";
import Assistentes from "./components/Assistentes";

import "./App.css";

// ======================================================
// ANOS DA GERAÇÃO Z
// ======================================================

const YEARS = Array.from(
  { length: 16 },
  (_, index) => String(2012 - index)
);

function App() {
  // ======================================================
  // ESTADOS PRINCIPAIS
  // ======================================================

  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedHighlight, setSelectedHighlight] = useState(null);
  const [selectedStoryGroup, setSelectedStoryGroup] = useState(null);

  const [likedPosts, setLikedPosts] = useState([]);
  const [following, setFollowing] = useState(false);

  const [search, setSearch] = useState("");
  const [selectedYear, setSelectedYear] = useState("todos");

  const [comments, setComments] = useState({});
  const [commentText, setCommentText] = useState("");

  // ======================================================
  // PREPARAÇÃO PARA O CHATBOT 2D
  // ======================================================

  const postsSectionRef = useRef(null);
  const navigationRequest = useRef(0);
  const [npcNavigation, setNpcNavigation] = useState(null);

  // ======================================================
  // STORIES
  // ======================================================

  const closeStories = useCallback(() => {
    setSelectedStoryGroup(null);
  }, []);

  function openStoryGroup(group) {
    setSelectedPost(null);
    setSelectedHighlight(null);
    setSelectedStoryGroup(group);
  }

  // ======================================================
  // FILTROS E PESQUISA
  // ======================================================

  const filteredPosts = useMemo(() => {
    const term = search.trim().toLocaleLowerCase("pt-BR");

    return postsData.filter((post) => {
      const matchesYear =
        selectedYear === "todos" ||
        String(post.year) === selectedYear;

      const matchesSearch =
        !term ||
        [
          post.title,
          post.year,
          post.category,
          post.caption,
        ].some((value) =>
          String(value ?? "")
            .toLocaleLowerCase("pt-BR")
            .includes(term)
        );

      return matchesYear && matchesSearch;
    });
  }, [search, selectedYear]);

  // ======================================================
  // NAVEGAÇÃO POR ANO PARA OS ASSISTENTES
  // ======================================================

  const handleNPCNavigateYear = useCallback((year) => {
    const requestedYear = String(year);

    if (!YEARS.includes(requestedYear)) {
      return false;
    }

    // Fecha conteúdos abertos
    setSelectedPost(null);
    setSelectedHighlight(null);
    setSelectedStoryGroup(null);

    // Limpa a busca e seleciona o ano
    setSearch("");
    setSelectedYear(requestedYear);

    // Registra a navegação
    navigationRequest.current += 1;

    setNpcNavigation({
      id: navigationRequest.current,
      year: requestedYear,
    });

    return true;
  }, []);

  // Rola até as publicações após a navegação
  useEffect(() => {
    if (!npcNavigation) return;

    const frame = requestAnimationFrame(() => {
      postsSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [npcNavigation]);

  // A função será conectada aos assistentes no próximo passo
  void handleNPCNavigateYear;

  // ======================================================
  // DESTAQUES
  // ======================================================

  const highlightPosts = useMemo(() => {
    if (!selectedHighlight) return [];

    return postsData.filter((post) =>
      selectedHighlight.categories.includes(post.category)
    );
  }, [selectedHighlight]);

  // ======================================================
  // CURTIDAS
  // ======================================================

  function toggleLike(id) {
    setLikedPosts((previous) =>
      previous.includes(id)
        ? previous.filter((postId) => postId !== id)
        : [...previous, id]
    );
  }

  // ======================================================
  // ABRIR E FECHAR PUBLICAÇÕES
  // ======================================================

  function openPost(post) {
    setSelectedHighlight(null);
    setSelectedStoryGroup(null);
    setCommentText("");
    setSelectedPost(post);
  }

  function closePost() {
    setSelectedPost(null);
    setCommentText("");
  }

  // ======================================================
  // COMENTÁRIOS
  // ======================================================

  function addComment(event) {
    event.preventDefault();

    if (!selectedPost || !commentText.trim()) {
      return;
    }

    const newComment = {
      id: `${Date.now()}-${Math.random()}`,
      user: "visitante",
      text: commentText.trim(),
    };

    setComments((previous) => ({
      ...previous,
      [selectedPost.id]: [
        ...(previous[selectedPost.id] || []),
        newComment,
      ],
    }));

    setCommentText("");
  }

  // ======================================================
  // COMPARTILHAR PERFIL
  // ======================================================

  async function shareProfile() {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: "Geração Z | História & Cultura",
          text: "Conheça a história da Geração Z!",
          url,
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        alert("Link do perfil copiado!");
      } else {
        alert(`Link do perfil: ${url}`);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        alert("Não foi possível compartilhar o perfil.");
      }
    }
  }

  // ======================================================
  // TECLA ESC
  // ======================================================

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSelectedPost(null);
        setSelectedHighlight(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // ======================================================
  // BLOQUEIO DE ROLAGEM DOS MODAIS
  // ======================================================

  useEffect(() => {
    const hasModal =
      selectedPost ||
      selectedHighlight ||
      selectedStoryGroup;

    if (!hasModal) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [
    selectedPost,
    selectedHighlight,
    selectedStoryGroup,
  ]);

  // ======================================================
  // INTERFACE PRINCIPAL
  // ======================================================

  return (
    <div className="instagram-app">
      <main className="profile-page">

        {/* =============================================
            CABEÇALHO DO PERFIL
        ============================================= */}

        <header className="profile-header">
          <div className="profile-avatar">
            <span>Z</span>
          </div>

          <div className="profile-info">
            <div className="profile-top">
              <h1>geracao.z_history</h1>

              <button
                className="follow-button"
                onClick={() =>
                  setFollowing((previous) => !previous)
                }
              >
                {following ? "Seguindo" : "Seguir"}
              </button>

              <button
                className="share-button"
                onClick={shareProfile}
              >
                Compartilhar perfil
              </button>
            </div>

            <div className="profile-stats">
              <span>
                <strong>{postsData.length}</strong> publicações
              </span>

              <span>
                <strong>
                  {following ? "2.501" : "2.500"}
                </strong>{" "}
                seguidores
              </span>

              <span>
                <strong>180</strong> seguindo
              </span>
            </div>

            <div className="profile-bio">
              <strong>
                Geração Z | História & Cultura 🌎
              </strong>

              <p>
                📚 A história de uma geração que mudou o mundo.
              </p>

              <p>
                💻 Tecnologia, cultura, games e acontecimentos.
              </p>

              <p>🗓️ De 1997 a 2012 e seus impactos.</p>

              <p>✨ O passado explica o nosso presente.</p>
            </div>
          </div>
        </header>

        {/* =============================================
            ASSISTENTES VIRTUAIS
        ============================================= */}

        <Assistentes onNavigateYear={handleNPCNavigateYear} />

        {/* =============================================
            STORIES HISTÓRICOS
        ============================================= */}

        <section
          className="year-stories-section"
          aria-label="Stories históricos por ano"
        >
          <div className="year-stories-heading">
            <h2>Uma geração, 16 anos de história</h2>

            <p>
              Explore os acontecimentos de cada ano,
              de 1997 a 2012.
            </p>
          </div>

          <div className="year-stories-list">
            {storiesData.map((group) => (
              <button
                className="year-story"
                key={group.id}
                onClick={() => openStoryGroup(group)}
                aria-label={`Assistir Stories de ${group.name}`}
              >
                <div className="year-story-ring">
                  <div className="year-story-avatar">
                    <span>{group.name}</span>
                  </div>
                </div>

                <strong>{group.name}</strong>
              </button>
            ))}
          </div>
        </section>

        {/* =============================================
            DESTAQUES TEMÁTICOS
        ============================================= */}

        <section
          className="highlights"
          aria-label="Destaques por categoria"
        >
          {highlightsData.map((highlight) => (
            <button
              className="highlight"
              key={highlight.id}
              onClick={() =>
                setSelectedHighlight(highlight)
              }
              aria-label={`Abrir destaque ${highlight.name}`}
            >
              <div className="highlight-circle">
                <span>{highlight.emoji}</span>
              </div>

              <strong>{highlight.name}</strong>
            </button>
          ))}
        </section>

        {/* =============================================
            FILTROS E PESQUISA
        ============================================= */}

        <section
          className="post-filters"
          ref={postsSectionRef}
          style={{
            scrollMarginTop: "22px",
          }}
        >
          <div className="post-filters-heading">
            <div>
              <h2>Explore a história</h2>

              <p>
                Encontre acontecimentos que marcaram
                a Geração Z.
              </p>
            </div>

            <span className="post-results-count">
              {filteredPosts.length} resultados
            </span>
          </div>

          <div className="post-filters-controls">
            <input
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Pesquisar acontecimentos..."
              aria-label="Pesquisar publicações"
            />

            <select
              value={selectedYear}
              onChange={(event) =>
                setSelectedYear(event.target.value)
              }
              aria-label="Filtrar por ano"
            >
              <option value="todos">Todos os anos</option>

              {YEARS.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

            {(search || selectedYear !== "todos") && (
              <button
                className="clear-filters"
                onClick={() => {
                  setSearch("");
                  setSelectedYear("todos");
                }}
              >
                Limpar
              </button>
            )}
          </div>
        </section>

        {/* =============================================
            PUBLICAÇÕES
        ============================================= */}

        <div className="profile-tabs">
          <span className="active-tab">
            ▦ PUBLICAÇÕES
          </span>
        </div>

        <section className="posts-grid">
          {filteredPosts.map((post) => {
            const isLiked = likedPosts.includes(post.id);

            return (
              <button
                className="grid-post"
                key={post.id}
                onClick={() => openPost(post)}
                aria-label={`Abrir publicação: ${post.title}`}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                />

                <div className="grid-overlay">
                  <strong>{post.title}</strong>

                  <span>{post.year}</span>

                  <span>
                    ♥{" "}
                    {(
                      post.likes + (isLiked ? 1 : 0)
                    ).toLocaleString("pt-BR")}
                  </span>
                </div>
              </button>
            );
          })}
        </section>

        {/* =============================================
            SEM RESULTADOS
        ============================================= */}

        {filteredPosts.length === 0 && (
          <div className="no-results">
            <span>🔎</span>

            <h3>Nenhum acontecimento encontrado</h3>

            <p>
              Tente pesquisar outro assunto ou ano.
            </p>
          </div>
        )}

        {/* =============================================
            RODAPÉ
        ============================================= */}

        <footer className="profile-footer">
          <p>Projeto educacional • Geração Z</p>
          <p>© 2026 Instagram Geração Z</p>
        </footer>
      </main>

      {/* =============================================
          VISUALIZADOR DE STORIES
      ============================================= */}

      {selectedStoryGroup && (
        <StoryViewer
          key={selectedStoryGroup.id}
          group={selectedStoryGroup}
          onClose={closeStories}
        />
      )}

      {/* =============================================
          MODAL DOS DESTAQUES
      ============================================= */}

      {selectedHighlight && (
        <div
          className="post-modal-backdrop"
          onClick={() => setSelectedHighlight(null)}
        >
          <button
            className="modal-close"
            onClick={() => setSelectedHighlight(null)}
            aria-label="Fechar destaque"
          >
            ×
          </button>

          <div
            className="highlight-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`Destaque ${selectedHighlight.name}`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="highlight-modal-header">
              <span className="highlight-modal-emoji">
                {selectedHighlight.emoji}
              </span>

              <div>
                <h2>{selectedHighlight.name}</h2>

                <p>
                  {highlightPosts.length} acontecimentos históricos
                </p>
              </div>
            </div>

            <div className="highlight-posts-grid">
              {highlightPosts.map((post) => (
                <button
                  className="highlight-post"
                  key={post.id}
                  onClick={() => openPost(post)}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                  />

                  <div className="highlight-post-info">
                    <strong>{post.title}</strong>
                    <span>{post.year}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =============================================
          MODAL DA PUBLICAÇÃO
      ============================================= */}

      {selectedPost && (
        <div
          className="post-modal-backdrop"
          onClick={closePost}
        >
          <button
            className="modal-close"
            onClick={closePost}
            aria-label="Fechar publicação"
          >
            ×
          </button>

          <div
            className="post-modal"
            role="dialog"
            aria-modal="true"
            aria-label={selectedPost.title}
            onClick={(event) => event.stopPropagation()}
          >
            {/* IMAGEM */}
            <div className="modal-image">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
              />
            </div>

            {/* CONTEÚDO */}
            <div className="modal-content">
              {/* CABEÇALHO */}
              <div className="modal-header">
                <div className="mini-avatar">Z</div>

                <strong>geracao.z_history</strong>

                <span>•••</span>
              </div>

              {/* LEGENDA */}
              <div className="modal-caption">
                <h2>{selectedPost.title}</h2>

                <span className="modal-category">
                  {selectedPost.category} • {selectedPost.year}
                </span>

                <p>{selectedPost.caption}</p>

                {/* COMENTÁRIOS */}
                <div className="post-comments">
                  <h3>Comentários</h3>

                  {(comments[selectedPost.id] || []).length === 0 ? (
                    <p className="comments-empty">
                      Seja o primeiro a comentar!
                    </p>
                  ) : (
                    (comments[selectedPost.id] || []).map(
                      (comment) => (
                        <div
                          className="comment-item"
                          key={comment.id}
                        >
                          <strong>{comment.user}</strong>
                          <p>{comment.text}</p>
                        </div>
                      )
                    )
                  )}
                </div>
              </div>

              {/* CURTIDAS */}
              <div className="modal-actions">
                <button
                  className={
                    likedPosts.includes(selectedPost.id)
                      ? "is-liked"
                      : ""
                  }
                  onClick={() =>
                    toggleLike(selectedPost.id)
                  }
                  aria-label={
                    likedPosts.includes(selectedPost.id)
                      ? "Descurtir publicação"
                      : "Curtir publicação"
                  }
                  aria-pressed={likedPosts.includes(
                    selectedPost.id
                  )}
                >
                  {likedPosts.includes(selectedPost.id)
                    ? "♥"
                    : "♡"}
                </button>

                <span>
                  {(
                    selectedPost.likes +
                    (likedPosts.includes(selectedPost.id)
                      ? 1
                      : 0)
                  ).toLocaleString("pt-BR")}{" "}
                  curtidas
                </span>
              </div>

              {/* NOVO COMENTÁRIO */}
              <form
                className="comment-form"
                onSubmit={addComment}
              >
                <input
                  type="text"
                  value={commentText}
                  onChange={(event) =>
                    setCommentText(event.target.value)
                  }
                  placeholder="Adicione um comentário..."
                  maxLength={300}
                  aria-label="Novo comentário"
                />

                <button
                  type="submit"
                  disabled={!commentText.trim()}
                >
                  Publicar
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
