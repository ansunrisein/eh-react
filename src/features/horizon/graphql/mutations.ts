import {gql} from '@apollo/client'
import {BOARD_FRAGMENT} from './fragments'

export const CREATE_BOARD = gql`
  mutation CreateBoard($title: String!, $description: String) {
    createBoard(title: $title, description: $description) {
      ...BoardFragment
    }
  }
  ${BOARD_FRAGMENT}
`
