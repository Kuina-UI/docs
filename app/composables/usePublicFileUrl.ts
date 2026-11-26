export function usePublicFileUrl() {
  const appBaseUrl = useRuntimeConfig().app.baseURL.replace(/\/$/, '')

  /** Prefix a root-relative `public/` path with the app base URL, as the deployed docs are served from `/docs/`. */
  function resolvePublicFileUrl(fileUrl: string) {
    return fileUrl.startsWith('/') ? `${appBaseUrl}${fileUrl}` : fileUrl
  }

  return { resolvePublicFileUrl }
}
