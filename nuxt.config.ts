import { fileURLToPath } from 'node:url'

const kuinaLibraryDirectory = fileURLToPath(new URL('..', import.meta.url))

export default defineNuxtConfig({
  extends: ['docus'],
  site: {
    name: 'Kuina UI',
  },
  colorMode: {
    dataValue: 'theme',
  },
  alias: {
    '@kuina-ui/vue': fileURLToPath(new URL('../src/index.ts', import.meta.url)),
  },
  vite: {
    resolve: {
      dedupe: ['vue'],
    },
    server: {
      fs: {
        allow: [kuinaLibraryDirectory],
      },
    },
  },
  mdc: {
    highlight: {
      noApiRoute: false,
    },
  },
})
