
import {
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react'

import './StoryViewer.css'

const STORY_DURATION = 7000

function StoryViewer({ group, onClose }) {
  const stories = group?.stories || []

  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [paused, setPaused] = useState(false)

  const progressRef = useRef(0)
  const lastTimeRef = useRef(null)
  const finishedRef = useRef(false)

  const currentStory = stories[currentIndex]

  const resetProgress = useCallback(() => {
    progressRef.current = 0
    lastTimeRef.current = null
    finishedRef.current = false
    setProgress(0)
  }, [])

  const nextStory = useCallback(() => {
    if (currentIndex >= stories.length - 1) {
      onClose()
      return
    }

    resetProgress()
    setCurrentIndex((previous) => previous + 1)
  }, [currentIndex, stories.length, onClose, resetProgress])

  const previousStory = useCallback(() => {
    resetProgress()

    if (currentIndex > 0) {
      setCurrentIndex((previous) => previous - 1)
    }
  }, [currentIndex, resetProgress])

  // AVANÇO AUTOMÁTICO
  useEffect(() => {
    if (paused || !currentStory) {
      lastTimeRef.current = null
      return
    }

    let animationFrame

    function updateProgress(timestamp) {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp
      }

      const elapsed = timestamp - lastTimeRef.current
      lastTimeRef.current = timestamp

      const nextProgress = Math.min(
        progressRef.current +
          (elapsed / STORY_DURATION) * 100,
        100
      )

      progressRef.current = nextProgress
      setProgress(nextProgress)

      if (nextProgress >= 100) {
        if (!finishedRef.current) {
          finishedRef.current = true
          nextStory()
        }
        return
      }

      animationFrame = requestAnimationFrame(updateProgress)
    }

    animationFrame = requestAnimationFrame(updateProgress)

    return () => {
      cancelAnimationFrame(animationFrame)
      lastTimeRef.current = null
    }
  }, [paused, currentStory, nextStory])

  // TECLADO
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        nextStory()
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        previousStory()
      }

      if (event.code === 'Space') {
        event.preventDefault()
        setPaused((previous) => !previous)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [nextStory, previousStory, onClose])

  if (!currentStory) return null

  return (
    <div className="story-viewer-backdrop">

      {/* FECHAR */}
      <button
        className="story-viewer-close"
        onClick={onClose}
        aria-label="Fechar Stories"
        type="button"
      >
        ×
      </button>

      <div
        className="story-viewer"
        role="dialog"
        aria-modal="true"
        aria-label={`Stories de ${group.name}`}
      >

        {/* FOTO HISTÓRICA */}
        <img
          key={currentStory.id}
          className="story-viewer-image"
          src={currentStory.image}
          alt={currentStory.title}
        />

        <div className="story-viewer-shade" />

        {/* INDICADORES DE PROGRESSO */}
        <div className="story-progress-container">
          {stories.map((story, index) => (
            <div
              className="story-progress-track"
              key={story.id}
            >
              <div
                className="story-progress-fill"
                style={{
                  width:
                    index < currentIndex
                      ? '100%'
                      : index > currentIndex
                        ? '0%'
                        : `${progress}%`,
                }}
              />
            </div>
          ))}
        </div>

        {/* CABEÇALHO */}
        <div className="story-viewer-header">
          <div className="story-viewer-avatar">
            Z
          </div>

          <div className="story-viewer-user">
            <strong>geracao.z_history</strong>
            <span>{group.name}</span>
          </div>

          <button
            type="button"
            className="story-pause-button"
            onClick={() => {
              lastTimeRef.current = null
              setPaused((previous) => !previous)
            }}
            aria-label={paused ? 'Continuar Story' : 'Pausar Story'}
            aria-pressed={paused}
          >
            {paused ? '▶' : 'Ⅱ'}
          </button>
        </div>

        {/* INFORMAÇÕES HISTÓRICAS */}
        <div
          className="story-viewer-content"
          key={`content-${currentStory.id}`}
        >
          <span className="story-year">
            {currentStory.year}
          </span>

          <h2>{currentStory.title}</h2>

          <p>{currentStory.text}</p>

          <span className="story-category">
            {currentStory.category}
          </span>
        </div>

        {/* SETAS */}
        <div className="story-viewer-navigation">
          <button
            type="button"
            onClick={previousStory}
            disabled={currentIndex === 0}
            aria-label="Story anterior"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={nextStory}
            aria-label="Próximo Story"
          >
            ›
          </button>
        </div>

        {/* CONTADOR */}
        <div className="story-viewer-counter">
          {currentIndex + 1} / {stories.length}
        </div>

        {/* ÁREAS DE TOQUE NO CELULAR */}
        <div className="story-touch-controls">
          <button
            type="button"
            onClick={previousStory}
            disabled={currentIndex === 0}
            aria-label="Voltar Story"
          />

          <button
            type="button"
            onClick={nextStory}
            aria-label="Avançar Story"
          />
        </div>
      </div>
    </div>
  )
}

export default StoryViewer
