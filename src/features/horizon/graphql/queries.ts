import {gql} from '@apollo/client'
import {BOARD_FRAGMENT} from './fragments'

export const DASHBOARD = gql`
  query Dashboard($filter: DashboardFilter, $sort: DashboardSort, $page: Page) {
    dashboard(filter: $filter, sort: $sort, page: $page) {
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          ...BoardFragment
        }
        cursor
      }
    }
  }
  ${BOARD_FRAGMENT}
`

export const BOARD = gql`
  query Board($id: ID!) {
    board(id: $id) {
      ...BoardFragment
    }
  }
  ${BOARD_FRAGMENT}
`
