import {attach, Domain} from 'effector'
import {ApolloClient} from '@apollo/client'
import {
  BoardParticipantsDocument,
  BoardParticipantsFragment,
  BoardParticipantsQuery,
  BoardParticipantsQueryVariables,
  RemoveBoardParticipantsDocument,
  RemoveBoardParticipantsMutation,
  RemoveBoardParticipantsMutationVariables,
} from '../api'

export type ParticipantsDeps = {
  domain: Domain
  apollo: ApolloClient<unknown>
}

export const createParticipants = ({domain, apollo}: ParticipantsDeps) => {
  const reset = domain.event()

  const fetchBoardParticipantsFx = domain.effect((variables: BoardParticipantsQueryVariables) =>
    apollo
      .query<BoardParticipantsQuery, BoardParticipantsQueryVariables>({
        query: BoardParticipantsDocument,
        variables,
        fetchPolicy: 'network-only',
      })
      .then(response => response.data.board?.participants),
  )

  const removeBoardParticipantsFx = domain.effect(
    (variables: RemoveBoardParticipantsMutationVariables) =>
      apollo
        .mutate<RemoveBoardParticipantsMutation, RemoveBoardParticipantsMutationVariables>({
          mutation: RemoveBoardParticipantsDocument,
          variables,
        })
        .then(response => response.data?.removeBoardParticipants),
  )

  const $boardParticipants = domain
    .store<BoardParticipantsFragment['participants'] | null>(null)
    .on(fetchBoardParticipantsFx.doneData, (_, newBoardParticipants) => newBoardParticipants)
    .on(removeBoardParticipantsFx.doneData, (participants, payload) => {
      const result = payload?.map(e => e._id)

      return (
        participants && {
          ...participants,
          edges: participants.edges.filter(edge => !result?.includes(edge.node._id)),
        }
      )
    })
    .reset(reset)

  const $latestMyBoardsVariables = domain
    .store<BoardParticipantsQueryVariables | null>(null)
    .on(fetchBoardParticipantsFx, (_, payload) => payload)
    .reset(reset)

  const fetchMoreBoardParticipantsFx = attach({
    source: {$latestMyBoardsVariables, $boardParticipants},
    mapParams: (params: void, source) =>
      source.$latestMyBoardsVariables &&
      source.$boardParticipants && {
        ...source.$latestMyBoardsVariables,
        page: {
          after: source.$boardParticipants.pageInfo.endCursor,
          first: source.$latestMyBoardsVariables.page.first,
        },
      },
    effect: domain.effect((variables: BoardParticipantsQueryVariables | null) => {
      if (!variables) {
        throw new Error('Fetch base BoardParticipants query first!')
      }

      return fetchBoardParticipantsFx(variables)
    }),
  })

  return {
    $boardParticipants,

    fetchBoardParticipantsFx,
    fetchMoreBoardParticipantsFx,
    removeBoardParticipantsFx,

    reset,
  }
}
