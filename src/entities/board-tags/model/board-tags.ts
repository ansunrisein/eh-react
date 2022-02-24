import {Domain} from 'effector'

export type BoardTagsEntity = ReturnType<typeof createBoardTagsEntity>

export type BoardTagsEntityDeps = {
  domain: Domain
}

export const createBoardTagsEntity = ({domain}: BoardTagsEntityDeps) => {
  return {}
}
