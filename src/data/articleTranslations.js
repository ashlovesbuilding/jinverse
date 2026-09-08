// ---------------------------------------------------------------------------
// HINDI TRANSLATIONS — DRAFT, PENDING HUMAN REVIEW
//
// Stored locally (not in Supabase) so this can ship without any schema
// change. Keyed by article slug; each entry's `hi.reviewed` is false until
// a fluent reviewer has checked it — the UI should surface that.
//
// IMPORTANT: title/subtitle below are translated from the real English
// source text in src/data/placeholderContent.js. `body` is deliberately
// left `null` for all four articles: the seed articles in this repo only
// ever carry a short title/subtitle/excerpt, never full body copy (full
// article bodies exist only in Supabase or were typed live into the
// editor, and are not present anywhere in this codebase). Translating a
// body we don't have would mean inventing Jain historical/philosophical
// content, which was explicitly ruled out — so `body: null` is intentional,
// not a placeholder to "get to later" casually. Fill it in only by
// translating the actual published English body text for that article,
// once available.
//
// Jain technical terms are kept in Devanagari with a Latin transliteration
// on first use per article (e.g. "अहिंसा (Ahimsa)"), so a reader unfamiliar
// with the Devanagari form can still map it to the term used elsewhere on
// the site.
// ---------------------------------------------------------------------------

export const articleTranslations = {
  'what-is-jainism': {
    hi: {
      title: 'जैन धर्म क्या है?',
      subtitle: 'दुनिया के सबसे प्राचीन जीवित मुक्ति-मार्गों में से एक का परिचय।',
      body: null,
      reviewed: false,
    },
  },
  'bharatavarsha-bharat-chakravarti': {
    hi: {
      title: 'भारतवर्ष: भरत चक्रवर्ती (Bharat Chakravarti) की भूमि',
      subtitle:
        'भगवान ऋषभदेव और भरत चक्रवर्ती की पावन कथा, और हमारी महान भूमि के नाम की उत्पत्ति — जैन परंपरा के अनुसार।',
      body: null,
      reviewed: false,
    },
  },
  'understanding-ahimsa': {
    hi: {
      title: 'अहिंसा (Ahimsa) को समझना',
      subtitle: 'जैन चिंतन में अहिंसा केवल कर्म तक सीमित नहीं है — यह वचन और विचार तक फैली हुई है।',
      body: null,
      reviewed: false,
    },
  },
  'the-universe-within': {
    hi: {
      title: 'भीतर का ब्रह्मांड',
      subtitle: 'आत्मा (Atma) की जैन अवधारणा हमें अपने भीतर क्या देखने के लिए कहती है।',
      body: null,
      reviewed: false,
    },
  },
}

export function getArticleTranslation(slug) {
  return articleTranslations[slug]?.hi || null
}
