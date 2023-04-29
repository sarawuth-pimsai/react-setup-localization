# Setup Localization (Multi Namespace)

## Setup Project

```
yarn create vite
```

## Install Dependencies Package

```
yarn add i18next react-i18next
```

### Directory Structure

```
src
- @types
  - i18next.d.ts
- locales
  - en
    - common.json
    - home.json
    - index.ts
  - th
    - common.json
    - home.json
    - index.ts
  i18n.ts
```

### i18next.d.ts (@types/i18next.d.ts)

```
import i18next from 'i18next'
import { defaultNS, resources } from '@locales/i18n'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: (typeof resources)['en']
  }
}

```

### i18n.ts (locales/i18n.ts)

```
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from '@locales/en'
import th from '@locales/th'

export const defaultNS = 'common'
export const resources = {
  en,
  th,
}

i18next.use(initReactI18next).init({
  lng: 'en',
  defaultNS,
  resources,
})

```

### index.ts (locales/en/index.ts, locales/th/index.ts)

```
import common from './common.json'
import home from './home.json'

export default { common, home }
```

### common.json (locales/en/common.json, locales/th/common.json)

```
{
    "key":"value"
}
```
