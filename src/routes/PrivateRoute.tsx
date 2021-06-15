import React from 'react'
import {Redirect, Route, RouteProps} from 'react-router-dom'
import {useMe} from '@eh/react/features/user/hooks'

export const PrivateRoute: React.FC<RouteProps> = props => {
  const {me} = useMe()

  if (!me) {
    return <Redirect to="/id" />
  }

  return <Route {...props} />
}
