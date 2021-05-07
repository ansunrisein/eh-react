import {gql} from '@apollo/client'

export const BOARD_FRAGMENT = gql`
  fragment BoardFragment on Board {
    _id
    title
    description
    pinned
    favorite
    private
  }
`
