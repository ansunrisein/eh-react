import {gql} from '@apollo/client'

export const EVENT_FRAGMENT = gql`
  fragment EventFragment on Event {
    _id
    type
    header
    deadline
    pinned
    ... on TextEvent {
      text
    }
    ... on ListEvent {
      list
    }
  }
`
