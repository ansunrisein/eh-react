import React from 'react'
import {useIsAuthenticated} from './react'

export type AuthGuardProps = {
  isPrivate?: boolean
  isPublic?: boolean
  privateFallback?: React.ReactNode
  publicFallback?: React.ReactNode
}

export const AuthGuard: React.FC<AuthGuardProps> = ({
  children,
  isPrivate,
  isPublic,
  publicFallback = 'This content available to guests only',
  privateFallback = 'This content is protected',
}) => {
  const isAuthenticated = useIsAuthenticated()

  if (isPrivate && !isAuthenticated) {
    return <>{privateFallback}</>
  }

  if (isPublic && isAuthenticated) {
    return <>{publicFallback}</>
  }

  return <>{children}</>
}
