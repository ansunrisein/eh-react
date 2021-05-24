import {ApolloError, FetchResult, MutationHookOptions, useMutation} from '@apollo/client'
import {useCallback} from 'react'
import {UPDATE_EVENT} from '../../graphql'
import {UpdateEvent, UpdateEventVariables} from '../../graphql/types/UpdateEvent'

export type Update = (variables: UpdateEventVariables) => Promise<FetchResult<UpdateEvent>>

export type UseUpdateEventResult = {
  update: Update
  loading: boolean
  error?: ApolloError
}

export const useUpdateEvent = (
  options?: MutationHookOptions<UpdateEvent, UpdateEventVariables>,
): UseUpdateEventResult => {
  const [mutate, {loading, error}] = useMutation<UpdateEvent, UpdateEventVariables>(
    UPDATE_EVENT,
    options,
  )

  const update = useCallback<Update>(variables => mutate({variables}), [mutate])

  return {
    update,
    loading,
    error,
  }
}
