import {gql} from '@apollo/client'
import {EVENT_FRAGMENT} from '@eh/react/features/shared/graphql'

export const CREATE_EVENT = gql`
  mutation CreateEvent(
    $boardId: ID!
    $type: EventType!
    $header: String
    $deadline: DateTime
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
      board {
        _id
      }
    }
  }
  ${EVENT_FRAGMENT}
`

export const UPDATE_EVENT = gql`
  mutation UpdateEvent(
    $id: ID!
    $type: EventType!
    $list: [String!]
    $text: String
    $deadline: DateTime
    $header: String
  ) {
    updateEvent(
      _id: $id
      type: $type
      list: $list
      text: $text
      deadline: $deadline
      header: $header
    ) {
      ...EventFragment
    }
  }
  ${EVENT_FRAGMENT}
`

export const REMOVE_EVENT = gql`
  mutation RemoveEvent($id: ID!) {
    removeEvent(_id: $id) {
      _id
    }
  }
`
