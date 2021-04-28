import {ApolloError, ApolloQueryResult, useQuery} from '@apollo/client'
import {useCallback} from 'react'
import {Board, Board_board, BoardVariables} from '../../graphql/types/Board'
import {BOARD} from '../../graphql'

export type UseBoardResult = {
  board?: Board_board
  loading: boolean
  error?: ApolloError
  more: () => Promise<ApolloQueryResult<Board>>
}

export const useBoard = (variables: Omit<BoardVariables, 'page'>): UseBoardResult => {
  const {data, loading, error, fetchMore} = useQuery<Board, BoardVariables>(BOARD, {
    variables: {
      ...variables,
      page: {first: 25},
    },
  })

  const board = data?.board

  const more = useCallback(
    () =>
      fetchMore({
        variables: {
          ...variables,
          page: {
            first: 25,
            after: board?.events.pageInfo.endCursor,
          },
        },
      }),
    [board, fetchMore, variables],
  )

  return {
    board,
    loading,
    error,
    more,
  }
}
