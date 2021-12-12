import React from 'react'
import {Controller, useForm} from 'react-hook-form'
import {RiLightbulbFlashFill, RiLightbulbFlashLine} from 'react-icons/ri'
import {Button, Divider, Input, InputGroup, Loader} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {Permission} from '@eh/shared/api'
import {Flex} from '@eh/shared/lib/reflexbox'
import {useCreateBoardLink} from '@eh/entities/board-link'
import {PermissionsInput} from '../permissions-input'
import S from './CreateLinkForm.module.scss'

export type CreateLinkFormProps = {
  boardId: string
  onCreate?: () => void
}

export type CreateLinkFormFields = {
  name: string
  permissions: Permission[]
}

export const CreateLinkForm: React.FC<CreateLinkFormProps> = ({boardId, onCreate}) => {
  const {control, handleSubmit, formState, watch} = useForm({mode: 'onChange'})

  const [createBoardLinkState, createBoardLink] = useCreateBoardLink()

  const create = async (link: CreateLinkFormFields) => {
    await createBoardLink({boardId, ...link})
    onCreate?.()
  }

  const {name} = watch()

  return (
    <form onSubmit={handleSubmit(create)}>
      <Flex>
        <h4 className={S.title}>Name</h4>
      </Flex>

      <Controller
        control={control}
        name="name"
        defaultValue=""
        rules={{required: true}}
        render={({field}) => (
          <InputGroup inside>
            <Input {...field} />
            <InputGroup.Addon>
              <Icon
                aria-label="Idea"
                as={name?.length ? RiLightbulbFlashFill : RiLightbulbFlashLine}
              />
            </InputGroup.Addon>
          </InputGroup>
        )}
      />

      <Divider />

      <h4 className={S.title}>Permissions</h4>

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
