import {Domain} from 'effector'
import {ApolloClient} from '@apollo/client'
import {
  CreateBoardDocument,
  CreateBoardMutation,
  CreateBoardMutationVariables,
  EditBoardDocument,
  EditBoardMutation,
  EditBoardMutationVariables,
  RemoveBoardDocument,
  RemoveBoardMutation,
  RemoveBoardMutationVariables,
} from './operations'

export type BoardEntity = ReturnType<typeof createBoardEntity>

export type BoardEntityDeps = {
  domain: Domain
  apollo: ApolloClient<unknown>
}

export const createBoardEntity = ({domain, apollo}: BoardEntityDeps) => {
  const createBoardFx = domain.effect((variables: CreateBoardMutationVariables) =>
    apollo
      .mutate<CreateBoardMutation, CreateBoardMutationVariables>({
        mutation: CreateBoardDocument,
        variables,
      })
      .then(result => result?.data?.createBoard),
  )

  const editBoardFx = domain.effect((variables: EditBoardMutationVariables) =>
    apollo
      .mutate<EditBoardMutation, EditBoardMutationVariables>({
        mutation: EditBoardDocument,
        variables,
      })
      .then(result => result?.data?.updateBoard),
  )

  const removeBoardFx = domain.effect((variables: RemoveBoardMutationVariables) =>
    apollo
      .mutate<RemoveBoardMutation, RemoveBoardMutationVariables>({
        mutation: RemoveBoardDocument,
        variables,
      })
      .then(result => result?.data?.removeBoard),
  )

  return {
    createBoardFx,
    editBoardFx,
    removeBoardFx,
  }
}
