import {useFullBoardQuery} from '../api'

export const useFullBoard = (id: string) => {
  const {data, loading} = useFullBoardQuery({variables: {id}})

  return {
    board: data?.board,
    loading,
  }
}
