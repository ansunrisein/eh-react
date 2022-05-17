import {Domain} from 'effector'
import {History, Location} from 'history'
import {parse} from 'query-string'
import {ApolloClient} from '@apollo/client'
import {Board, BoardLinkConnection, ConnectionRef, createEmptyConnection} from '@eh/shared/api'
import {
  AcceptSuggestionDocument,
  AcceptSuggestionMutation,
  BoardLinkFragmentDoc,
  CreateBoardLinkDocument,
  CreateBoardLinkMutation,
  CreateBoardLinkMutationVariables,
  DeclineSuggestionDocument,
  DeclineSuggestionMutation,
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
  history: History
  apollo: ApolloClient<unknown>
}

export const createBoardLinkEntity = ({domain, apollo, history}: BoardLinkEntityDeps) => {
  const getLinkToken = ({location}: {location: Location}) => {
    const search = parse(location.search).linkToken

    return typeof search === 'string' ? search : null
  }

  const setLinkToken = domain.event<string | null>()
  const resetLinkToken = domain.event()

  const $linkToken = domain
    .store<string | null>(getLinkToken(history))
    .on(setLinkToken, (_, payload) => payload)
    .reset(resetLinkToken)

  history.listen(setLinkToken.prepend(getLinkToken))

  const createBoardLinkFx = domain.effect((variables: CreateBoardLinkMutationVariables) =>
    apollo
      .mutate<CreateBoardLinkMutation, CreateBoardLinkMutationVariables>({
        mutation: CreateBoardLinkDocument,
        variables,
        update: (cache, {data}) => {
          cache.modify({
            id: cache.identify({__typename: 'Board', _id: variables.boardId} as Pick<
              Board,
              '__typename' | '_id'
            >),
            fields: {
              boardLinks: (
                prevLinks: ConnectionRef<BoardLinkConnection> = createEmptyConnection('BoardLink'),
              ): ConnectionRef<BoardLinkConnection> =>
                data?.createBoardLink
                  ? {
                      ...prevLinks,
                      edges: prevLinks.edges.concat({
                        __typename: 'BoardLinkEdge',
                        cursor: data.createBoardLink._id,
                        node: cache.writeFragment({
                          id: `${data.createBoardLink.__typename}:${data.createBoardLink._id}`,
                          data: data.createBoardLink,
                          fragment: BoardLinkFragmentDoc,
                          fragmentName: 'BoardLink',
                        }),
                      }),
                    }
                  : prevLinks,
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

  const acceptSuggestionFx = domain.effect(() =>
    apollo
      .mutate<AcceptSuggestionMutation>({
        mutation: AcceptSuggestionDocument,
      })
      .then(response => response.data?.acceptSuggestion),
  )

  const declineSuggestionFx = domain.effect(() =>
    apollo
      .mutate<DeclineSuggestionMutation>({
        mutation: DeclineSuggestionDocument,
      })
      .then(response => response.data?.declineSuggestion),
  )

  return {
    setLinkToken,
    resetLinkToken,
    $linkToken,

    acceptSuggestionFx,
    declineSuggestionFx,

    createBoardLinkFx,
    editBoardLinkFx,
    removeBoardLinkFx,
  }
}
