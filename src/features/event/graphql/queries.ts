import {gql} from '@apollo/client'
import {EVENT_FRAGMENT} from '@eh/react/features/shared/graphql'

export const EVENT = gql`
  query Event($id: ID!) {
    event(_id: $id) {
      ...EventFragment
      pinned
    }
  }
  ${EVENT_FRAGMENT}
`
