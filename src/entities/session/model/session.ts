import {Domain, forward, hydrate} from 'effector'
import {ApolloClient} from '@apollo/client'
import {MeFragment} from '@eh/shared/api'
import {MeDocument, MeQuery} from './operations'

export type SessionEntity = ReturnType<typeof createSessionEntity>

export type SessionEntityConfig = {
  defaultToken?: string | null
  defaultMe?: MeFragment | null
  token?: string | null
}

export type SessionEntityDeps = {
  domain: Domain
  apollo: ApolloClient<unknown>
}

export const createSessionEntity = (
  {domain, apollo}: SessionEntityDeps,
  {defaultToken = null, defaultMe = null, token}: SessionEntityConfig = {},
) => {
  const setToken = domain.event<string | null>()
  const resetToken = domain.event()

  const fetchMeFx = domain.effect(() =>
    apollo
      .query<MeQuery>({query: MeDocument, fetchPolicy: 'no-cache'})
      .then(response => response.data?.me || null),
  )

  const $me = domain
    .store(defaultMe)
    .on(fetchMeFx.doneData, (_, me) => me)
    .reset(resetToken, fetchMeFx.fail)
  const $isAuthenticated = $me.map(Boolean)
  const $token = domain
    .store(defaultToken)
    .on(setToken, (_, token) => token)
    .reset(resetToken)

  forward({
    from: [setToken, resetToken],
    to: domain.effect(() => apollo.cache.reset()),
  })

  forward({
    from: setToken,
    to: fetchMeFx,
  })

  hydrate(domain, {
    values: [[$token, token]],
  })

  return {
    $me,
    $token,
    $isAuthenticated,
    setToken,
    resetToken,
    fetchMeFx,
  }
}
