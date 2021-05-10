import React, {ReactElement} from 'react'
import {useAuth} from '@eh/react/features/shared/contexts/AuthContext'

export type UserSuspenseProps = {
  fallback: ReactElement
}

export const UserSuspense: React.FC<UserSuspenseProps> = ({children, fallback}) => {
  const {loading} = useAuth()

  return loading ? fallback : <>{children}</>
}
