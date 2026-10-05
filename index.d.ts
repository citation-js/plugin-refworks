import type { CSL } from '@citation-js/core'

interface ReferRecord {
  scheme: 'refer',
  fields: Record<string, string|string[]>
}

declare module '@citation-js/core' {
  namespace plugins {
    namespace input {
      interface Formats {
        '@refworks/file': (input: string) => Array<ReferRecord>
        '@refworks/record': (input: ReferRecord) => CSL
      }
    }

    namespace output {
      interface Formats {
        refworks:
          | ((options: { format: 'object', lineEnding?: string }) => Array<ReferRecord>)
          | ((options?: { format?: 'text', lineEnding?: string }) => string)
      }
    }
  }
}
