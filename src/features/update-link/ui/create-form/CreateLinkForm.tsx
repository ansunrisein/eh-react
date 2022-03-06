import React from 'react'
import {Controller, useForm} from 'react-hook-form'
import {RiLightbulbFlashFill, RiLightbulbFlashLine} from 'react-icons/ri'
import {FormattedMessage, useIntl} from 'react-intl'
import {Button, Divider, Input, InputGroup, Loader} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {Permission} from '@eh/shared/api'
import {withModuleLocalization} from '@eh/shared/lib/i18n'
import {Flex} from '@eh/shared/lib/reflexbox'
import {useCreateBoardLink} from '@eh/entities/board-link'
import {PermissionsInput} from '../permissions-input'
import {texts} from './texts'
import S from './CreateLinkForm.module.scss'

export type CreateLinkFormProps = {
  boardId: string
  onCreate?: () => void
}

export type CreateLinkFormFields = {
  name: string
  permissions: Permission[]
}

export const CreateLinkForm: React.FC<CreateLinkFormProps> = withModuleLocalization(
  'update-link-feature',
)(({boardId, onCreate}) => {
  const {formatMessage} = useIntl()

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
        <h4 className={S.title}>
          <FormattedMessage {...texts.name} />
        </h4>
      </Flex>

      <Controller
        control={control}
        name="name"
        defaultValue=""
        rules={{required: true}}
        render={({field}) => (
          <InputGroup inside>
            <Input placeholder={formatMessage(texts.name)} {...field} />
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

      <h4 className={S.title}>
        <FormattedMessage {...texts.permissions} />
      </h4>

      <Controller
        control={control}
        name="permissions"
        rules={{required: true}}
        render={({field}) => <PermissionsInput {...field} />}
      />

      <Button type="submit" className={S.submit} appearance="primary" disabled={!formState.isValid}>
        <FormattedMessage {...texts.create} />
      </Button>

      {createBoardLinkState.loading && <Loader backdrop center size="md" />}
    </form>
  )
})
