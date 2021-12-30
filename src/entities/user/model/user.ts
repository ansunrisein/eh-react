import {Domain} from 'effector'
import {ApolloClient} from '@apollo/client'
import {
  EditUserInfoDocument,
  EditUserInfoMutation,
  EditUserInfoMutationVariables,
} from '@eh/entities/user'

export type UserEntity = ReturnType<typeof createUserEntity>

export type UserEntityDeps = {
  domain: Domain
  apollo: ApolloClient<unknown>
}

export const createUserEntity = ({domain, apollo}: UserEntityDeps) => {
  const editUserInfoFx = domain.effect((variables: EditUserInfoMutationVariables) =>
    apollo
      .mutate<EditUserInfoMutation, EditUserInfoMutationVariables>({
        mutation: EditUserInfoDocument,
        variables,
      })
      .then(result => result.data?.updateProfile),
  )

  return {
    editUserInfoFx,
  }
}
