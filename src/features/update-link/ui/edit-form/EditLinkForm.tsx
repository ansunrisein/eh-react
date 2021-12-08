import React, {useLayoutEffect} from 'react'
import {Controller, useForm} from 'react-hook-form'
import {Button, Loader} from 'rsuite'
import {Permission} from '@eh/shared/api'
import {useBoardLink, useEditBoardLink} from '@eh/entities/board-link'
import {PermissionsInput} from '../permissions-input'

export type EditLinkFormProps = {
  linkId: string
  onEdit?: () => void
}

export type EditLinkFormFields = {
  permissions: Permission[]
}

export const EditLinkForm: React.FC<EditLinkFormProps> = ({linkId, onEdit}) => {
  const {control, handleSubmit, reset, formState} = useForm({mode: 'onChange'})

  const {boardLink, loading} = useBoardLink(linkId)
  const [editBoardLinkState, editBoardLink] = useEditBoardLink()

  const edit = async (link: EditLinkFormFields) => {
    await editBoardLink({_id: linkId, ...link})
    onEdit?.()
  }

  useLayoutEffect(() => {
    if (boardLink) {
      reset(boardLink)
    }
  }, [boardLink, reset])

  return (
    <form onSubmit={handleSubmit(edit)}>
      <Controller
        control={control}
        name="permissions"
        render={({field}) => <PermissionsInput {...field} />}
      />

      <Button type="submit" appearance="primary" disabled={!formState.isDirty}>
        Save
      </Button>

      {(editBoardLinkState.loading || loading) && <Loader backdrop center size="md" />}
    </form>
  )
}
