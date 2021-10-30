import {Domain, hydrate} from 'effector'

export type SessionEntity = ReturnType<typeof createSessionEntity>

export type SessionEntityConfig = {
  defaultToken?: string | null
  token?: string | null
}

export type SessionEntityDeps = {
  domain: Domain
}

export const createSessionEntity = (
  {domain}: SessionEntityDeps,
  {defaultToken = null, token}: SessionEntityConfig = {},
) => {
  const setToken = domain.event<string | null>()
  const resetToken = domain.event()

  const $token = domain
    .store(defaultToken)
    .on(setToken, (_, token) => token)
    .reset(resetToken)

  hydrate(domain, {
    values: [[$token, token]],
  })

  return {$token, setToken, resetToken}
}
