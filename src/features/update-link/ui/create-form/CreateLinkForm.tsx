import React from 'react'
import {Controller, useForm} from 'react-hook-form'
import {Button, Loader} from 'rsuite'
import {Permission} from '@eh/shared/api'
import {useCreateBoardLink} from '@eh/entities/board-link'
import {PermissionsInput} from '../permissions-input'
import S from './CreateLinkForm.module.scss'

export type CreateLinkFormProps = {
  boardId: string
  onCreate?: () => void
}

export type CreateLinkFormFields = {
  permissions: Permission[]
}

export const CreateLinkForm: React.FC<CreateLinkFormProps> = ({boardId, onCreate}) => {
  const {control, handleSubmit, formState} = useForm({mode: 'onChange'})

  const [createBoardLinkState, createBoardLink] = useCreateBoardLink()

  const create = async (link: CreateLinkFormFields) => {
    await createBoardLink({boardId, ...link})
    onCreate?.()
  }

  return (
    <form onSubmit={handleSubmit(create)}>
      <Controller
        control={control}
        name="permissions"
        rules={{required: true}}
        render={({field}) => <PermissionsInput {...field} />}
      />

      <Button type="submit" className={S.submit} appearance="primary" disabled={!formState.isValid}>
        Create
      </Button>

      {createBoardLinkState.loading && <Loader backdrop center size="md" />}
    </form>
  )
}
