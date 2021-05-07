export type AuthContextValue = {
  login: () => Promise<void>
  user?: {token: string}
  loading: boolean
}
