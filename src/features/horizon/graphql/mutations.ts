import {gql} from '@apollo/client'
import {BOARD_FRAGMENT} from './fragments'

export const CREATE_BOARD = gql`
  mutation CreateBoard($title: String!, $description: String, $private: Boolean!) {
    createBoard(title: $title, description: $description, private: $private) {
      ...BoardFragment
    }
  }
  ${BOARD_FRAGMENT}
`

export const UPDATE_BOARD = gql`
  mutation UpdateBoard(
    $_id: ID!
    $title: String!
    $description: String
    $private: Boolean!
    $favorite: Boolean!
    $pinned: Boolean!
  ) {
    updateBoard(
      _id: $_id
      title: $title
      description: $description
      private: $private
      favorite: $favorite
      pinned: $pinned
    ) {
      ...BoardFragment
    }
  }
  ${BOARD_FRAGMENT}
`

export const REMOVE_BOARD = gql`
  mutation RemoveBoard($_id: ID!) {
    removeBoard(_id: $_id) {
      _id
    }
  }
`
