/* eslint-disable */
// noinspection GraphQLSchemaValidation,ES6PreferShortImport,JSUnusedGlobalSymbols
// noinspection JSUnusedGlobalSymbols

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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
}

export type Board = {
  __typename?: 'Board'
  _id: Scalars['ID']
  boardLinks: BoardLinkConnection
  description?: Maybe<Scalars['String']>
  events: EventConnection
  eventsCount: Scalars['Float']
  isFavorite: Scalars['Boolean']
  isPin: Scalars['Boolean']
  isPrivate: Scalars['Boolean']
  permissions: Array<Permission>
  sub?: Maybe<Sub>
  tags?: Maybe<Array<BoardTag>>
  title: Scalars['String']
  user: User
  views: Scalars['Int']
}

export type BoardBoardLinksArgs = {
  page: Page
}

export type BoardEventsArgs = {
  filter?: Maybe<EventsFilter>
  page: Page
  sort?: Maybe<EventsSort>
}

export type BoardConnection = {
  __typename?: 'BoardConnection'
  edges: Array<BoardEdge>
  pageInfo: PageInfo
}

export type BoardEdge = {
  __typename?: 'BoardEdge'
  cursor: Scalars['String']
  node: Board
}

export type BoardId = {
  _id: Scalars['ID']
}

export type BoardLink = {
  __typename?: 'BoardLink'
  _id: Scalars['ID']
  board: Board
  link: Scalars['String']
  name: Scalars['String']
  permissions: Array<Permission>
}

export type BoardLinkConnection = {
  __typename?: 'BoardLinkConnection'
  edges: Array<BoardLinkEdge>
  pageInfo: PageInfo
}

export type BoardLinkEdge = {
  __typename?: 'BoardLinkEdge'
  cursor: Scalars['String']
  node: BoardLink
}

export type BoardTag = {
  __typename?: 'BoardTag'
  _id: Scalars['ID']
  name: Scalars['String']
}

export type BoardTagId = {
  _id: Scalars['ID']
}

export type BoardsFilter = {
  favorite?: Maybe<Scalars['Int']>
  ownership?: Maybe<Scalars['Int']>
  pin?: Maybe<Scalars['Int']>
}

export type BoardsSearch = {
  text?: Maybe<Scalars['String']>
}

export type BoardsSort = {
  favorite?: Maybe<Scalars['String']>
  nearestEvent?: Maybe<Scalars['String']>
  pin?: Maybe<Scalars['String']>
  views?: Maybe<Scalars['String']>
}

export type CreateBoard = {
  description?: Maybe<Scalars['String']>
  isPrivate: Scalars['Boolean']
  tagsIds?: Maybe<Array<Scalars['ID']>>
  title: Scalars['String']
}

export type CreateBoardLink = {
  boardId: Scalars['ID']
  name: Scalars['String']
  permissions: Array<Permission>
}

export type CreateBoardTag = {
  name: Scalars['String']
}

export type CreateEvent = {
  boardId: Scalars['ID']
  content: Scalars['String']
  deadline?: Maybe<Scalars['DateTime']>
  title?: Maybe<Scalars['String']>
}

export type CreateSub = {
  boardId: Scalars['ID']
}

export enum EntityName {
  Board = 'Board',
  BoardLink = 'BoardLink',
  Event = 'Event',
}

export type EntityPermissions = {
  __typename?: 'EntityPermissions'
  name: EntityName
  permissions: Array<Permission>
}

export type Event = {
  __typename?: 'Event'
  _id: Scalars['ID']
  content: Scalars['String']
  deadline?: Maybe<Scalars['DateTime']>
  title?: Maybe<Scalars['String']>
}

export type EventConnection = {
  __typename?: 'EventConnection'
  edges: Array<EventEdge>
  pageInfo: PageInfo
}

export type EventEdge = {
  __typename?: 'EventEdge'
  cursor: Scalars['String']
  node: Event
}

export type EventsFilter = {
  expired?: Maybe<Scalars['Int']>
}

export type EventsSort = {
  nearestEvent?: Maybe<Scalars['String']>
  pin?: Maybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createBoard: Board
  createBoardLink: BoardLink
  createBoardTag: BoardTag
  createEvent?: Maybe<Event>
  createSub: Board
  markBoardAsFavorite: Board
  markBoardAsPin: Board
  removeBoard: Board
  removeBoardLink: BoardLink
  removeBoardTag: BoardTag
  removeEvent?: Maybe<Event>
  removeSub: Board
  unmarkBoardAsFavorite: Board
  unmarkBoardAsPin: Board
  updateAvatar: User
  updateBoardDescription: Board
  updateBoardLink: BoardLink
  updateBoardTags: Board
  updateBoardVisibility: Board
  updateEvent?: Maybe<Event>
  updateProfile: User
}

export type MutationCreateBoardArgs = {
  board: CreateBoard
}

export type MutationCreateBoardLinkArgs = {
  boardLink: CreateBoardLink
}

export type MutationCreateBoardTagArgs = {
  boardTag: CreateBoardTag
}

export type MutationCreateEventArgs = {
  event: CreateEvent
}

export type MutationCreateSubArgs = {
  sub: CreateSub
}

export type MutationMarkBoardAsFavoriteArgs = {
  board: BoardId
}

export type MutationMarkBoardAsPinArgs = {
  board: BoardId
}

export type MutationRemoveBoardArgs = {
  boardId: Scalars['ID']
}

export type MutationRemoveBoardLinkArgs = {
  boardLinkId: Scalars['ID']
}

export type MutationRemoveBoardTagArgs = {
  boardTag: BoardTagId
}

export type MutationRemoveEventArgs = {
  eventId: Scalars['ID']
}

export type MutationRemoveSubArgs = {
  board: BoardId
}

export type MutationUnmarkBoardAsFavoriteArgs = {
  board: BoardId
}

export type MutationUnmarkBoardAsPinArgs = {
  board: BoardId
}

export type MutationUpdateAvatarArgs = {
  avatar?: Maybe<Scalars['String']>
}

export type MutationUpdateBoardDescriptionArgs = {
  board: UpdateBoardDescription
}

export type MutationUpdateBoardLinkArgs = {
  boardLink: UpdateBoardLink
}

export type MutationUpdateBoardTagsArgs = {
  board: UpdateBoardTags
}

export type MutationUpdateBoardVisibilityArgs = {
  board: UpdateBoardVisibility
}

export type MutationUpdateEventArgs = {
  event: UpdateEvent
}

export type MutationUpdateProfileArgs = {
  name?: Maybe<Scalars['String']>
  nickname: Scalars['String']
}

export type Page = {
  after?: Maybe<Scalars['String']>
  first: Scalars['Int']
}

export type PageInfo = {
  __typename?: 'PageInfo'
  endCursor?: Maybe<Scalars['String']>
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  startCursor?: Maybe<Scalars['String']>
}

export enum Permission {
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

export type Query = {
  __typename?: 'Query'
  board?: Maybe<Board>
  boardLink?: Maybe<BoardLink>
  boardLinks: BoardLinkConnection
  boardTags: Array<BoardTag>
  dashboard: BoardConnection
  event?: Maybe<Event>
  me?: Maybe<User>
  permissions: Array<EntityPermissions>
  popularBoards: BoardConnection
}

export type QueryBoardArgs = {
  boardId: Scalars['ID']
}

export type QueryBoardLinkArgs = {
  boardLinkId: Scalars['ID']
}

export type QueryBoardLinksArgs = {
  boardId: Scalars['ID']
  page: Page
}

export type QueryDashboardArgs = {
  filter?: Maybe<BoardsFilter>
  page: Page
  search?: Maybe<BoardsSearch>
  sort?: Maybe<BoardsSort>
}

export type QueryEventArgs = {
  eventId: Scalars['ID']
}

export type QueryPopularBoardsArgs = {
  filter?: Maybe<BoardsFilter>
  page: Page
}

export type Sub = {
  __typename?: 'Sub'
  _id: Scalars['ID']
}

export type UpdateBoardDescription = {
  _id: Scalars['ID']
  description?: Maybe<Scalars['String']>
  title: Scalars['String']
}

export type UpdateBoardLink = {
  _id: Scalars['ID']
  name: Scalars['String']
  permissions: Array<Permission>
}

export type UpdateBoardTags = {
  _id: Scalars['ID']
  tagsIds?: Maybe<Array<Scalars['ID']>>
}

export type UpdateBoardVisibility = {
  _id: Scalars['ID']
  isPrivate: Scalars['Boolean']
}

export type UpdateEvent = {
  _id: Scalars['ID']
  content: Scalars['String']
  deadline?: Maybe<Scalars['DateTime']>
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
  | 'description'
  | 'events'
  | 'eventsCount'
  | 'isFavorite'
  | 'isPin'
  | 'isPrivate'
  | 'permissions'
  | 'sub'
  | 'tags'
  | 'title'
  | 'user'
  | 'views'
  | BoardKeySpecifier
)[]
export type BoardFieldPolicy = {
  _id?: FieldPolicy<any> | FieldReadFunction<any>
  boardLinks?: FieldPolicy<any> | FieldReadFunction<any>
  description?: FieldPolicy<any> | FieldReadFunction<any>
  events?: FieldPolicy<any> | FieldReadFunction<any>
  eventsCount?: FieldPolicy<any> | FieldReadFunction<any>
  isFavorite?: FieldPolicy<any> | FieldReadFunction<any>
  isPin?: FieldPolicy<any> | FieldReadFunction<any>
  isPrivate?: FieldPolicy<any> | FieldReadFunction<any>
  permissions?: FieldPolicy<any> | FieldReadFunction<any>
  sub?: FieldPolicy<any> | FieldReadFunction<any>
  tags?: FieldPolicy<any> | FieldReadFunction<any>
  title?: FieldPolicy<any> | FieldReadFunction<any>
  user?: FieldPolicy<any> | FieldReadFunction<any>
  views?: FieldPolicy<any> | FieldReadFunction<any>
}
export type BoardConnectionKeySpecifier = ('edges' | 'pageInfo' | BoardConnectionKeySpecifier)[]
export type BoardConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
}
export type BoardEdgeKeySpecifier = ('cursor' | 'node' | BoardEdgeKeySpecifier)[]
export type BoardEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>
  node?: FieldPolicy<any> | FieldReadFunction<any>
}
export type BoardLinkKeySpecifier = (
  | '_id'
  | 'board'
  | 'link'
  | 'name'
  | 'permissions'
  | BoardLinkKeySpecifier
)[]
export type BoardLinkFieldPolicy = {
  _id?: FieldPolicy<any> | FieldReadFunction<any>
  board?: FieldPolicy<any> | FieldReadFunction<any>
  link?: FieldPolicy<any> | FieldReadFunction<any>
  name?: FieldPolicy<any> | FieldReadFunction<any>
  permissions?: FieldPolicy<any> | FieldReadFunction<any>
}
export type BoardLinkConnectionKeySpecifier = (
  | 'edges'
  | 'pageInfo'
  | BoardLinkConnectionKeySpecifier
)[]
export type BoardLinkConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
}
export type BoardLinkEdgeKeySpecifier = ('cursor' | 'node' | BoardLinkEdgeKeySpecifier)[]
export type BoardLinkEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>
  node?: FieldPolicy<any> | FieldReadFunction<any>
}
export type BoardTagKeySpecifier = ('_id' | 'name' | BoardTagKeySpecifier)[]
export type BoardTagFieldPolicy = {
  _id?: FieldPolicy<any> | FieldReadFunction<any>
  name?: FieldPolicy<any> | FieldReadFunction<any>
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
export type EventKeySpecifier = ('_id' | 'content' | 'deadline' | 'title' | EventKeySpecifier)[]
export type EventFieldPolicy = {
  _id?: FieldPolicy<any> | FieldReadFunction<any>
  content?: FieldPolicy<any> | FieldReadFunction<any>
  deadline?: FieldPolicy<any> | FieldReadFunction<any>
  title?: FieldPolicy<any> | FieldReadFunction<any>
}
export type EventConnectionKeySpecifier = ('edges' | 'pageInfo' | EventConnectionKeySpecifier)[]
export type EventConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
}
export type EventEdgeKeySpecifier = ('cursor' | 'node' | EventEdgeKeySpecifier)[]
export type EventEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>
  node?: FieldPolicy<any> | FieldReadFunction<any>
}
export type MutationKeySpecifier = (
  | 'createBoard'
  | 'createBoardLink'
  | 'createBoardTag'
  | 'createEvent'
  | 'createSub'
  | 'markBoardAsFavorite'
  | 'markBoardAsPin'
  | 'removeBoard'
  | 'removeBoardLink'
  | 'removeBoardTag'
  | 'removeEvent'
  | 'removeSub'
  | 'unmarkBoardAsFavorite'
  | 'unmarkBoardAsPin'
  | 'updateAvatar'
  | 'updateBoardDescription'
  | 'updateBoardLink'
  | 'updateBoardTags'
  | 'updateBoardVisibility'
  | 'updateEvent'
  | 'updateProfile'
  | MutationKeySpecifier
)[]
export type MutationFieldPolicy = {
  createBoard?: FieldPolicy<any> | FieldReadFunction<any>
  createBoardLink?: FieldPolicy<any> | FieldReadFunction<any>
  createBoardTag?: FieldPolicy<any> | FieldReadFunction<any>
  createEvent?: FieldPolicy<any> | FieldReadFunction<any>
  createSub?: FieldPolicy<any> | FieldReadFunction<any>
  markBoardAsFavorite?: FieldPolicy<any> | FieldReadFunction<any>
  markBoardAsPin?: FieldPolicy<any> | FieldReadFunction<any>
  removeBoard?: FieldPolicy<any> | FieldReadFunction<any>
  removeBoardLink?: FieldPolicy<any> | FieldReadFunction<any>
  removeBoardTag?: FieldPolicy<any> | FieldReadFunction<any>
  removeEvent?: FieldPolicy<any> | FieldReadFunction<any>
  removeSub?: FieldPolicy<any> | FieldReadFunction<any>
  unmarkBoardAsFavorite?: FieldPolicy<any> | FieldReadFunction<any>
  unmarkBoardAsPin?: FieldPolicy<any> | FieldReadFunction<any>
  updateAvatar?: FieldPolicy<any> | FieldReadFunction<any>
  updateBoardDescription?: FieldPolicy<any> | FieldReadFunction<any>
  updateBoardLink?: FieldPolicy<any> | FieldReadFunction<any>
  updateBoardTags?: FieldPolicy<any> | FieldReadFunction<any>
  updateBoardVisibility?: FieldPolicy<any> | FieldReadFunction<any>
  updateEvent?: FieldPolicy<any> | FieldReadFunction<any>
  updateProfile?: FieldPolicy<any> | FieldReadFunction<any>
}
export type PageInfoKeySpecifier = (
  | 'endCursor'
  | 'hasNextPage'
  | 'hasPreviousPage'
  | 'startCursor'
  | PageInfoKeySpecifier
)[]
export type PageInfoFieldPolicy = {
  endCursor?: FieldPolicy<any> | FieldReadFunction<any>
  hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>
  hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>
  startCursor?: FieldPolicy<any> | FieldReadFunction<any>
}
export type QueryKeySpecifier = (
  | 'board'
  | 'boardLink'
  | 'boardLinks'
  | 'boardTags'
  | 'dashboard'
  | 'event'
  | 'me'
  | 'permissions'
  | 'popularBoards'
  | QueryKeySpecifier
)[]
export type QueryFieldPolicy = {
  board?: FieldPolicy<any> | FieldReadFunction<any>
  boardLink?: FieldPolicy<any> | FieldReadFunction<any>
  boardLinks?: FieldPolicy<any> | FieldReadFunction<any>
  boardTags?: FieldPolicy<any> | FieldReadFunction<any>
  dashboard?: FieldPolicy<any> | FieldReadFunction<any>
  event?: FieldPolicy<any> | FieldReadFunction<any>
  me?: FieldPolicy<any> | FieldReadFunction<any>
  permissions?: FieldPolicy<any> | FieldReadFunction<any>
  popularBoards?: FieldPolicy<any> | FieldReadFunction<any>
}
export type SubKeySpecifier = ('_id' | SubKeySpecifier)[]
export type SubFieldPolicy = {
  _id?: FieldPolicy<any> | FieldReadFunction<any>
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
  BoardConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | BoardConnectionKeySpecifier
      | (() => undefined | BoardConnectionKeySpecifier)
    fields?: BoardConnectionFieldPolicy
  }
  BoardEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | BoardEdgeKeySpecifier | (() => undefined | BoardEdgeKeySpecifier)
    fields?: BoardEdgeFieldPolicy
  }
  BoardLink?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | BoardLinkKeySpecifier | (() => undefined | BoardLinkKeySpecifier)
    fields?: BoardLinkFieldPolicy
  }
  BoardLinkConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | BoardLinkConnectionKeySpecifier
      | (() => undefined | BoardLinkConnectionKeySpecifier)
    fields?: BoardLinkConnectionFieldPolicy
  }
  BoardLinkEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | BoardLinkEdgeKeySpecifier | (() => undefined | BoardLinkEdgeKeySpecifier)
    fields?: BoardLinkEdgeFieldPolicy
  }
  BoardTag?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | BoardTagKeySpecifier | (() => undefined | BoardTagKeySpecifier)
    fields?: BoardTagFieldPolicy
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
  EventConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | EventConnectionKeySpecifier
      | (() => undefined | EventConnectionKeySpecifier)
    fields?: EventConnectionFieldPolicy
  }
  EventEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | EventEdgeKeySpecifier | (() => undefined | EventEdgeKeySpecifier)
    fields?: EventEdgeFieldPolicy
  }
  Mutation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier)
    fields?: MutationFieldPolicy
  }
  PageInfo?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier)
    fields?: PageInfoFieldPolicy
  }
  Query?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier)
    fields?: QueryFieldPolicy
  }
  Sub?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | SubKeySpecifier | (() => undefined | SubKeySpecifier)
    fields?: SubFieldPolicy
  }
  User?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier)
    fields?: UserFieldPolicy
  }
}
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies
