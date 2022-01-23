import {Domain} from 'effector'
import {ApolloClient} from '@apollo/client'
import {isDefined} from '@eh/shared/lib/is-defined'
import {
  BoardFragment,
  CreateBoardDocument,
  CreateBoardMutation,
  CreateBoardMutationVariables,
  EditBoardDescriptionDocument,
  EditBoardDescriptionMutation,
  EditBoardDescriptionMutationVariables,
  EditBoardVisibilityDocument,
  EditBoardVisibilityMutation,
  EditBoardVisibilityMutationVariables,
  RemoveBoardDocument,
  RemoveBoardMutation,
  RemoveBoardMutationVariables,
} from '../api'

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

  const editBoardDescriptionFx = domain.effect((variables: EditBoardDescriptionMutationVariables) =>
    apollo
      .mutate<EditBoardDescriptionMutation, EditBoardDescriptionMutationVariables>({
        mutation: EditBoardDescriptionDocument,
        variables,
      })
      .then(result => result?.data?.updateBoardDescription),
  )

  const editBoardVisibilityFx = domain.effect((variables: EditBoardVisibilityMutationVariables) =>
    apollo
      .mutate<EditBoardVisibilityMutation, EditBoardVisibilityMutationVariables>({
        mutation: EditBoardVisibilityDocument,
        variables,
      })
      .then(result => result?.data?.updateBoardVisibility),
  )

  const removeBoardFx = domain.effect((variables: RemoveBoardMutationVariables) =>
    apollo
      .mutate<RemoveBoardMutation, RemoveBoardMutationVariables>({
        mutation: RemoveBoardDocument,
        variables,
        update: (cache, {data}) => {
          cache.evict({id: `Board:${data?.removeBoard?._id}`})
        },
      })
      .then(result => result?.data?.removeBoard),
  )

  const resetNewBoards = domain.event()

  const $newBoards = domain
    .store<BoardFragment[]>([])
    .on(createBoardFx.doneData.filter({fn: isDefined}), (boards, newBoard) => [newBoard, ...boards])
    .on(removeBoardFx.doneData.filter({fn: isDefined}), (boards, removedBoard) =>
      boards.filter(board => board._id !== removedBoard._id),
    )
    .reset(resetNewBoards)

  return {
    createBoardFx,
    editBoardDescriptionFx,
    editBoardVisibilityFx,
    removeBoardFx,
    resetNewBoards,
    $newBoards,
  }
}
