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
  events: Array<{
    __typename?: 'Event'
    _id: string
    title?: string | null | undefined
    content: string
  }>
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
    events {
      ...Event
    }
  }
  ${EventFragmentDoc}
`
