import {BoardFragment} from '@eh/shared/api'

export const isBoardOwner = (
  ownerId: string | null | undefined,
  board: BoardFragment | null | undefined,
) => {
  if (!ownerId || !board) {
    return false
  }

  return ownerId === board.user._id
}
