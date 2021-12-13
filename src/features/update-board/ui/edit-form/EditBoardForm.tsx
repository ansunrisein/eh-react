import React from 'react'
import cx from 'classnames'
import {Controller, useForm} from 'react-hook-form'
import {Button, Input, Toggle} from 'rsuite'
import {BoardFragment} from '@eh/shared/api'
import {useEditBoard, usePermissions} from '@eh/entities/board'
import S from './EditBoardForm.module.scss'

export type EditBoardFormProps = {
  board: BoardFragment
  onEdit?: () => void
}

export const EditBoardForm: React.FC<EditBoardFormProps> = ({board, onEdit}) => {
  const {control, handleSubmit, formState, reset} = useForm({defaultValues: board})

  const {canUpdateDescription, canUpdateVisibility} = usePermissions(board)

  const [{loading}, editBoard] = useEditBoard()

  const edit = async (board: BoardFragment) => {
    await editBoard({...board, id: board._id})
    onEdit?.()
    reset(board)
  }

  return (
    <form onSubmit={handleSubmit(edit)}>
      <section className={S.section}>
        <h5>Title</h5>
        <Controller
          control={control}
          name="title"
          render={({field}) => (
            <Input className={S.field} disabled={!canUpdateDescription} {...field} />
          )}
        />
      </section>

      <section>
        <h5>Private</h5>
        <Controller
          name="isPrivate"
          control={control}
          render={({field: {value, ...field}}) => (
            <Toggle
              checked={value}
              className={cx(S.field, 'block')}
              disabled={!canUpdateVisibility}
              {...field}
            />
          )}
        />
      </section>

      <Button
        loading={loading}
        disabled={!formState.isDirty}
        className={S.button}
        appearance="primary"
        type="submit"
      >
        Save
      </Button>
    </form>
  )
}
