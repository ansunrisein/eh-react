import React, {useLayoutEffect} from 'react'
import {Controller, useForm} from 'react-hook-form'
import {RiEditFill} from 'react-icons/ri'
import {Button, Divider, Input, Loader} from 'rsuite'
import {useBooleanState} from 'use-boolean-state'
import {Icon} from '@rsuite/icons'
import {Permission} from '@eh/shared/api'
import {Flex} from '@eh/shared/lib/reflexbox'
import {useBoardLink, useEditBoardLink} from '@eh/entities/board-link'
import {PermissionsInput} from '../permissions-input'
import S from './EditLinkForm.module.scss'

export type EditLinkFormProps = {
  linkId: string
  onEdit?: () => void
}

export type EditLinkFormFields = {
  name: string
  permissions: Permission[]
}

export const EditLinkForm: React.FC<EditLinkFormProps> = ({linkId, onEdit}) => {
  const {control, handleSubmit, reset, formState, watch} = useForm<EditLinkFormFields>({
    mode: 'onChange',
  })

  const [isNameEditingActive, openNameEditing, closeNameEditing] = useBooleanState(false)

  const {boardLink, loading} = useBoardLink(linkId)
  const [editBoardLinkState, editBoardLink] = useEditBoardLink()

  const edit = async (link: EditLinkFormFields) => {
    await editBoardLink({_id: linkId, ...link})
    closeNameEditing()
    onEdit?.()
  }

  useLayoutEffect(() => {
    if (boardLink) {
      reset(boardLink)
    }
  }, [boardLink, reset])

  const {name} = watch()

  return (
    <form onSubmit={handleSubmit(edit)}>
      <Flex alignItems="center" gap="10px" className={isNameEditingActive ? S.title : S.name}>
        {isNameEditingActive ? <h5>Name</h5> : <h4>{name}</h4>}
        {!isNameEditingActive && <Icon as={RiEditFill} onClick={openNameEditing} />}
      </Flex>

      {isNameEditingActive && (
        <Controller
          control={control}
          name="name"
          defaultValue=""
          render={({field}) => <Input {...field} />}
        />
      )}

      {isNameEditingActive && <Divider />}

      <h5 className={S.title}>Permission</h5>
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
