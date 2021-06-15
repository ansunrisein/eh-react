import React from 'react'
import {Redirect, Route, RouteProps} from 'react-router-dom'
import {useMe} from '@eh/react/features/user/hooks'

export const PublicRoute: React.FC<RouteProps> = props => {
  const {me} = useMe()

  if (me) {
    return <Redirect to="/horizon" />
  }

  return <Route {...props} />
}
