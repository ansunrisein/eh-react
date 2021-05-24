import {ApolloQueryResult, useQuery} from '@apollo/client'
import {ME} from '../../graphql'
import {Me, Me_me} from '../../graphql/types/Me'

export type UseMeResult = {
  me: Me_me | undefined | null
  loading: boolean
  refetch: () => Promise<ApolloQueryResult<Me>>
}

export const useMe = (): UseMeResult => {
  const {data, refetch, loading} = useQuery<Me>(ME, {
    notifyOnNetworkStatusChange: true,
  })

  return {
    me: data?.me,
    loading,
    refetch,
  }
}
