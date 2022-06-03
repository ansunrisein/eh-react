/* eslint-disable */
// noinspection GraphQLSchemaValidation,ES6PreferShortImport,JSUnusedGlobalSymbols
// noinspection JSUnusedGlobalSymbols

import * as Types from '@eh/shared/api'

import {gql} from '@apollo/client'
import {EventFragmentDoc} from '../../../entities/event/api/api'
import {UserFragmentDoc} from '../../../entities/user/api/api'
import {BoardFragmentDoc} from '../../../entities/board/api/api'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type BoardPageEventsFragment = {
  __typename?: 'Board'
  events: {
    __typename?: 'EventConnection'
    pageInfo: {__typename?: 'PageInfo'; hasNextPage: boolean; endCursor?: string | null | undefined}
    edges: Array<{
      __typename?: 'EventEdge'
      node: {
        __typename?: 'Event'
        _id: string
        title?: string | null | undefined
        content: string
        deadline?: any | null | undefined
      }
    }>
  }
}

export type BoardPageParticipantsFragment = {
  __typename?: 'Board'
  participants: {
    __typename?: 'BoardParticipantConnection'
    pageInfo: {__typename?: 'PageInfo'; hasNextPage: boolean; endCursor?: string | null | undefined}
    edges: Array<{
      __typename?: 'BoardParticipantEdge'
      cursor: string
      node: {
        __typename?: 'BoardParticipant'
        _id: string
        user: {
          __typename?: 'User'
          _id: string
          nickname: string
          name?: string | null | undefined
          avatar?: string | null | undefined
        }
      }
    }>
  }
}

export type BoardPageFragment = {
  __typename?: 'Board'
  participationSuggestion: boolean
  _id: string
  title: string
  description?: string | null | undefined
  isPrivate: boolean
  permissions: Array<Types.Permission>
  eventsCount: number
  isFavorite: boolean
  isPin: boolean
  views: number
  timeExpiredEventsCount: number
  user: {__typename?: 'User'; _id: string}
  sub?: {__typename?: 'Sub'; _id: string} | null | undefined
  tags?: Array<{__typename?: 'BoardTag'; _id: string; name: string}> | null | undefined
  events: {
    __typename?: 'EventConnection'
    pageInfo: {__typename?: 'PageInfo'; hasNextPage: boolean; endCursor?: string | null | undefined}
    edges: Array<{
      __typename?: 'EventEdge'
      node: {
        __typename?: 'Event'
        _id: string
        title?: string | null | undefined
        content: string
        deadline?: any | null | undefined
      }
    }>
  }
  participants: {
    __typename?: 'BoardParticipantConnection'
    pageInfo: {__typename?: 'PageInfo'; hasNextPage: boolean; endCursor?: string | null | undefined}
    edges: Array<{
      __typename?: 'BoardParticipantEdge'
      cursor: string
      node: {
        __typename?: 'BoardParticipant'
        _id: string
        user: {
          __typename?: 'User'
          _id: string
          nickname: string
          name?: string | null | undefined
          avatar?: string | null | undefined
        }
      }
    }>
  }
}

export type BoardPageQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']
  eventsPage: Types.Page
  participantsPage: Types.Page
  sort?: Types.Maybe<Types.EventsSort>
  filter?: Types.Maybe<Types.EventsFilter>
}>

export type BoardPageQuery = {
  __typename?: 'Query'
  board?:
    | {
        __typename?: 'Board'
        participationSuggestion: boolean
        _id: string
        title: string
        description?: string | null | undefined
        isPrivate: boolean
        permissions: Array<Types.Permission>
        eventsCount: number
        isFavorite: boolean
        isPin: boolean
        views: number
        timeExpiredEventsCount: number
        user: {__typename?: 'User'; _id: string}
        sub?: {__typename?: 'Sub'; _id: string} | null | undefined
        tags?: Array<{__typename?: 'BoardTag'; _id: string; name: string}> | null | undefined
        events: {
          __typename?: 'EventConnection'
          pageInfo: {
            __typename?: 'PageInfo'
            hasNextPage: boolean
            endCursor?: string | null | undefined
          }
          edges: Array<{
            __typename?: 'EventEdge'
            node: {
              __typename?: 'Event'
              _id: string
              title?: string | null | undefined
              content: string
              deadline?: any | null | undefined
            }
          }>
        }
        participants: {
          __typename?: 'BoardParticipantConnection'
          pageInfo: {
            __typename?: 'PageInfo'
            hasNextPage: boolean
            endCursor?: string | null | undefined
          }
          edges: Array<{
            __typename?: 'BoardParticipantEdge'
            cursor: string
            node: {
              __typename?: 'BoardParticipant'
              _id: string
              user: {
                __typename?: 'User'
                _id: string
                nickname: string
                name?: string | null | undefined
                avatar?: string | null | undefined
              }
            }
          }>
        }
      }
    | null
    | undefined
}

export type MoreBoardPageEventsQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']
  eventsPage: Types.Page
  sort?: Types.Maybe<Types.EventsSort>
  filter?: Types.Maybe<Types.EventsFilter>
}>

export type MoreBoardPageEventsQuery = {
  __typename?: 'Query'
  board?:
    | {
        __typename?: 'Board'
        _id: string
        events: {
          __typename?: 'EventConnection'
          pageInfo: {
            __typename?: 'PageInfo'
            hasNextPage: boolean
            endCursor?: string | null | undefined
          }
          edges: Array<{
            __typename?: 'EventEdge'
            node: {
              __typename?: 'Event'
              _id: string
              title?: string | null | undefined
              content: string
              deadline?: any | null | undefined
            }
          }>
        }
      }
    | null
    | undefined
}

export type MoreBoardPageParticipantsQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']
  participantsPage: Types.Page
}>

export type MoreBoardPageParticipantsQuery = {
  __typename?: 'Query'
  board?:
    | {
        __typename?: 'Board'
        _id: string
        participants: {
          __typename?: 'BoardParticipantConnection'
          pageInfo: {
            __typename?: 'PageInfo'
            hasNextPage: boolean
            endCursor?: string | null | undefined
          }
          edges: Array<{
            __typename?: 'BoardParticipantEdge'
            cursor: string
            node: {
              __typename?: 'BoardParticipant'
              _id: string
              user: {
                __typename?: 'User'
                _id: string
                nickname: string
                name?: string | null | undefined
                avatar?: string | null | undefined
              }
            }
          }>
        }
      }
    | null
    | undefined
}

export const BoardPageEventsFragmentDoc = gql`
  fragment BoardPageEvents on Board {
    events(page: $eventsPage, sort: $sort, filter: $filter) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          ...Event
        }
      }
    }
  }
  ${EventFragmentDoc}
`
export const BoardPageParticipantsFragmentDoc = gql`
  fragment BoardPageParticipants on Board {
    participants(page: $participantsPage) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          _id
          user {
            ...User
          }
        }
      }
    }
  }
  ${UserFragmentDoc}
`
export const BoardPageFragmentDoc = gql`
  fragment BoardPage on Board {
    ...Board
    ...BoardPageEvents
    ...BoardPageParticipants
    participationSuggestion
  }
  ${BoardFragmentDoc}
  ${BoardPageEventsFragmentDoc}
  ${BoardPageParticipantsFragmentDoc}
`
export const BoardPageDocument = gql`
  query BoardPage(
    $id: ID!
    $eventsPage: Page!
    $participantsPage: Page!
    $sort: EventsSort
    $filter: EventsFilter
  ) {
    board(boardId: $id) {
      ...BoardPage
    }
  }
  ${BoardPageFragmentDoc}
`

/**
 * __useBoardPageQuery__
 *
 * To run a query within a React component, call `useBoardPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoardPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *      eventsPage: // value for 'eventsPage'
 *      participantsPage: // value for 'participantsPage'
 *      sort: // value for 'sort'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useBoardPageQuery(
  baseOptions: Apollo.QueryHookOptions<BoardPageQuery, BoardPageQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<BoardPageQuery, BoardPageQueryVariables>(BoardPageDocument, options)
}
export function useBoardPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BoardPageQuery, BoardPageQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<BoardPageQuery, BoardPageQueryVariables>(BoardPageDocument, options)
}
export type BoardPageQueryHookResult = ReturnType<typeof useBoardPageQuery>
export type BoardPageLazyQueryHookResult = ReturnType<typeof useBoardPageLazyQuery>
export type BoardPageQueryResult = Apollo.QueryResult<BoardPageQuery, BoardPageQueryVariables>
export const MoreBoardPageEventsDocument = gql`
  query MoreBoardPageEvents(
    $id: ID!
    $eventsPage: Page!
    $sort: EventsSort
    $filter: EventsFilter
  ) {
    board(boardId: $id) {
      _id
      ...BoardPageEvents
    }
  }
  ${BoardPageEventsFragmentDoc}
`

/**
 * __useMoreBoardPageEventsQuery__
 *
 * To run a query within a React component, call `useMoreBoardPageEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoreBoardPageEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoreBoardPageEventsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      eventsPage: // value for 'eventsPage'
 *      sort: // value for 'sort'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useMoreBoardPageEventsQuery(
  baseOptions: Apollo.QueryHookOptions<MoreBoardPageEventsQuery, MoreBoardPageEventsQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<MoreBoardPageEventsQuery, MoreBoardPageEventsQueryVariables>(
    MoreBoardPageEventsDocument,
    options,
  )
}
export function useMoreBoardPageEventsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MoreBoardPageEventsQuery,
    MoreBoardPageEventsQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<MoreBoardPageEventsQuery, MoreBoardPageEventsQueryVariables>(
    MoreBoardPageEventsDocument,
    options,
  )
}
export type MoreBoardPageEventsQueryHookResult = ReturnType<typeof useMoreBoardPageEventsQuery>
export type MoreBoardPageEventsLazyQueryHookResult = ReturnType<
  typeof useMoreBoardPageEventsLazyQuery
>
export type MoreBoardPageEventsQueryResult = Apollo.QueryResult<
  MoreBoardPageEventsQuery,
  MoreBoardPageEventsQueryVariables
>
export const MoreBoardPageParticipantsDocument = gql`
  query MoreBoardPageParticipants($id: ID!, $participantsPage: Page!) {
    board(boardId: $id) {
      _id
      ...BoardPageParticipants
    }
  }
  ${BoardPageParticipantsFragmentDoc}
`

/**
 * __useMoreBoardPageParticipantsQuery__
 *
 * To run a query within a React component, call `useMoreBoardPageParticipantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoreBoardPageParticipantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoreBoardPageParticipantsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      participantsPage: // value for 'participantsPage'
 *   },
 * });
 */
export function useMoreBoardPageParticipantsQuery(
  baseOptions: Apollo.QueryHookOptions<
    MoreBoardPageParticipantsQuery,
    MoreBoardPageParticipantsQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<MoreBoardPageParticipantsQuery, MoreBoardPageParticipantsQueryVariables>(
    MoreBoardPageParticipantsDocument,
    options,
  )
}
export function useMoreBoardPageParticipantsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MoreBoardPageParticipantsQuery,
    MoreBoardPageParticipantsQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<
    MoreBoardPageParticipantsQuery,
    MoreBoardPageParticipantsQueryVariables
  >(MoreBoardPageParticipantsDocument, options)
}
export type MoreBoardPageParticipantsQueryHookResult = ReturnType<
  typeof useMoreBoardPageParticipantsQuery
>
export type MoreBoardPageParticipantsLazyQueryHookResult = ReturnType<
  typeof useMoreBoardPageParticipantsLazyQuery
>
export type MoreBoardPageParticipantsQueryResult = Apollo.QueryResult<
  MoreBoardPageParticipantsQuery,
  MoreBoardPageParticipantsQueryVariables
>
