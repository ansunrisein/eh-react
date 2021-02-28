import {gql} from '@apollo/client'
import {BOARD_FRAGMENT} from './fragments'

export const DASHBOARD = gql`
  query Dashboard($page: Page) {
    dashboard(page: $page) {
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
