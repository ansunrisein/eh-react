import {Domain} from 'effector'
import {ApolloClient} from '@apollo/client'
import {BoardTagsDocument, BoardTagsQuery} from '../api'

export type BoardTagsEntity = ReturnType<typeof createBoardTagsEntity>

export type BoardTagsEntityDeps = {
  domain: Domain
  apollo: ApolloClient<unknown>
}

export const createBoardTagsEntity = ({domain, apollo}: BoardTagsEntityDeps) => {
  const fetchBoardTagsFx = domain.effect(() =>
    apollo
      .query<BoardTagsQuery>({
        query: BoardTagsDocument,
        fetchPolicy: 'cache-first',
      })
      .then(response => response.data?.boardTags),
  )

  const reset = domain.event()

  const $boardTags = domain
    .store<BoardTagsQuery['boardTags'] | null>(null)
    .on(fetchBoardTagsFx.doneData, (_, tags) => tags)
    .reset(reset)

  return {
    $boardTags,
    fetchBoardTagsFx,
    reset,
  }
}
