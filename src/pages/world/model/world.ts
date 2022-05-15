import {forward} from 'effector'
import {BoardsDeps, createBoards} from './boards'
import {createPopularBoards, PopularBoardsDeps} from './popular'

export type WorldPage = ReturnType<typeof createWorldPage>

export type WorldPageDeps = BoardsDeps & PopularBoardsDeps

export const createWorldPage = ({domain, search, apollo}: WorldPageDeps) => {
  const reset = domain.event()

  const boards = createBoards({domain, search, apollo})
  const popular = createPopularBoards({domain, apollo})

  forward({
    from: reset,
    to: [boards.reset, popular.reset],
  })

  return {
    reset,
    boards,
    popular,
  }
}
