import {ApolloError, FetchResult, MutationHookOptions, useMutation} from '@apollo/client'
import {useCallback} from 'react'
import {CreateEvent, CreateEventVariables} from '../../graphql/types/CreateEvent'
import {CREATE_EVENT} from '../../graphql'

export type Create = (variables: CreateEventVariables) => Promise<FetchResult<CreateEvent>>

export type UseCreateEventResult = {
  create: Create
  loading: boolean
  error?: ApolloError
}

export const useCreateEvent = (
  options?: MutationHookOptions<CreateEvent, CreateEventVariables>,
): UseCreateEventResult => {
  const [mutate, {loading, error}] = useMutation(CREATE_EVENT, options)

  const create = useCallback<Create>(variables => mutate({variables}), [mutate])

  return {
    create,
    loading,
    error,
  }
}
