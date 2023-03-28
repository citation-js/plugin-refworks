# @citation-js/plugin-refworks

This plugin adds support for the RefWorks Tagged Format.

[![NPM version](https://img.shields.io/npm/v/@citation-js/plugin-refworks.svg)](https://npmjs.org/package/@citation-js/plugin-refworks)
[![Codecov](https://img.shields.io/codecov/c/gh/citation-js/plugin-refworks)](https://app.codecov.io/gh/citation-js/plugin-refworks)
[![NPM total downloads](https://img.shields.io/npm/dt/@citation-js/plugin-refworks.svg)](https://npmcharts.com/compare/@citation-js%2Fplugin-refworks?minimal=true)
![License](https://img.shields.io/npm/l/@citation-js/plugin-refworks.svg)

## Install

```js
npm install @citation-js/plugin-refworks
```

## Use

Install the plugin by `require`-ing it:

```js
require('@citation-js/plugin-refworks')
const { Cite } = require('@citation-js/core')

// ...
```

## Formats

### Input

**`@refworks/file`**

```js
const data = Cite(`RT Journal Article
SR Electronic(1)
A1 Lars G. Willighagen
JF PeerJ Computer Science
A2 Silvio Peroni
VO 5
YR 2019
FD august 12
SP e214
T1 Citation.js: a format-independent, modular bibliography tool for the browser and command line
`)

data.format('data', { format: 'object' }) // returns:
{
  author: [{ family: 'Willighagen', given: 'Lars G.' }],
  editor: [{ family: 'Peroni', given: 'Silvio' }],
  page: 'e214',
  volume: '5',
  'container-title': 'PeerJ Computer Science',
  medium: 'electronic',
  title: 'Citation.js: a format-independent, modular bibliography tool for the browser and command line',
  issued: { 'date-parts': [[2019, 8, 12]] },
  type: 'article-journal'
}
```

### Output

**`refworks`**

```js
data.format('refworks', { format: 'text', lineEnding: '\n' })
```

Options:
  - `format` (string): `'text'` (default; for plain text file) or `'object'` (for array of objects)
  - `lineEnding` (string): e.g. `'\n'` (default) or `'\r\n'` (note that RefWorks might not pick up on the latter)
