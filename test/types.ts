import { plugins } from '@citation-js/core'
import '..'

const b = plugins.output.format('refworks', [])

type Expect<T extends true> = T
type IsString<T> = T extends String ? true : false

// @ts-ignore
type Tests = [
  Expect<IsString<typeof b>>
]
