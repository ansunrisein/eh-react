import {gql} from '@apollo/client'
import {EVENT_FRAGMENT} from '@eh/react/features/shared/graphql'

export const BOARD_FRAGMENT = gql`
  fragment BoardFragment on Board {
    _id
    title
    description
    pinned
    favorite
  }
  ${EVENT_FRAGMENT}
`
