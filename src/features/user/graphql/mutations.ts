import {gql} from '@apollo/client'

export const UPDATE_AVATAR = gql`
  mutation UpdateAvatar($avatar: String) {
    updateAvatar(avatar: $avatar) {
      _id
      avatar
    }
  }
`

export const UPDATE_PROFILE = gql`
  mutation UpdateProfile($nickname: String!, $name: String) {
    updateProfile(nickname: $nickname, name: $name) {
      _id
      nickname
      name
    }
  }
`
