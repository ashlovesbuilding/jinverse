import { useEffect, useState } from 'react'
import useSpeechReader from '../../hooks/useSpeechReader.js'

const LANG_LABEL = { en: 'English', hi: 'Hindi' }

/**
 * Listen / Pause / Resume / Stop controls for an article. Speaks only the
 * plain-text paragraphs passed in via `paragraphs` (derived from article
 * data by the caller) — never touches the DOM, so nav/buttons/unrelated
 * page text are never read aloud.
 */
export default function VoiceControls({ paragraphs, contentLang }) {
  const speech = useSpeechReader()
  const [voiceLang, setVoiceLang] = useState(contentLang)

  // Follow the displayed content language unless the reader has picked a
  // different voice language explicitly available on this device.
  useEffect(() => {
    setVoiceLang(contentLang)
  }, [contentLang])

  // Stop speech immediately if the underlying text changes out from under
  // the reader (language switched, or a different article body loaded).
  useEffect(() => {
    speech.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paragraphs])

  if (!speech.supported) {
    return (
      <p role="status" className="mt-4 text-xs text-ivory-dim/60">
        Voice reading is not available in this browser.
      </p>
    )
  }

  const englishVoices = speech.voicesForLang('en')
  const hindiVoices = speech.voicesForLang('hi')
  const availableLangs = [
    englishVoices.length ? 'en' : null,
    hindiVoices.length ? 'hi' : null,
  ].filter(Boolean)
  const currentVoiceAvailable = voiceLang === 'hi' ? hindiVoices.length > 0 : englishVoices.length > 0

  return (
    <div className="mt-6 border border-line p-4">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs uppercase tracking-[0.18em] text-ivory-dim/70">Listen</span>

        <button
          type="button"
          onClick={() => speech.play(paragraphs, voiceLang)}
          disabled={!currentVoiceAvailable || speech.status === 'playing'}
          aria-label="Listen to this article"
          className="border border-line px-3 py-1.5 text-xs text-ivory-dim hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-40"
        >
          Listen
        </button>
        <button
          type="button"
          onClick={speech.pause}
          disabled={speech.status !== 'playing'}
          aria-label="Pause reading"
          className="border border-line px-3 py-1.5 text-xs text-ivory-dim hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-40"
        >
          Pause
        </button>
        <button
          type="button"
          onClick={speech.resume}
          disabled={speech.status !== 'paused'}
          aria-label="Resume reading"
          className="border border-line px-3 py-1.5 text-xs text-ivory-dim hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-40"
        >
          Resume
        </button>
        <button
          type="button"
          onClick={speech.stop}
          disabled={speech.status === 'idle'}
          aria-label="Stop reading"
          className="border border-line px-3 py-1.5 text-xs text-ivory-dim hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-40"
        >
          Stop
        </button>

        {availableLangs.length > 0 && (
          <label className="ml-auto flex items-center gap-2 text-xs text-ivory-dim/70">
            Voice
            <select
              value={voiceLang}
              onChange={(e) => setVoiceLang(e.target.value)}
              aria-label="Voice language"
              className="border border-line bg-panel px-2 py-1 text-xs text-ivory"
            >
              {availableLangs.map((lang) => (
                <option key={lang} value={lang}>{LANG_LABEL[lang]}</option>
              ))}
            </select>
          </label>
        )}
      </div>

      {!currentVoiceAvailable && (
        <p className="mt-3 text-xs text-ivory-dim/60">
          No {LANG_LABEL[voiceLang]} voice was found on this device, so reading in {LANG_LABEL[voiceLang]} isn't available right now.
        </p>
      )}

      <p role="status" aria-live="polite" className="mt-3 text-xs text-gold-dim">
        {speech.statusMessage}
      </p>
    </div>
  )
}
