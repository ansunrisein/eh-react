export type AuthContextValue = {
  login: () => Promise<void>
  logout: () => Promise<void>
  user?: {token: string}
  loading: boolean
}
