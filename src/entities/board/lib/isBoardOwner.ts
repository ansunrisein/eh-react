import {Board, User} from '@eh/shared/api'

export const isBoardOwner = (
  owner: Pick<User, '_id'> | null | undefined,
  board: {user: Pick<Board['user'], '_id'>} | null | undefined,
) => {
  if (!owner || !board) {
    return false
  }

  return owner._id === board.user._id
}
