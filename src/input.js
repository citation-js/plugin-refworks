import { translator } from './shared.js'

function parseRecord (record) {
  const fields = {}

  for (const line of record.split(/\n/g)) {
    let [field, ...value] = line.split(' ')
    value = value.join(' ')
    field = field.toUpperCase()

    if (Array.isArray(fields[field])) {
      fields[field].push(value)
    } else if (field in fields) {
      fields[field] = [fields[field], value]
    } else {
      fields[field] = value
    }
  }

  return { scheme: 'refworks', fields }
}

export default {
  '@refworks/file': {
    parse (file) {
      return file.trim().replace(/\r\n?/g, '\n').split(/\n\n/).map(parseRecord)
    },
    parseType: {
      dataType: 'String',
      tokenList: { token: /^([A-Z][0-9A-Z] |$)/, split: /\r\n?|\n/g, trim: false }
    }
  },

  '@refworks/record': {
    parse (record) {
      return translator.convertToTarget(record.fields)
    },
    parseType: {
      dataType: 'SimpleObject',
      propertyConstraint: {
        props: 'scheme',
        value (value) { return value === 'refworks' }
      }
    }
  }
}
