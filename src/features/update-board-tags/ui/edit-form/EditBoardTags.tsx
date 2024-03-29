import React, {useCallback} from 'react'
import {Controller, useForm} from 'react-hook-form'
import {RiCheckLine} from 'react-icons/ri'
import {FormattedMessage} from 'react-intl'
import {IconButton, Loader} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {withModuleLocalization} from '@eh/shared/lib/i18n'
import {BoardFragment, useEditBoardTags} from '@eh/entities/board'
import {BoardTagPicker, BoardTagPickerProps} from '@eh/entities/board-tags'
import {texts} from './texts'
import S from './EditBoardTags.module.scss'

export type EditBoardTagsProps = {
  board: BoardFragment
  onEdit?: () => unknown
} & BoardTagPickerProps

export const EditBoardTags: React.FC<EditBoardTagsProps> = withModuleLocalization(
  'update-board-tags-feature',
)(({board, onEdit}) => {
  const [editing, edit] = useEditBoardTags()

  const {control, handleSubmit} = useForm({
    mode: 'onSubmit',
  })

  const submit = useCallback(
    ({tagsIds}: {tagsIds: string[]}) => {
      edit({id: board._id, tagsIds})
      onEdit?.()
    },
    [board._id, edit, onEdit],
  )

  return (
    <div className="relative">
      <h5>
        <FormattedMessage {...texts.tags} />
      </h5>
      <form onSubmit={handleSubmit(submit)} className={S.container}>
        {board?.tags !== null || !editing.loading ? (
          <>
            <Controller
              name="tagsIds"
              control={control}
              render={({field: {value, name, onChange, onBlur}}) => (
                <BoardTagPicker
                  className={S.picker}
                  value={value}
                  name={name}
                  onChange={onChange}
                  onBlur={onBlur}
                  defaultValue={board?.tags?.map(e => e._id)}
                />
              )}
            />
            <IconButton loading={editing.loading} type="submit" icon={<Icon as={RiCheckLine} />} />
          </>
        ) : (
          <Loader center />
        )}
      </form>
    </div>
  )
})
