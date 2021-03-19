import {gql} from '@apollo/client'

export const EVENT_FRAGMENT = gql`
  fragment EventFragment on Event {
    id
    type
    header
    deadline
    ... on TextEvent {
      text
    }
    ... on ListEvent {
      list
    }
  }
`
