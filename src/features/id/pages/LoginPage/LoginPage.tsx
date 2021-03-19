import React from 'react'
import {useLogin} from '@eh/react/features/shared/hooks'
import {Login} from '../../views'

export const LoginPage: React.FC = () => {
  const {login, loading} = useLogin()

  return <Login onGoogleLogin={login} loading={loading} />
}
