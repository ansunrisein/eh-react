import React from 'react'
import {Route, Switch, useRouteMatch} from 'react-router-dom'
import {SettingsPage} from './pages'

export const UserRoutes: React.FC = () => {
  const {path} = useRouteMatch()

  return (
    <Switch>
      <Route path={`${path}/settings`}>
        <SettingsPage />
      </Route>
    </Switch>
  )
}
