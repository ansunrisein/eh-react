import React from 'react'
import cx from 'classnames'
import {Controller, useForm} from 'react-hook-form'
import {FormattedMessage} from 'react-intl'
import {Button, Input, Toggle} from 'rsuite'
import {withModuleLocalization} from '@eh/shared/lib/i18n'
import {
  BoardFragment,
  useEditDescriptionBoard,
  useEditVisibilityBoard,
  usePermissions,
} from '@eh/entities/board'
import {texts} from './texts'
import S from './EditBoardForm.module.scss'

export type EditBoardFormProps = {
  board: BoardFragment
  onEdit?: () => void
}

export const EditBoardForm: React.FC<EditBoardFormProps> = withModuleLocalization(
  'update-board-feature',
)(({board, onEdit}) => {
  const {control, handleSubmit, formState, reset} = useForm({defaultValues: board})

  const {canUpdateDescription, canUpdateVisibility} = usePermissions(board)

  const [editingDescription, editDescriptionBoard] = useEditDescriptionBoard()
  const [editingVisibility, editVisibilityBoard] = useEditVisibilityBoard()

  const editDescription = async (board: BoardFragment) => {
    await editDescriptionBoard({...board, id: board._id})
    onEdit?.()
    reset(board)
  }

  const editVisibility = async (isPrivate: boolean) => {
    await editVisibilityBoard({id: board._id, isPrivate})
    onEdit?.()
  }

  return (
    <>
      <form onSubmit={handleSubmit(editDescription)} className={S.section}>
        <h5>
          <FormattedMessage {...texts.title} />
        </h5>
        <Controller
          control={control}
          name="title"
          render={({field}) => (
            <Input className={S.margin} disabled={!canUpdateDescription} {...field} />
          )}
        />

        <h5 className={S.margin}>
          <FormattedMessage {...texts.description} />
        </h5>
        <Controller
          control={control}
          name="description"
          render={({field}) => (
            <Input
              className={S.margin}
              disabled={!canUpdateDescription}
              {...field}
              value={field.value || ''}
            />
          )}
        />

        <Button
          loading={editingDescription.loading}
          disabled={!formState.isDirty}
          className={S.button}
          appearance="primary"
          type="submit"
        >
          <FormattedMessage {...texts.save} />
        </Button>
      </form>

      <section>
        <h5>
          <FormattedMessage {...texts.private} />
        </h5>
        <Toggle
          checked={board.isPrivate}
          className={cx(S.margin, 'block')}
          loading={editingVisibility.loading}
          disabled={!canUpdateVisibility || editingVisibility.loading}
          onChange={editVisibility}
        />
      </section>
    </>
  )
})
