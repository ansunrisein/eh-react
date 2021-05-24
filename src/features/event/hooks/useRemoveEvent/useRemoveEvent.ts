import {useCallback} from 'react'
import {ApolloError, FetchResult, useMutation} from '@apollo/client'
import {RemoveEvent, RemoveEventVariables} from '../../graphql/types/RemoveEvent'
import {REMOVE_EVENT} from '../../graphql'

export type UseRemoveEventResult = {
  remove: (data: RemoveEventVariables) => Promise<FetchResult<RemoveEvent>>
  loading: boolean
  error?: ApolloError
}

export const useRemoveEvent = (id: string): UseRemoveEventResult => {
  const [mutate, {loading, error}] = useMutation<RemoveEvent, RemoveEventVariables>(REMOVE_EVENT, {
    variables: {id},
  })

  const remove = useCallback((variables: RemoveEventVariables) => mutate({variables}), [mutate])

  return {
    remove,
    loading,
    error,
  }
}
