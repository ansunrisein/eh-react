import React from 'react'
import {Box, Flex} from 'reflexbox'
import {Button, Panel} from 'rsuite'
import {LoginForm, LoginFormProps} from '@eh/react/features/shared/components'
import {Logo, Spacing} from '@eh/react/ui'

export type LoginProps = {
  onLogin?: LoginFormProps['onSubmit']
  onGoogleLogin?: LoginFormProps['onGoogleClick']
  onSignUpClick?: () => unknown
  onForgotClick?: () => unknown
}

export const Login: React.FC<LoginProps> = ({
  onLogin,
  onGoogleLogin,
  onSignUpClick,
  onForgotClick,
}) => (
  <Flex flexDirection="column" alignItems="center" marginTop="9rem">
    <Logo size="lg" />
    <Spacing space="6rem" vertical />
    <Panel bordered shaded>
      <Flex flexDirection="column" width="18rem">
        <LoginForm onSubmit={onLogin} onGoogleClick={onGoogleLogin} />
        <Spacing space="0.5rem" vertical />
        <Box alignSelf="flex-end">
          <Button appearance="link" onClick={onSignUpClick}>
            Sign up
          </Button>
          <Button appearance="link" onClick={onForgotClick}>
            Forgot password?
          </Button>
        </Box>
      </Flex>
    </Panel>
  </Flex>
)
