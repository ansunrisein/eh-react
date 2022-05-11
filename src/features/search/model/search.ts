import {Domain} from 'effector'

export type SearchFeature = ReturnType<typeof createSearchFeature>

export type SearchFeatureDeps = {
  domain: Domain
}

export const createSearchFeature = ({domain}: SearchFeatureDeps) => {
  const set = domain.event<string>()
  const reset = domain.event()

  const $search = domain
    .store<string>('')
    .on(set, (_, payload) => payload)
    .reset(reset)

  return {
    $search,
    set,
    reset,
  }
}
