import React from 'react'
import {Router as RouterRouter, RouterProps as RouterRouterProps} from 'react-router-dom'
import {History} from 'history'

export type RouterProps = {
  history: History
} & Omit<RouterRouterProps, 'location' | 'navigationType' | 'navigator'>

export const Router: React.FC<RouterProps> = ({history, children, ...props}) => {
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  })

  React.useLayoutEffect(() => history.listen(setState), [history])

  return (
    <RouterRouter
      location={state.location}
      navigationType={state.action}
      navigator={history}
      {...props}
    >
      {children}
    </RouterRouter>
  )
}
