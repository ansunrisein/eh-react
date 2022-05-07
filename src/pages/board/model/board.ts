import {attach, combine, Domain} from 'effector'
import {ApolloClient} from '@apollo/client'
import {isDefined} from '@eh/shared/lib/is-defined'
import {EventEntity, EventFragment} from '@eh/entities/event'
import {SessionEntity} from '@eh/entities/session'
import {
  BoardPageDocument,
  BoardPageFragment,
  BoardPageQuery,
  BoardPageQueryVariables,
  MoreBoardPageEventsDocument,
  MoreBoardPageEventsQuery,
  MoreBoardPageEventsQueryVariables,
} from '@eh/pages/board/api'

export type BoardPage = ReturnType<typeof createBoardPage>

export type BoardPageDeps = {
  domain: Domain
  session: SessionEntity
  event: EventEntity
  apollo: ApolloClient<unknown>
}

export const createBoardPage = ({domain, session, event, apollo}: BoardPageDeps) => {
  const reset = domain.event()

  const fetchBoardFx = domain.effect((variables: BoardPageQueryVariables) =>
    apollo
      .query<BoardPageQuery, BoardPageQueryVariables>({
        query: BoardPageDocument,
        variables,
        fetchPolicy: 'network-only',
      })
      .then(response => response.data.board),
  )

  const fetchMoreEventsFx = domain.effect((variables: MoreBoardPageEventsQueryVariables) =>
    apollo
      .query<MoreBoardPageEventsQuery, MoreBoardPageEventsQueryVariables>({
        query: MoreBoardPageEventsDocument,
        variables,
        fetchPolicy: 'network-only',
      })
      .then(response => response.data?.board),
  )

  const $board = domain
    .store<BoardPageFragment | null>(null)
    .on(fetchBoardFx.doneData, (_, newBoard) => newBoard)
    .on(fetchMoreEventsFx.doneData, (oldBoard, newBoard) => {
      if (!newBoard?.events?.edges?.length || !oldBoard) {
        return oldBoard
      }

      return {
        ...oldBoard,
        events: newBoard.events,
      }
    })
    .on(event.editEventFx.doneData, (board, newEvent) => {
      if (!board || !newEvent) {
        return board
      }

      return {
        ...board,
        events: {
          ...board.events,
          edges: board.events.edges.map(edge =>
            edge.node._id === newEvent._id ? {...edge, node: newEvent} : edge,
          ),
        },
      }
    })
    .on(event.removeEventFx.doneData, (board, removedEvent) => {
      if (!board || !removedEvent) {
        return board
      }

      return {
        ...board,
        events: {
          ...board.events,
          edges: board.events.edges.filter(edge => edge.node._id !== removedEvent._id),
        },
      }
    })
    .reset(reset)

  const resetNewEvents = domain.event()

  const $newEvents = domain
    .store<EventFragment[]>([])
    .on(event.createEventFx.doneData.filter({fn: isDefined}), (events, newEvent) => [
      newEvent,
      ...events,
    ])
    .on(event.removeEventFx.doneData.filter({fn: isDefined}), (events, removedEvent) =>
      events.filter(event => event._id !== removedEvent._id),
    )
    .reset(resetNewEvents)

  const $latestVariables = domain
    .store<MoreBoardPageEventsQueryVariables | null>(null)
    .on(fetchBoardFx, (_, payload) => payload)
    .reset(reset)

  const fetchMoreFx = attach({
    source: {$latestVariables, $board},
    mapParams: (params: void, source) =>
      source.$board && source.$latestVariables
        ? {
            ...source.$latestVariables,
            eventsPage: {
              after: source.$board.events.pageInfo.endCursor,
              first: source.$latestVariables.eventsPage.first,
            },
          }
        : null,
    effect: domain.effect((variables: MoreBoardPageEventsQueryVariables | null) => {
      if (variables) {
        return fetchMoreEventsFx(variables)
      }
      return null
    }),
  })

  const $isMyBoard = combine(
    $board,
    session.$me,
    (board, me) => !!board && !!me && me._id === board.user._id,
  )

  return {
    reset,
    resetNewEvents,
    fetchBoardFx,
    fetchMoreEventsFx,
    $newEvents,
    $board,
    $latestVariables,
    $isMyBoard,
    fetchMoreFx,
  }
}
