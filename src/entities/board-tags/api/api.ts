/* eslint-disable */
// noinspection GraphQLSchemaValidation,ES6PreferShortImport,JSUnusedGlobalSymbols
// noinspection JSUnusedGlobalSymbols

import * as Types from '@eh/shared/api'

import {gql} from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type BoardTagsQueryVariables = Types.Exact<{[key: string]: never}>

export type BoardTagsQuery = {
  __typename?: 'Query'
  boardTags: Array<{__typename?: 'BoardTag'; _id: string; name: string}>
}

export const BoardTagsDocument = gql`
  query BoardTags {
    boardTags {
      _id
      name
    }
  }
`

/**
 * __useBoardTagsQuery__
 *
 * To run a query within a React component, call `useBoardTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoardTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBoardTagsQuery(
  baseOptions?: Apollo.QueryHookOptions<BoardTagsQuery, BoardTagsQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<BoardTagsQuery, BoardTagsQueryVariables>(BoardTagsDocument, options)
}
export function useBoardTagsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BoardTagsQuery, BoardTagsQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<BoardTagsQuery, BoardTagsQueryVariables>(BoardTagsDocument, options)
}
export type BoardTagsQueryHookResult = ReturnType<typeof useBoardTagsQuery>
export type BoardTagsLazyQueryHookResult = ReturnType<typeof useBoardTagsLazyQuery>
export type BoardTagsQueryResult = Apollo.QueryResult<BoardTagsQuery, BoardTagsQueryVariables>
