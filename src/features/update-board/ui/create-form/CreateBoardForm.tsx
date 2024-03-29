import React, {useCallback} from 'react'
import {useCreateBoard} from '@eh/entities/board'
import {BoardForm, BoardFormFields, BoardFormProps} from '../form'

export type CreateBoardFormProps = {
  onCreate?: () => void
} & Omit<BoardFormProps, 'onSubmit'>

export const CreateBoardForm: React.FC<CreateBoardFormProps> = ({onCreate, ...props}) => {
  const [{loading}, createBoard] = useCreateBoard()

  const handleSubmit = useCallback(
    async (data: BoardFormFields) => {
      await createBoard(data)
      onCreate?.()
    },
    [createBoard, onCreate],
  )
  return <BoardForm onSubmit={handleSubmit} loading={loading} {...props} />
}
