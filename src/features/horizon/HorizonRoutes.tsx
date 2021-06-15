import React from 'react'
import {Route, Switch, useRouteMatch} from 'react-router-dom'
import {BoardPage, Horizon} from './pages'

export const HorizonRoutes: React.FC = () => {
  const {path} = useRouteMatch()

  return (
    <Switch>
      <Route path={`${path}/`} exact>
        <Horizon />
      </Route>
      <Route path={`${path}/board/:id`}>
        <BoardPage />
      </Route>
    </Switch>
  )
}
