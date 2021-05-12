import {useCallback} from 'react'
import {ApolloError, FetchResult, MutationHookOptions, useMutation} from '@apollo/client'
import {UpdateBoard, UpdateBoardVariables} from '../../graphql/types/UpdateBoard'
import {UPDATE_BOARD} from '../../graphql'

export type useUpdateBoardResult = {
  update: (data: UpdateBoardVariables) => Promise<FetchResult<UpdateBoard>>
  loading: boolean
  error?: ApolloError
}

export const useUpdateBoard = (
  options?: MutationHookOptions<UpdateBoard, UpdateBoardVariables>,
): useUpdateBoardResult => {
  const [mutate, {loading, error}] = useMutation<UpdateBoard, UpdateBoardVariables>(
    UPDATE_BOARD,
    options,
  )

  const update = useCallback((variables: UpdateBoardVariables) => mutate({variables}), [mutate])

  return {
    update,
    loading,
    error,
  }
}
