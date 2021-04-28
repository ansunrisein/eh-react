import {gql} from '@apollo/client'

export const ME = gql`
  query Me {
    me {
      _id
      nickname
      name
      avatar
    }
  }
`
