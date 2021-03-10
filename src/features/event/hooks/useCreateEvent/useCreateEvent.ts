import {ApolloError, FetchResult, useMutation} from '@apollo/client'
import {useCallback} from 'react'
import {CreateEvent, CreateEventVariables} from '../../graphql/types/CreateEvent'
import {CREATE_EVENT} from '../../graphql'

export type Create = (variables: CreateEventVariables) => Promise<FetchResult<CreateEvent>>

export type UseCreateEventResult = {
  create: Create
  loading: boolean
  error?: ApolloError
}

export const useCreateEvent = (): UseCreateEventResult => {
  const [mutate, {loading, error}] = useMutation<CreateEvent, CreateEventVariables>(CREATE_EVENT)

  const create = useCallback<Create>(variables => mutate({variables}), [mutate])

  return {
    create,
    loading,
    error,
  }
}
