import {ApolloError, FetchResult, MutationHookOptions, useMutation} from '@apollo/client'
import {useCallback} from 'react'
import {Board_board_events} from '@eh/react/features/horizon/graphql/types/Board'
import {CreateEvent, CreateEventVariables} from '../../graphql/types/CreateEvent'
import {CREATE_EVENT} from '../../graphql'

export type Create = (variables: CreateEventVariables) => Promise<FetchResult<CreateEvent>>

export type UseCreateEventResult = {
  create: Create
  loading: boolean
  error?: ApolloError
}

export const useCreateEvent = (
  options?: MutationHookOptions<CreateEvent, CreateEventVariables>,
): UseCreateEventResult => {
  const [mutate, {loading, error}] = useMutation<CreateEvent, CreateEventVariables>(CREATE_EVENT, {
    ...options,
    update: (cache, mutationResult) => {
      const event = mutationResult.data?.createEvent
      cache.modify({
        id: cache.identify({__ref: `Board:${event?.board._id}`, __typename: 'Board'}),
        fields: {
          events: (events: Board_board_events) => {
            const edges = [...events.edges, {cursor: event?._id, node: event}]
            return {
              events: {
                ...events,
                pageInfo: {...events.pageInfo, endCursor: edges[edges.length - 1].cursor},
                edges,
              } as Board_board_events,
            }
          },
        },
      })
    },
  })

  const create = useCallback<Create>(
    variables => mutate({variables: {...variables, pinned: false}}),
    [mutate],
  )

  return {
    create,
    loading,
    error,
  }
}
