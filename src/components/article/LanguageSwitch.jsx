const LABEL = { en: 'English', hi: 'हिंदी' }
const HINDI_DISABLED_LABEL = 'Hindi translation coming soon'

/**
 * EN/HI toggle. `hindiApproved` must reflect a translation that is both
 * reviewed and published — never a draft, never a not-yet-approved machine
 * translation. When false, the Hindi button is genuinely disabled (not just
 * styled differently) so it cannot be clicked into a half-available state.
 */
export default function LanguageSwitch({ language, onChange, hindiApproved }) {
  return (
    <div className="flex items-center gap-2" role="group" aria-label="Article language">
      {['en', 'hi'].map((lang) => {
        const disabled = lang === 'hi' && !hindiApproved
        return (
          <button
            key={lang}
            type="button"
            onClick={() => onChange(lang)}
            disabled={disabled}
            aria-pressed={language === lang}
            aria-disabled={disabled}
            title={disabled ? HINDI_DISABLED_LABEL : undefined}
            className={`border px-3 py-1.5 text-xs transition-colors ${
              language === lang
                ? 'border-gold text-gold'
                : 'border-line text-ivory-dim hover:text-ivory'
            } ${disabled ? 'cursor-not-allowed opacity-40 hover:text-ivory-dim' : ''}`}
          >
            {disabled ? HINDI_DISABLED_LABEL : LABEL[lang]}
          </button>
        )
      })}
    </div>
  )
}
