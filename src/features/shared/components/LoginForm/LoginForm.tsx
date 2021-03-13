import React from 'react'
import {Button, ControlLabel, Icon, IconButton, Input, Tooltip, Whisper} from 'rsuite'
import {Flex} from 'reflexbox'
import {useForm} from 'react-hook-form'
import noop from 'noop6'
import {Spacing} from '@eh/react/ui'

export type LoginFormProps = {
  onSubmit?: (user: {email: string; password: string}) => unknown
  onGoogleClick?: () => unknown
}

export const LoginForm: React.FC<LoginFormProps> = ({onSubmit = noop, onGoogleClick}) => {
  const {register, handleSubmit} = useForm()

  return (
    <Flex as="form" flexDirection="column" onSubmit={handleSubmit(onSubmit)}>
      <ControlLabel htmlFor="email">Email</ControlLabel>
      <Input name="email" inputRef={register({required: true})} id="email" type="email" />
      <Spacing space="1rem" vertical />
      <ControlLabel htmlFor="password">Password</ControlLabel>
      <Input name="password" inputRef={register({required: true})} id="password" type="password" />
      <Spacing space="1rem" vertical />
      <Flex justifyContent="space-between">
        <Whisper
          placement="rightStart"
          trigger="hover"
          speaker={<Tooltip>Login with Google</Tooltip>}
        >
          <IconButton
            aria-label="login with google"
            appearance="ghost"
            icon={<Icon icon="google" />}
            onClick={onGoogleClick}
          />
        </Whisper>
        <Button appearance="primary" type="submit">
          Login
        </Button>
      </Flex>
    </Flex>
  )
}
