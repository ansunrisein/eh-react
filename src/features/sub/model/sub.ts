import {Domain} from 'effector'
import {ApolloClient} from '@apollo/client'
import {
  CreateSubDocument,
  CreateSubMutation,
  CreateSubMutationVariables,
  RemoveSubDocument,
  RemoveSubMutation,
  RemoveSubMutationVariables,
} from '../api'

export type SubFeature = ReturnType<typeof createSubFeature>

export type SubFeatureDeps = {
  domain: Domain
  apollo: ApolloClient<unknown>
}

export const createSubFeature = ({domain, apollo}: SubFeatureDeps) => {
  const createSubFx = domain.effect((variables: CreateSubMutationVariables) =>
    apollo
      .mutate<CreateSubMutation, CreateSubMutationVariables>({
        mutation: CreateSubDocument,
        variables,
      })
      .then(result => result.data?.createSub),
  )

  const removeSubFx = domain.effect((variables: RemoveSubMutationVariables) =>
    apollo
      .mutate<RemoveSubMutation, RemoveSubMutationVariables>({
        mutation: RemoveSubDocument,
        variables,
      })
      .then(result => result.data?.removeSub),
  )

  return {
    createSubFx,
    removeSubFx,
  }
}
