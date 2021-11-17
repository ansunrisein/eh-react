import '@eh/shared/lib/router'

declare module '@eh/shared/lib/router' {
  export interface ApplicationRoutes {
    dashboard: '/'
    board: `/board/${string}`
    id: '/id'
  }
}
