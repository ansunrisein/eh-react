import {useCallback} from 'react'
import {ApolloError, FetchResult, MutationHookOptions, useMutation} from '@apollo/client'
import noop from 'noop6'
import {CREATE_BOARD} from '../../graphql'
import {CreateBoard, CreateBoardVariables} from '../../graphql/types/CreateBoard'

export type UseCreateBoardResult = {
  create: (board: CreateBoardVariables) => Promise<FetchResult<CreateBoard>>
  loading: boolean
  error?: ApolloError
}

export const useCreateBoard = (
  options?: MutationHookOptions<CreateBoard, CreateBoardVariables>,
): UseCreateBoardResult => {
  const [mutate, {loading, error}] = useMutation(CREATE_BOARD, {
    ...options,
    update: cache => {
      cache.modify({fields: noop})
    },
  })

  const create = useCallback((variables: CreateBoardVariables) => mutate({variables}), [mutate])

  return {
    create,
    loading,
    error,
  }
}
