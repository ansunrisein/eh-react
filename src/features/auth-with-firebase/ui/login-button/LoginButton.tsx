import React from 'react'
import {RiGoogleFill} from 'react-icons/ri'
import {Button, ButtonProps} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {Flex} from '@eh/shared/lib/reflexbox'
import {useLogin} from '../../model'

export type LoginButtonProps = Omit<ButtonProps, 'loading'>

export const LoginButton: React.FC<LoginButtonProps> = ({onClick, ...props}) => {
  const {login, loading} = useLogin()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    login()
    onClick?.(e)
  }

  return (
    <Button onClick={handleClick} loading={loading} {...props}>
      <Flex alignItems="center" gap="0.5rem">
        Login with <Icon as={RiGoogleFill} />
      </Flex>
    </Button>
  )
}
