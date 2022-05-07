import {Domain} from 'effector'
import {ApolloClient} from '@apollo/client'
import {
  SingleEventDocument,
  SingleEventFragment,
  SingleEventQuery,
  SingleEventQueryVariables,
} from '@eh/widgets/single-event/api'

export type SingleEventWidget = ReturnType<typeof createSingleEventWidget>

export type SingleEventWidgetDeps = {
  domain: Domain
  apollo: ApolloClient<unknown>
}

export const createSingleEventWidget = ({domain, apollo}: SingleEventWidgetDeps) => {
  const fetchEventFx = domain.effect((variables: SingleEventQueryVariables) =>
    apollo
      .query<SingleEventQuery, SingleEventQueryVariables>({
        query: SingleEventDocument,
        variables,
        fetchPolicy: 'network-only',
      })
      .then(response => response.data.event || null),
  )

  const reset = domain.event()

  const $event = domain
    .store<SingleEventFragment | null>(null)
    .on(fetchEventFx.doneData, (_, event) => event)
    .reset(fetchEventFx, reset)

  return {
    $event,
    reset,
    fetchEventFx,
  }
}
