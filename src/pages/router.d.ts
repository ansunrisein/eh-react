import '@eh/shared/lib/router'

declare module '@eh/shared/lib/router' {
  export interface ApplicationRoutes {
    settings: '/settings'
    board: `/board/${string}`
    dashboard: '/'
    id: '/id'
  }
}
