import React, {useEffect} from 'react'
import {Controller, useForm} from 'react-hook-form'
import {RiUserFill} from 'react-icons/ri'
import {Button, Form, Input, InputGroup, Loader} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {Flex} from '@eh/shared/lib/reflexbox'
import {EditUserInfoMutationVariables, useEditUserInfo, useUser} from '@eh/entities/user'
import S from './EditUserInfoForm.module.scss'

export type EditUserInfoFormProps = {
  onEdit?: () => void
}

export type EditUserInfoFormFields = EditUserInfoMutationVariables

export const EditUserInfoForm: React.FC<EditUserInfoFormProps> = ({onEdit}) => {
  const {control, handleSubmit, reset, formState} = useForm<EditUserInfoFormFields>()

  const {user, loading} = useUser()
  const [editing, update] = useEditUserInfo()

  const edit = async (data: EditUserInfoFormFields) => {
    await update(data)
    onEdit?.()
    reset(data)
  }

  useEffect(() => {
    if (user) {
      reset(user)
    }
  }, [reset, user])

  if (loading) {
    return <Loader />
  }

  return (
    <form onSubmit={handleSubmit(edit)}>
      <Flex flexDirection="column" gap="2rem">
        <div>
          <Form.ControlLabel htmlFor="nickname" className={S.label}>
            Nickname
          </Form.ControlLabel>
          <InputGroup>
            <InputGroup.Addon>@</InputGroup.Addon>
            <Controller
              control={control}
              name="nickname"
              render={({field}) => <Input id="nickname" {...field} />}
            />
          </InputGroup>
        </div>

        <div>
          <Form.ControlLabel htmlFor="name" className={S.label}>
            Full Name
          </Form.ControlLabel>
          <InputGroup>
            <InputGroup.Addon>
              <Icon as={RiUserFill} />
            </InputGroup.Addon>
            <Controller
              control={control}
              name="name"
              render={({field}) => <Input id="name" {...field} value={field.value || ''} />}
            />
          </InputGroup>
        </div>

        <Button
          loading={editing.loading}
          disabled={!formState.isDirty}
          type="submit"
          appearance="primary"
          className={S.button}
        >
          Save
        </Button>
      </Flex>
    </form>
  )
}
