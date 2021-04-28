import {gql} from '@apollo/client'
import {BOARD_FRAGMENT} from './fragments'

export const DASHBOARD = gql`
  query Dashboard(
    $filter: BoardsFilter!
    $sort: BoardsSort!
    $boardPage: Page!
    $eventPage: Page!
  ) {
    dashboard(filter: $filter, sort: $sort, page: $boardPage) {
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          ...BoardFragment
          events(page: $eventPage) {
            edges {
              cursor
              node {
                ...EventFragment
                pinned
              }
            }
            pageInfo {
              endCursor
              hasNextPage
            }
          }
        }
        cursor
      }
    }
  }
  ${BOARD_FRAGMENT}
`

export const BOARD = gql`
  query Board($_id: ID!, $page: Page!) {
    board(_id: $_id) {
      ...BoardFragment
      events(page: $page) {
        edges {
          cursor
          node {
            ...EventFragment
            pinned
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
  ${BOARD_FRAGMENT}
`
