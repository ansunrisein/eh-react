import {Reference} from '@apollo/client'
import {BoardConnection, BoardLinkConnection, EventConnection, PageInfo} from './types'

export const emptyPageInfo: PageInfo = {
  __typename: 'PageInfo',
  startCursor: null,
  hasNextPage: false,
  endCursor: null,
  hasPreviousPage: false,
}

type Connections = {
  Board: BoardConnection
  BoardLink: BoardLinkConnection
  Event: EventConnection
}

type Edge<C extends {edges: unknown[]}> = C['edges'][number]

export const createEmptyConnection = <Entity extends keyof Connections>(entity: Entity) => ({
  __typename: `${entity}Connection` as const,
  pageInfo: emptyPageInfo,
  edges: Array<Edge<ConnectionRef<Connections[Entity]>> & Edge<Connections[Entity]>>(),
})

export type ConnectionRef<T extends Connections[keyof Connections]> = Pick<
  T,
  '__typename' | 'pageInfo'
> & {
  edges: Array<{
    __typename: Edge<T>['__typename']
    cursor: string
    node: Reference | undefined
  }>
}
