const LABEL = { en: 'English', hi: 'हिंदी' }

/**
 * EN/HI toggle. `hindiAvailable` reflects whether a title/subtitle
 * translation exists for this article at all (see articleTranslations.js);
 * clicking Hindi when it's false still switches the view so the caller can
 * render the "not available yet" state rather than doing nothing.
 */
export default function LanguageSwitch({ language, onChange, hindiAvailable }) {
  return (
    <div className="flex items-center gap-2" role="group" aria-label="Article language">
      {['en', 'hi'].map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => onChange(lang)}
          aria-pressed={language === lang}
          className={`border px-3 py-1.5 text-xs transition-colors ${
            language === lang
              ? 'border-gold text-gold'
              : 'border-line text-ivory-dim hover:text-ivory'
          }`}
        >
          {LABEL[lang]}
          {lang === 'hi' && !hindiAvailable ? ' (draft)' : ''}
        </button>
      ))}
    </div>
  )
}
