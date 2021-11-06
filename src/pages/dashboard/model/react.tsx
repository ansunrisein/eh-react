import {useDashboardQuery} from './operations'

export const useBoards = () => {
  const {data, loading} = useDashboardQuery()
  return {
    boards: data?.dashboard,
    loading,
  }
}
