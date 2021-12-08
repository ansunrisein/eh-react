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
  boardLinks: Array<BoardLink>
  events: Array<Event>
  isPrivate: Scalars['Boolean']
  title: Scalars['String']
  user: User
}

export type BoardLink = {
  __typename?: 'BoardLink'
  _id: Scalars['ID']
  board: Board
  link: Scalars['String']
  permissions: Array<Permission>
}

export type CreateBoard = {
  isPrivate: Scalars['Boolean']
  title: Scalars['String']
}

export type CreateBoardLink = {
  boardId: Scalars['ID']
  permissions: Array<Permission>
}

export type CreateEvent = {
  boardId: Scalars['ID']
  content: Scalars['String']
  title?: Maybe<Scalars['String']>
}

export type EntityPermissions = {
  __typename?: 'EntityPermissions'
  name: Scalars['String']
  permissions: Array<PermissionDescriptor>
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
  createBoardLink: BoardLink
  createEvent?: Maybe<Event>
  removeBoard: Board
  removeBoardLink: BoardLink
  removeEvent?: Maybe<Event>
  updateBoard: Board
  updateBoardLink: BoardLink
  updateEvent?: Maybe<Event>
}

export type MutationCreateBoardArgs = {
  board: CreateBoard
  linkToken?: Maybe<Scalars['String']>
}

export type MutationCreateBoardLinkArgs = {
  boardLink: CreateBoardLink
  linkToken?: Maybe<Scalars['String']>
}

export type MutationCreateEventArgs = {
  event: CreateEvent
  linkToken?: Maybe<Scalars['String']>
}

export type MutationRemoveBoardArgs = {
  boardId: Scalars['ID']
  linkToken?: Maybe<Scalars['String']>
}

export type MutationRemoveBoardLinkArgs = {
  boardLinkId: Scalars['ID']
  linkToken?: Maybe<Scalars['String']>
}

export type MutationRemoveEventArgs = {
  eventId: Scalars['ID']
  linkToken?: Maybe<Scalars['String']>
}

export type MutationUpdateBoardArgs = {
  board: UpdateBoard
  linkToken?: Maybe<Scalars['String']>
}

export type MutationUpdateBoardLinkArgs = {
  boardLink: UpdateBoardLink
  linkToken?: Maybe<Scalars['String']>
}

export type MutationUpdateEventArgs = {
  event: UpdateEvent
  linkToken?: Maybe<Scalars['String']>
}

export enum Permission {
  CREATE_BOARD = 'CREATE_BOARD',
  CREATE_BOARD_LINK = 'CREATE_BOARD_LINK',
  CREATE_EVENT = 'CREATE_EVENT',
  REMOVE_BOARD = 'REMOVE_BOARD',
  REMOVE_BOARD_LINK = 'REMOVE_BOARD_LINK',
  REMOVE_EVENT = 'REMOVE_EVENT',
  UPDATE_BOARD_DESCRIPTION = 'UPDATE_BOARD_DESCRIPTION',
  UPDATE_BOARD_LINK = 'UPDATE_BOARD_LINK',
  UPDATE_BOARD_VISIBILITY = 'UPDATE_BOARD_VISIBILITY',
  UPDATE_EVENT = 'UPDATE_EVENT',
  VIEW_BOARD = 'VIEW_BOARD',
  VIEW_BOARD_LINK = 'VIEW_BOARD_LINK',
  VIEW_EVENT = 'VIEW_EVENT',
}

export type PermissionDescriptor = {
  __typename?: 'PermissionDescriptor'
  name: Scalars['String']
  value: Permission
}

export type Query = {
  __typename?: 'Query'
  board: Board
  boardLink?: Maybe<BoardLink>
  boardLinks: Array<BoardLink>
  dashboard: Array<Board>
  event?: Maybe<Event>
  me?: Maybe<User>
  permissions: Array<EntityPermissions>
}

export type QueryBoardArgs = {
  boardId: Scalars['ID']
  linkToken?: Maybe<Scalars['String']>
}

export type QueryBoardLinkArgs = {
  boardLinkId: Scalars['ID']
  linkToken?: Maybe<Scalars['String']>
}

export type QueryBoardLinksArgs = {
  boardId: Scalars['ID']
  linkToken?: Maybe<Scalars['String']>
}

export type QueryEventArgs = {
  eventId: Scalars['ID']
  linkToken?: Maybe<Scalars['String']>
}

export type UpdateBoard = {
  _id: Scalars['ID']
  isPrivate: Scalars['Boolean']
  title: Scalars['String']
}

export type UpdateBoardLink = {
  _id: Scalars['ID']
  permissions: Array<Permission>
}

export type UpdateEvent = {
  _id: Scalars['ID']
  content: Scalars['String']
  title?: Maybe<Scalars['String']>
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
  | 'boardLinks'
  | 'events'
  | 'isPrivate'
  | 'title'
  | 'user'
  | BoardKeySpecifier
)[]
export type BoardFieldPolicy = {
  _id?: FieldPolicy<any> | FieldReadFunction<any>
  boardLinks?: FieldPolicy<any> | FieldReadFunction<any>
  events?: FieldPolicy<any> | FieldReadFunction<any>
  isPrivate?: FieldPolicy<any> | FieldReadFunction<any>
  title?: FieldPolicy<any> | FieldReadFunction<any>
  user?: FieldPolicy<any> | FieldReadFunction<any>
}
export type BoardLinkKeySpecifier = (
  | '_id'
  | 'board'
  | 'link'
  | 'permissions'
  | BoardLinkKeySpecifier
)[]
export type BoardLinkFieldPolicy = {
  _id?: FieldPolicy<any> | FieldReadFunction<any>
  board?: FieldPolicy<any> | FieldReadFunction<any>
  link?: FieldPolicy<any> | FieldReadFunction<any>
  permissions?: FieldPolicy<any> | FieldReadFunction<any>
}
export type EntityPermissionsKeySpecifier = (
  | 'name'
  | 'permissions'
  | EntityPermissionsKeySpecifier
)[]
export type EntityPermissionsFieldPolicy = {
  name?: FieldPolicy<any> | FieldReadFunction<any>
  permissions?: FieldPolicy<any> | FieldReadFunction<any>
}
export type EventKeySpecifier = ('_id' | 'content' | 'title' | EventKeySpecifier)[]
export type EventFieldPolicy = {
  _id?: FieldPolicy<any> | FieldReadFunction<any>
  content?: FieldPolicy<any> | FieldReadFunction<any>
  title?: FieldPolicy<any> | FieldReadFunction<any>
}
export type MutationKeySpecifier = (
  | 'createBoard'
  | 'createBoardLink'
  | 'createEvent'
  | 'removeBoard'
  | 'removeBoardLink'
  | 'removeEvent'
  | 'updateBoard'
  | 'updateBoardLink'
  | 'updateEvent'
  | MutationKeySpecifier
)[]
export type MutationFieldPolicy = {
  createBoard?: FieldPolicy<any> | FieldReadFunction<any>
  createBoardLink?: FieldPolicy<any> | FieldReadFunction<any>
  createEvent?: FieldPolicy<any> | FieldReadFunction<any>
  removeBoard?: FieldPolicy<any> | FieldReadFunction<any>
  removeBoardLink?: FieldPolicy<any> | FieldReadFunction<any>
  removeEvent?: FieldPolicy<any> | FieldReadFunction<any>
  updateBoard?: FieldPolicy<any> | FieldReadFunction<any>
  updateBoardLink?: FieldPolicy<any> | FieldReadFunction<any>
  updateEvent?: FieldPolicy<any> | FieldReadFunction<any>
}
export type PermissionDescriptorKeySpecifier = (
  | 'name'
  | 'value'
  | PermissionDescriptorKeySpecifier
)[]
export type PermissionDescriptorFieldPolicy = {
  name?: FieldPolicy<any> | FieldReadFunction<any>
  value?: FieldPolicy<any> | FieldReadFunction<any>
}
export type QueryKeySpecifier = (
  | 'board'
  | 'boardLink'
  | 'boardLinks'
  | 'dashboard'
  | 'event'
  | 'me'
  | 'permissions'
  | QueryKeySpecifier
)[]
export type QueryFieldPolicy = {
  board?: FieldPolicy<any> | FieldReadFunction<any>
  boardLink?: FieldPolicy<any> | FieldReadFunction<any>
  boardLinks?: FieldPolicy<any> | FieldReadFunction<any>
  dashboard?: FieldPolicy<any> | FieldReadFunction<any>
  event?: FieldPolicy<any> | FieldReadFunction<any>
  me?: FieldPolicy<any> | FieldReadFunction<any>
  permissions?: FieldPolicy<any> | FieldReadFunction<any>
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
  BoardLink?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | BoardLinkKeySpecifier | (() => undefined | BoardLinkKeySpecifier)
    fields?: BoardLinkFieldPolicy
  }
  EntityPermissions?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | EntityPermissionsKeySpecifier
      | (() => undefined | EntityPermissionsKeySpecifier)
    fields?: EntityPermissionsFieldPolicy
  }
  Event?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | EventKeySpecifier | (() => undefined | EventKeySpecifier)
    fields?: EventFieldPolicy
  }
  Mutation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier)
    fields?: MutationFieldPolicy
  }
  PermissionDescriptor?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PermissionDescriptorKeySpecifier
      | (() => undefined | PermissionDescriptorKeySpecifier)
    fields?: PermissionDescriptorFieldPolicy
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
