import {useCallback} from 'react'
import {ApolloError, FetchResult, useMutation} from '@apollo/client'
import {UpdateAvatar, UpdateAvatarVariables} from '../../graphql/types/UpdateAvatar'
import {UPDATE_AVATAR} from '../../graphql'

export type UseUpdateAvatarResult = {
  updateAvatar: (avatar: string | null) => Promise<FetchResult<UpdateAvatar>>
  loading: boolean
  error?: ApolloError
}

export const useUpdateAvatar = (): UseUpdateAvatarResult => {
  const [mutate, {loading, error}] = useMutation<UpdateAvatar, UpdateAvatarVariables>(UPDATE_AVATAR)

  const updateAvatar = useCallback((avatar: string | null) => mutate({variables: {avatar}}), [
    mutate,
  ])

  return {
    updateAvatar,
    loading,
    error,
  }
}
