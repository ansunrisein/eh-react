import {useQuery} from '@apollo/client'
import {ME} from '../../graphql'
import {Me, Me_me} from '../../graphql/types/Me'

export type UseMeResult = {
  me: Me_me | undefined | null
  loading: boolean
}

export const useMe = (): UseMeResult => {
  const {data, loading} = useQuery<Me>(ME)

  return {
    me: data?.me,
    loading,
  }
}
