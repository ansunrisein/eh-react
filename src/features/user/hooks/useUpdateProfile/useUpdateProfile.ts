import {useCallback} from 'react'
import {ApolloError, FetchResult, useMutation} from '@apollo/client'
import {UPDATE_PROFILE} from '../../graphql'
import {UpdateProfile, UpdateProfileVariables} from '../../graphql/types/UpdateProfile'

export type UseUpdateProfileResult = {
  updateProfile: (data: UpdateProfileVariables) => Promise<FetchResult<UpdateProfile>>
  loading: boolean
  error?: ApolloError
}

export const useUpdateProfile = (): UseUpdateProfileResult => {
  const [mutate, {loading, error}] = useMutation<UpdateProfile, UpdateProfileVariables>(
    UPDATE_PROFILE,
  )

  const updateProfile = useCallback((variables: UpdateProfileVariables) => mutate({variables}), [
    mutate,
  ])

  return {
    updateProfile,
    loading,
    error,
  }
}
