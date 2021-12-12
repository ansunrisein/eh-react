/* eslint-disable */
import * as Types from './types'

import {gql} from '@apollo/client'
export type EventFragment = {
  __typename?: 'Event'
  _id: string
  title?: string | null | undefined
  content: string
}

export type BoardFragment = {
  __typename?: 'Board'
  _id: string
  title: string
  isPrivate: boolean
  events: Array<{
    __typename?: 'Event'
    _id: string
    title?: string | null | undefined
    content: string
  }>
  user: {__typename?: 'User'; _id: string}
  sub?: {__typename?: 'Sub'; _id: string} | null | undefined
}

export type MeFragment = {__typename?: 'User'; _id: string}

export type BoardLinkFragment = {
  __typename?: 'BoardLink'
  _id: string
  link: string
  name: string
  permissions: Array<Types.Permission>
}

export const EventFragmentDoc = gql`
  fragment Event on Event {
    _id
    title
    content
  }
`
export const BoardFragmentDoc = gql`
  fragment Board on Board {
    _id
    title
    isPrivate
    events {
      ...Event
    }
    user {
      _id
    }
    sub {
      _id
    }
  }
  ${EventFragmentDoc}
`
export const MeFragmentDoc = gql`
  fragment Me on User {
    _id
  }
`
export const BoardLinkFragmentDoc = gql`
  fragment BoardLink on BoardLink {
    _id
    link
    name
    permissions
  }
`
