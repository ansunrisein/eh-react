import React from 'react'
import {Flex} from 'reflexbox'
import {Button, Icon, Tooltip, Whisper} from 'rsuite'
import {Logo} from '@eh/react/ui'
import s from './Login.module.css'

export type LoginProps = {
  onGoogleLogin?: () => unknown
  loading?: boolean
}

export const Login: React.FC<LoginProps> = ({onGoogleLogin, loading}) => (
  <div className={s.background}>
    <div className={s.button}>
      <Whisper placement="auto" trigger="hover" speaker={<Tooltip>Login with Google</Tooltip>}>
        <Flex>
          <Button
            loading={loading}
            aria-label="login with google"
            appearance="subtle"
            onClick={onGoogleLogin}
          >
            <Icon icon="sign-in" size="2x" />
          </Button>
        </Flex>
      </Whisper>
    </div>
    <Logo size="lg" />
  </div>
)
