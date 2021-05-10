import {useCallback} from 'react'
import {ApolloError, FetchResult, MutationHookOptions, useMutation} from '@apollo/client'
import {UpdateBoard, UpdateBoardVariables} from '../../graphql/types/UpdateBoard'
import {UPDATE_BOARD} from '../../graphql'

export type UseBoardSettingsResult = {
  update: (data: UpdateBoardVariables) => Promise<FetchResult<UpdateBoard>>
  loading: boolean
  error?: ApolloError
}

export const useBoardSettings = (
  options?: MutationHookOptions<UpdateBoard, UpdateBoardVariables>,
): UseBoardSettingsResult => {
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
