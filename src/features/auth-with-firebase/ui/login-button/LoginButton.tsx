import React from 'react'
import {RiGoogleFill} from 'react-icons/ri'
import {FormattedMessage} from 'react-intl'
import {Button, ButtonProps} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {withModuleLocalization} from '@eh/shared/lib/i18n'
import {Flex} from '@eh/shared/lib/reflexbox'
import {useLogin} from '../../model'
import {texts} from './texts'

export type LoginButtonProps = Omit<ButtonProps, 'loading'>

export const LoginButton: React.FC<LoginButtonProps> = withModuleLocalization(
  'auth-with-firebase-feature',
)(({onClick, ...props}) => {
  const {login, loading} = useLogin()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    login()
    onClick?.(e)
  }

  return (
    <Button onClick={handleClick} loading={loading} {...props}>
      <Flex alignItems="center" gap="0.5rem">
        <FormattedMessage
          {...texts.loginWith}
          values={{
            icon: () => <Icon as={RiGoogleFill} />,
          }}
        />
      </Flex>
    </Button>
  )
})
