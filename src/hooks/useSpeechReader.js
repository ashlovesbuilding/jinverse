import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Thin wrapper around window.speechSynthesis. Speaks a list of plain-text
 * paragraph chunks (never DOM content) one at a time via a queue, so long
 * articles don't hit the browser's silent-cutoff bug on very long single
 * utterances, and pause/resume land on paragraph boundaries.
 */
export default function useSpeechReader() {
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window

  const [voices, setVoices] = useState([])
  const [status, setStatus] = useState(supported ? 'idle' : 'unavailable')
  const [statusMessage, setStatusMessage] = useState(
    supported ? '' : 'Voice reading is not supported in this browser.'
  )

  const queueRef = useRef([])
  const indexRef = useRef(0)

  useEffect(() => {
    if (!supported) return undefined
    const loadVoices = () => setVoices(window.speechSynthesis.getVoices())
    loadVoices()
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices)
    return () => window.speechSynthesis.removeEventListener('voiceschanged', loadVoices)
  }, [supported])

  const voicesForLang = useCallback(
    (langPrefix) => voices.filter((v) => v.lang?.toLowerCase().startsWith(langPrefix)),
    [voices]
  )

  const speakNext = useCallback((lang, voice) => {
    const queue = queueRef.current
    const i = indexRef.current
    if (i >= queue.length) {
      setStatus('idle')
      setStatusMessage('Finished reading.')
      return
    }
    const utterance = new window.SpeechSynthesisUtterance(queue[i])
    utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-US'
    if (voice) utterance.voice = voice
    utterance.onend = () => {
      if (indexRef.current !== i) return // a stop()/play() already reset the queue
      indexRef.current += 1
      speakNext(lang, voice)
    }
    utterance.onerror = (event) => {
      if (event.error === 'canceled' || event.error === 'interrupted') return
      setStatus('idle')
      setStatusMessage('Voice reading stopped due to a browser error.')
    }
    window.speechSynthesis.speak(utterance)
  }, [])

  const play = useCallback(
    (paragraphs, lang) => {
      if (!supported) return
      const clean = (paragraphs || []).map((p) => p.trim()).filter(Boolean)
      if (!clean.length) return
      window.speechSynthesis.cancel()
      queueRef.current = clean
      indexRef.current = 0
      const voice = voicesForLang(lang === 'hi' ? 'hi' : 'en')[0] || null
      setStatus('playing')
      setStatusMessage(lang === 'hi' ? 'Reading in Hindi…' : 'Reading in English…')
      speakNext(lang, voice)
    },
    [supported, voicesForLang, speakNext]
  )

  const pause = useCallback(() => {
    if (!supported || status !== 'playing') return
    window.speechSynthesis.pause()
    setStatus('paused')
    setStatusMessage('Paused.')
  }, [supported, status])

  const resume = useCallback(() => {
    if (!supported || status !== 'paused') return
    window.speechSynthesis.resume()
    setStatus('playing')
    setStatusMessage('Resumed.')
  }, [supported, status])

  const stop = useCallback(() => {
    if (!supported) return
    queueRef.current = []
    indexRef.current = 0
    window.speechSynthesis.cancel()
    setStatus('idle')
    setStatusMessage('')
  }, [supported])

  // Belt-and-braces cleanup: cancel any in-flight speech if this hook's
  // owner unmounts without calling stop() explicitly.
  useEffect(() => {
    return () => {
      if (supported) window.speechSynthesis.cancel()
    }
  }, [supported])

  return { supported, status, statusMessage, voicesForLang, play, pause, resume, stop }
}
