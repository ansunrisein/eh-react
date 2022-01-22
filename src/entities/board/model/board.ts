import {Domain} from 'effector'
import {ApolloClient, gql} from '@apollo/client'
import {BoardConnection, ConnectionRef, createEmptyConnection} from '@eh/shared/api'
import {
  BoardFragmentDoc,
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
        update: (cache, {data}) => {
          cache.modify({
            fields: {
              dashboard: (
                prevBoards: ConnectionRef<BoardConnection> = createEmptyConnection('Board'),
              ): ConnectionRef<BoardConnection> =>
                data?.createBoard
                  ? {
                      ...prevBoards,
                      pageInfo: {
                        ...prevBoards.pageInfo,
                        endCursor: data.createBoard._id,
                      },
                      edges: prevBoards.edges.concat({
                        __typename: 'BoardEdge',
                        cursor: data.createBoard._id,
                        node: cache.writeFragment({
                          id: `${data.createBoard.__typename}:${data.createBoard._id}`,
                          data: {
                            ...data.createBoard,
                            events: createEmptyConnection('Event'),
                          },
                          fragment: gql`
                            fragment BoardWithEmptyEvents on Board {
                              ...Board
                              events(page: {first: 0}) {
                                pageInfo {
                                  __typename
                                  endCursor
                                  hasNextPage
                                  hasPreviousPage
                                  startCursor
                                }
                                edges {
                                  cursor
                                  node {
                                    __typename
                                    _id
                                  }
                                }
                              }
                            }
                            ${BoardFragmentDoc}
                          `,
                          fragmentName: 'BoardWithEmptyEvents',
                        }),
                      }),
                    }
                  : prevBoards,
            },
          })
        },
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

  return {
    createBoardFx,
    editBoardDescriptionFx,
    editBoardVisibilityFx,
    removeBoardFx,
  }
}
