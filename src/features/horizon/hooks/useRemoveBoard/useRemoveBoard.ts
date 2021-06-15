import {useCallback} from 'react'
import {ApolloError, FetchResult, useMutation} from '@apollo/client'
import noop from 'noop6'
import {RemoveBoard, RemoveBoardVariables} from '../../graphql/types/RemoveBoard'
import {REMOVE_BOARD} from '../../graphql'

export type UseRemoveBoardResult = {
  remove: (data: RemoveBoardVariables) => Promise<FetchResult<RemoveBoard>>
  loading: boolean
  error?: ApolloError
}

export const useRemoveBoard = (): UseRemoveBoardResult => {
  const [mutate, {loading, error}] = useMutation<RemoveBoard, RemoveBoardVariables>(REMOVE_BOARD, {
    update: cache => cache.modify({fields: noop}),
  })

  const remove = useCallback((variables: RemoveBoardVariables) => mutate({variables}), [mutate])

  return {
    remove,
    loading,
    error,
  }
}
