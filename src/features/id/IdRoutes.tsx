import React from 'react'
import {Route, Switch, useRouteMatch} from 'react-router-dom'
import {LoginPage} from './pages'

export const IdRoutes: React.FC = () => {
  const {path} = useRouteMatch()

  return (
    <Switch>
      <Route path={`${path}/`} exact>
        <LoginPage />
      </Route>
    </Switch>
  )
}
