import {useCallback} from 'react'
import {ApolloError, FetchResult, useMutation} from '@apollo/client'
import {Board_board_events} from '@eh/react/features/horizon/graphql/types/Board'
import {RemoveEvent, RemoveEventVariables} from '../../graphql/types/RemoveEvent'
import {REMOVE_EVENT} from '../../graphql'

export type UseRemoveEventResult = {
  remove: (data: RemoveEventVariables) => Promise<FetchResult<RemoveEvent>>
  loading: boolean
  error?: ApolloError
}

export const useRemoveEvent = (): UseRemoveEventResult => {
  const [mutate, {loading, error}] = useMutation<RemoveEvent, RemoveEventVariables>(REMOVE_EVENT, {
    update: (cache, mutationResult) => {
      const event = mutationResult.data?.removeEvent
      cache.modify({
        id: cache.identify({__ref: `Board:${event?.board._id}`, __typename: 'Board'}),
        fields: {
          events: (events: Board_board_events) => {
            const edges = events.edges.filter(e => e.cursor !== event?._id)
            return {
              ...events,
              pageInfo: {...events.pageInfo, endCursor: edges[edges.length - 1].cursor},
              edges,
            } as Board_board_events
          },
        },
      })
    },
  })

  const remove = useCallback((variables: RemoveEventVariables) => mutate({variables}), [mutate])

  return {
    remove,
    loading,
    error,
  }
}
