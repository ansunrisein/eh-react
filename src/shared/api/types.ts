/* eslint-disable */
import {FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy} from '@apollo/client/cache'
export type Maybe<T> = T | null
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]?: Maybe<T[SubKey]>}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]: Maybe<T[SubKey]>}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Board = {
  __typename?: 'Board'
  _id: Scalars['ID']
  events: Array<Event>
  isPrivate: Scalars['Boolean']
  title: Scalars['String']
  user: User
}

export type Event = {
  __typename?: 'Event'
  _id: Scalars['ID']
  content: Scalars['String']
  title?: Maybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createBoard: Board
  createEvent?: Maybe<Event>
  removeBoard: Board
  removeEvent?: Maybe<Event>
  updateBoard: Board
  updateEvent?: Maybe<Event>
}

export type MutationCreateBoardArgs = {
  isPrivate: Scalars['Boolean']
  title: Scalars['String']
}

export type MutationCreateEventArgs = {
  boardId: Scalars['ID']
  content: Scalars['String']
  title?: Maybe<Scalars['String']>
}

export type MutationRemoveBoardArgs = {
  _id: Scalars['ID']
}

export type MutationRemoveEventArgs = {
  _id: Scalars['ID']
}

export type MutationUpdateBoardArgs = {
  _id: Scalars['ID']
  isPrivate: Scalars['Boolean']
  title: Scalars['String']
}

export type MutationUpdateEventArgs = {
  _id: Scalars['ID']
  content: Scalars['String']
  title?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  board: Board
  dashboard: Array<Board>
  event?: Maybe<Event>
  me?: Maybe<User>
}

export type QueryBoardArgs = {
  _id: Scalars['ID']
}

export type QueryEventArgs = {
  _id: Scalars['ID']
}

export type User = {
  __typename?: 'User'
  _id: Scalars['ID']
  avatar?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  nickname: Scalars['String']
}

export type BoardKeySpecifier = (
  | '_id'
  | 'events'
  | 'isPrivate'
  | 'title'
  | 'user'
  | BoardKeySpecifier
)[]
export type BoardFieldPolicy = {
  _id?: FieldPolicy<any> | FieldReadFunction<any>
  events?: FieldPolicy<any> | FieldReadFunction<any>
  isPrivate?: FieldPolicy<any> | FieldReadFunction<any>
  title?: FieldPolicy<any> | FieldReadFunction<any>
  user?: FieldPolicy<any> | FieldReadFunction<any>
}
export type EventKeySpecifier = ('_id' | 'content' | 'title' | EventKeySpecifier)[]
export type EventFieldPolicy = {
  _id?: FieldPolicy<any> | FieldReadFunction<any>
  content?: FieldPolicy<any> | FieldReadFunction<any>
  title?: FieldPolicy<any> | FieldReadFunction<any>
}
export type MutationKeySpecifier = (
  | 'createBoard'
  | 'createEvent'
  | 'removeBoard'
  | 'removeEvent'
  | 'updateBoard'
  | 'updateEvent'
  | MutationKeySpecifier
)[]
export type MutationFieldPolicy = {
  createBoard?: FieldPolicy<any> | FieldReadFunction<any>
  createEvent?: FieldPolicy<any> | FieldReadFunction<any>
  removeBoard?: FieldPolicy<any> | FieldReadFunction<any>
  removeEvent?: FieldPolicy<any> | FieldReadFunction<any>
  updateBoard?: FieldPolicy<any> | FieldReadFunction<any>
  updateEvent?: FieldPolicy<any> | FieldReadFunction<any>
}
export type QueryKeySpecifier = ('board' | 'dashboard' | 'event' | 'me' | QueryKeySpecifier)[]
export type QueryFieldPolicy = {
  board?: FieldPolicy<any> | FieldReadFunction<any>
  dashboard?: FieldPolicy<any> | FieldReadFunction<any>
  event?: FieldPolicy<any> | FieldReadFunction<any>
  me?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UserKeySpecifier = ('_id' | 'avatar' | 'name' | 'nickname' | UserKeySpecifier)[]
export type UserFieldPolicy = {
  _id?: FieldPolicy<any> | FieldReadFunction<any>
  avatar?: FieldPolicy<any> | FieldReadFunction<any>
  name?: FieldPolicy<any> | FieldReadFunction<any>
  nickname?: FieldPolicy<any> | FieldReadFunction<any>
}
export type StrictTypedTypePolicies = {
  Board?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | BoardKeySpecifier | (() => undefined | BoardKeySpecifier)
    fields?: BoardFieldPolicy
  }
  Event?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | EventKeySpecifier | (() => undefined | EventKeySpecifier)
    fields?: EventFieldPolicy
  }
  Mutation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier)
    fields?: MutationFieldPolicy
  }
  Query?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier)
    fields?: QueryFieldPolicy
  }
  User?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier)
    fields?: UserFieldPolicy
  }
}
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies
