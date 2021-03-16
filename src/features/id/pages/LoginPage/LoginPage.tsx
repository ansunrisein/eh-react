import React from 'react'
import {PageTemplate} from '@eh/react/features/shared/templates'
import {useLogin} from '@eh/react/features/shared/hooks'
import {Login} from '../../views'

export const LoginPage: React.FC = () => {
  const {login} = useLogin()

  return (
    <PageTemplate>
      <Login onGoogleLogin={login} />
    </PageTemplate>
  )
}
