import { translator } from './shared.js'

function translateRecord (record) {
  const fields = translator.convertToSource(record)
  for (const field in fields) {
    if (Array.isArray(fields[field]) && fields[field].length === 1) {
      fields[field] = fields[field][0]
    }
  }
  fields.RT = fields.RT || 'Book, Whole'
  return { scheme: 'refworks', fields }
}

function formatRecord ({ fields }, lineEnding) {
  let record = 'RT ' + fields.RT + lineEnding

  for (const field in fields) {
    if (field === 'RT') { continue }
    const values = [].concat(fields[field])
    for (const value of values) {
      record += field + ' ' + value + lineEnding
    }
  }

  return record
}

export default {
  /**
   * @param {Object} [options]
   * @param {String} [options.format="text"] - 'text' or 'object'
   * @param {String} [options.lineEnding="\n"]
   */
  refer (csl, options = {}) {
    const { format = 'text', lineEnding = '\n' } = options
    const records = csl.map(translateRecord)
    if (format === 'object') {
      return records
    } else {
      return records.map(record => formatRecord(record, lineEnding)).join(lineEnding)
    }
  }
}
