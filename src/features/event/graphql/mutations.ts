import {gql} from '@apollo/client'
import {EVENT_FRAGMENT} from '@eh/react/features/shared/graphql'

export const CREATE_EVENT = gql`
  mutation CreateEvent(
    $boardId: ID!
    $type: EventType!
    $header: String
    $deadline: Date
    $pinned: Boolean!
    $text: String
    $list: [String!]
  ) {
    createEvent(
      boardId: $boardId
      type: $type
      header: $header
      deadline: $deadline
      pinned: $pinned
      text: $text
      list: $list
    ) {
      ...EventFragment
    }
  }
  ${EVENT_FRAGMENT}
`
