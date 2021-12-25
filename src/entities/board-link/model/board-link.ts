import {Domain} from 'effector'
import {ApolloClient} from '@apollo/client'
import {BoardFragment, BoardLinkFragmentDoc} from '@eh/shared/api'
import {
  CreateBoardLinkDocument,
  CreateBoardLinkMutation,
  CreateBoardLinkMutationVariables,
  EditBoardLinkDocument,
  EditBoardLinkMutation,
  EditBoardLinkMutationVariables,
  RemoveBoardLinkDocument,
  RemoveBoardLinkMutation,
  RemoveBoardLinkMutationVariables,
} from '../api'

export type BoardLinkEntity = ReturnType<typeof createBoardLinkEntity>

export type BoardLinkEntityDeps = {
  domain: Domain
  apollo: ApolloClient<unknown>
}

export const createBoardLinkEntity = ({domain, apollo}: BoardLinkEntityDeps) => {
  const createBoardLinkFx = domain.effect((variables: CreateBoardLinkMutationVariables) =>
    apollo
      .mutate<CreateBoardLinkMutation, CreateBoardLinkMutationVariables>({
        mutation: CreateBoardLinkDocument,
        variables,
        update: (cache, {data}) => {
          cache.modify({
            id: cache.identify({__typename: 'Board', _id: variables.boardId} as Pick<
              BoardFragment,
              '__typename' | '_id'
            >),
            fields: {
              boardLinks: (links: unknown[]): unknown[] =>
                data?.createBoardLink
                  ? links.concat(
                      cache.writeFragment({
                        id: `${data.createBoardLink.__typename}:${data.createBoardLink._id}`,
                        data: data.createBoardLink,
                        fragment: BoardLinkFragmentDoc,
                        fragmentName: 'BoardLink',
                      }),
                    )
                  : links,
            },
          })
        },
      })
      .then(result => result.data?.createBoardLink),
  )

  const editBoardLinkFx = domain.effect((variables: EditBoardLinkMutationVariables) =>
    apollo
      .mutate<EditBoardLinkMutation, EditBoardLinkMutationVariables>({
        mutation: EditBoardLinkDocument,
        variables,
      })
      .then(result => result.data?.updateBoardLink),
  )

  const removeBoardLinkFx = domain.effect((variables: RemoveBoardLinkMutationVariables) =>
    apollo
      .mutate<RemoveBoardLinkMutation, RemoveBoardLinkMutationVariables>({
        mutation: RemoveBoardLinkDocument,
        variables,
        update: (cache, {data}) => {
          cache.evict({id: `BoardLink:${data?.removeBoardLink?._id}`})
        },
      })
      .then(result => result?.data?.removeBoardLink),
  )

  return {
    createBoardLinkFx,
    editBoardLinkFx,
    removeBoardLinkFx,
  }
}
