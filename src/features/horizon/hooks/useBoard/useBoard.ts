import {ApolloError, useQuery} from '@apollo/client'
import {Board, Board_board, BoardVariables} from '../../graphql/types/Board'
import {BOARD} from '../../graphql'

export type UseBoardResult = {
  board?: Board_board
  loading: boolean
  error?: ApolloError
}

export const useBoard = (variables: BoardVariables): UseBoardResult => {
  const {data, loading, error} = useQuery<Board, BoardVariables>(BOARD, {variables})

  return {
    board: data?.board,
    loading,
    error,
  }
}
