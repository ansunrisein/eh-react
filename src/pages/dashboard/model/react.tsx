import {useDashboardQuery} from '../api'

export const useBoards = () => {
  const {data, loading} = useDashboardQuery()
  return {
    boards: data?.dashboard,
    loading,
  }
}
