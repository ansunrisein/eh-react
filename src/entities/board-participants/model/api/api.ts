/* eslint-disable */
// noinspection GraphQLSchemaValidation,ES6PreferShortImport,JSUnusedGlobalSymbols
// noinspection JSUnusedGlobalSymbols

import * as Types from '@eh/shared/api'

import {gql} from '@apollo/client'
import {UserFragmentDoc} from '../../../user/api/api'
export type BoardParticipantFragment = {
  __typename?: 'BoardParticipant'
  _id: string
  user: {
    __typename?: 'User'
    _id: string
    nickname: string
    name?: string | null | undefined
    avatar?: string | null | undefined
  }
}

export const BoardParticipantFragmentDoc = gql`
  fragment BoardParticipant on BoardParticipant {
    _id
    user {
      ...User
    }
  }
  ${UserFragmentDoc}
`
