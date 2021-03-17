import React from 'react'
import {useForm} from 'react-hook-form'
import noop from 'noop6'
import {Button, ControlLabel, Icon, Input, InputGroup} from 'rsuite'
import {Flex} from 'reflexbox'
import {Spacing} from '@eh/react/ui'
import {UpdateProfileVariables} from '../../graphql/types/UpdateProfile'

export type ProfileFormProps = {
  defaultValues?: UpdateProfileVariables
  onSubmit?: (data: UpdateProfileVariables) => unknown
}

export const ProfileForm: React.FC<ProfileFormProps> = ({defaultValues, onSubmit = noop}) => {
  const {register, handleSubmit, formState} = useForm({defaultValues})

  return (
    <Flex as="form" flexDirection="column" onSubmit={handleSubmit(onSubmit)}>
      <ControlLabel htmlFor="nickname">Nickname</ControlLabel>
      <InputGroup>
        <InputGroup.Addon>@</InputGroup.Addon>
        <Input
          id="nickname"
          aria-label="nickname"
          name="nickname"
          inputRef={register({required: true})}
        />
      </InputGroup>
      <Spacing space="2rem" vertical />
      <ControlLabel htmlFor="name">Full Name</ControlLabel>
      <InputGroup>
        <InputGroup.Addon>
          <Icon icon="avatar" />
        </InputGroup.Addon>
        <Input id="name" aria-label="name" name="name" inputRef={register} />
      </InputGroup>
      <Spacing space="2rem" vertical />
      <Button
        disabled={!formState.isDirty}
        type="submit"
        appearance="primary"
        style={{alignSelf: 'flex-end'}}
      >
        Save
      </Button>
    </Flex>
  )
}
