import { util } from '@citation-js/core'

// RefWorks Tagged Format
// https://knowledge.exlibrisgroup.com/RefWorks/Legacy_RefWorks/05Managing_References/020RefWorks_Tagged_Format

const TYPE_MAPPINGS = {
  toTarget: {
    // Abstract: '',
    Artwork: 'graphic',
    Bills: 'bill',
    Resolutions: 'bill',
    'Book, Section': 'chapter',
    'Book, Edited': 'book',
    'Book, Whole': 'book',
    Case: 'legal_case',
    'Court Decisions': 'legal_case',
    'Computer Program': 'software',
    'Conference Proceedings': 'paper-conference',
    Dissertation: 'thesis',
    Thesis: 'thesis',
    'Dissertation, Unpublished': 'manuscript',
    'Thesis, Unpublished': 'manuscript',
    // 'Generic Grant': '',
    Hearing: 'hearing',
    'Journal Article': 'article-journal',
    'Journal, Electronic': 'article-journal',
    Laws: 'legislation',
    Statutes: 'legislation',
    'Magazine Article': 'article-magazine',
    Map: 'map',
    Monograph: 'book',
    'Motion Picture': 'motion_picture',
    'Music Score': 'musical_score',
    'Newspaper Article': 'article-newspaper',
    'Online Discussion Forum': 'post',
    Patent: 'patent',
    'Personal Communication': 'personal_communication',
    Report: 'report',
    'Sound Recording': 'song',
    'Unpublished Material': 'manuscript',
    Video: 'motion_picture',
    DVD: 'motion_picture',
    'Web Page': 'webpage'
  },
  toSource: {
    // article: '',
    'article-journal': 'Journal Article',
    'article-magazine': 'Newspaper Article',
    'article-newspaper': 'Newspaper Article',
    bill: 'Bills',
    book: 'Book, Whole',
    // broadcast: '',
    chapter: 'Book, Section',
    // classic: '',
    // collection: '',
    // dataset: '',
    // document: '',
    // entry: '',
    // 'entry-dictionary': '',
    // 'entry-encyclopedia': '',
    // event: '',
    // figure: '',
    graphic: 'Artwork',
    hearing: 'Hearing',
    // interview: '',
    legal_case: 'Case',
    legislation: 'Laws',
    manuscript: 'Unpublished Material',
    map: 'Map',
    motion_picture: 'Motion Picture',
    musical_score: 'Music Score',
    // pamphlet: '',
    'paper-conference': 'Conference Proceedings',
    patent: 'Patent',
    // performance: '',
    // periodical: '',
    personal_communication: 'Personal Communication',
    post: 'Online Discussion Forum',
    'post-weblog': 'Online Discussion Forum',
    // regulation: '',
    report: 'Report',
    // review: '',
    // 'review-book': '',
    software: 'Computer Program',
    song: 'Sound Recording',
    // speech: '',
    // standard: '',
    thesis: 'Dissertation',
    // treaty: '',
    webpage: 'Web Page'
  }
}

const FORMATTING_MAP = ['b', 'u', 'i', 'sup', 'sub']
const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

const CONVERTERS = {
  ISBN_ISSN: {
    toTarget (number) {
      let isbn
      let issn

      if (number.length === 9) {
        issn = number
      } else {
        isbn = number.split(' ')[0]
      }

      return [isbn, issn]
    },
    toSource (isbn, issn) {
      return issn || isbn
    }
  },
  KEYWORDS: {
    toTarget (keywords) { return [].concat(keywords).join() },
    toSource (keywords) { return keywords.split(',') }
  },
  MEDIUM: {
    toTarget (type) { return type === 'Print(0)' ? 'print' : 'electronic' },
    toSource (type) { return type === 'electronic' ? 'Electronic(1)' : type === 'print' ? 'Print(0)' : undefined }
  },
  NAME: {
    toTarget (name) {
      const [family, given, suffix] = name.split(/, ?/)
      if (given === undefined && family.includes(' ')) {
        return { literal: family }
      }
      const parts = { family }
      if (given) { parts.given = given }
      if (suffix) { parts.suffix = suffix }
      return parts
    },
    toSource (name) {
      if (name.literal) { return name.literal }
      const parts = [name.family]
      if (name.given !== undefined) {
        parts.push(name.given)
      }
      if (name.suffix !== undefined) {
        if (parts.length === 1) {
          parts[0] += ','
        }
        parts.push(name.suffix)
      }
      return parts.join(', ')
    }
  },
  NAMES: {
    toTarget (names) { return [].concat(names).map(CONVERTERS.NAME.toTarget) },
    toSource (names) { return [].concat(names).map(CONVERTERS.NAME.toSource) }
  },
  PAGES: {
    toTarget (start, other) { return other ? `${start}-${other}` : start },
    toSource (page) { return page.split('-') }
  },
  PARTIAL_DATE: {
    toTarget (year, fd) {
      if (year === undefined) {
        return { raw: fd }
      }

      year = parseInt(year, 10)

      if (fd === undefined) {
        return { 'date-parts': [[year]] }
      }

      const parts = [year]
      const monthMatch = fd.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/i)
      if (monthMatch) {
        parts.push(MONTHS.indexOf(monthMatch[0].toLowerCase()) + 1)
        const dayMatch = fd.match(/(^|\D)(3[01]|[12][0-9]|0?[1-9])($|\D)/)
        if (dayMatch) {
          parts.push(parseInt(dayMatch[2], 10))
        }
      } else {
        return { raw: fd + ' ' + year }
      }

      return { 'date-parts': [parts] }
    },
    toSource (date) {
      if (date['date-parts']) {
        const [year, month, day] = date['date-parts'][0]
        if (!month) {
          return [year.toString(), undefined]
        }
        const monthName = MONTHS[month - 1]
        return [year.toString(), day ? monthName + ' ' + day : monthName]
      } else {
        return [undefined, date.raw]
      }
    }
  },
  RICH_TEXT: {
    toTarget (text) {
      return text.replace(
        /([01])RW1S34RfeSDcfkexd09rT([0-4])/g,
        (tag, start, type) => (start === '0' ? '<' : '</') + FORMATTING_MAP[type] + '>'
      )
    },
    toSource (text) {
      return text.replace(
        /<(\/?)([a-z]+).*?>/g,
        (tag, start, type) => FORMATTING_MAP.indexOf(type) === -1
          ? ''
          : (start ? '1' : '0') + 'RW1S34RfeSDcfkexd09rT' + FORMATTING_MAP.indexOf(type)
      )
    }
  },
  TYPE: {
    toTarget (type) { return TYPE_MAPPINGS.toTarget[type] || 'document' },
    toSource (type) { return TYPE_MAPPINGS.toSource[type] }
  }
}

const PROP_MAPPINGS = [
  { source: 'RT', target: 'type', convert: CONVERTERS.TYPE },
  { source: 'SR', target: 'medium', convert: CONVERTERS.MEDIUM },
  { source: 'ID', target: 'id' },
  { source: 'A1', target: 'author', convert: CONVERTERS.NAMES },
  { source: 'T1', target: 'title', convert: CONVERTERS.RICH_TEXT },
  {
    source: 'JF',
    target: 'container-title',
    when: { target: { type: 'article-journal' } }
  },
  {
    source: 'JO',
    target: 'container-title-short',
    when: { target: { type: 'article-journal' } }
  },
  { source: ['YR', 'FD'], target: 'issued', convert: CONVERTERS.PARTIAL_DATE },
  { source: 'VO', target: 'volume' },
  { source: 'IS', target: 'issue' },
  { source: ['SP', 'OP'], target: 'page', convert: CONVERTERS.PAGES },
  { source: 'K1', target: 'keyword', convert: CONVERTERS.KEYWORDS },
  { source: 'AB', target: 'abstract', convert: CONVERTERS.RICH_TEXT },
  { source: 'NO', target: 'note', convert: CONVERTERS.RICH_TEXT },
  { source: 'A2', target: 'editor', convert: CONVERTERS.NAMES },
  {
    source: 'T2',
    target: 'container-title',
    when: { source: { JF: false, WT: false }, target: { type: 'chapter' } },
    convert: CONVERTERS.RICH_TEXT
  },
  { source: 'ED', target: 'edition' },
  { source: 'PB', target: 'publisher' },
  { source: 'PP', target: 'publisher-place' },
  { source: 'A3', target: 'collection-editor', convert: CONVERTERS.NAMES },
  { source: 'A4', target: 'translator', convert: CONVERTERS.NAMES },
  { source: 'A5', target: 'compiler', convert: CONVERTERS.NAMES },
  // T3
  { source: 'SN', target: ['ISBN', 'ISSN'], convert: CONVERTERS.ISBN_ISSN },
  // AV
  // AD
  // AN
  { source: 'LA', target: 'language' },
  // CL
  // SF
  { source: 'OT', target: 'original-title', convert: CONVERTERS.RICH_TEXT, when: { target: false } },
  // LK
  { source: 'DO', target: 'DOI' },
  { source: 'CN', target: 'call-number' },
  // DB
  { source: 'DS', target: 'source', when: { target: false } },
  { source: 'IP', target: 'citation-key', when: { target: false } },
  { source: 'RD', target: 'accessed', convert: CONVERTERS.DATE },
  { source: 'ST', target: 'title-short', convert: CONVERTERS.RICH_TEXT },
  { source: 'UR', target: 'URL' },
  // SL
  // LL
  // CR
  {
    source: 'WT',
    target: 'container-title',
    convert: CONVERTERS.RICH_TEXT,
    when: {
      source: { JO: false },
      target: { type: ['post', 'webpage'] }
    }
  },
  {
    source: 'WT',
    target: 'editor',
    convert: CONVERTERS.NAMES,
    when: {
      source: { A2: false },
      target: { type: ['post', 'webpage'] }
    }
  },
  { source: 'WV', target: 'version' },
  { source: 'WP', target: 'available-date', convert: CONVERTERS.DATE },
  // OL
  'PMID',
  'PMCID',
  { source: 'PA', target: 'annote', convert: CONVERTERS.RICH_TEXT }
]

export const translator = new util.Translator(PROP_MAPPINGS)
