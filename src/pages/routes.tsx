import React from 'react'
import {RouteObject} from '@eh/shared/lib/router'
import {Board} from './board'
import {Dashboard} from './dashboard'

export const routes: RouteObject[] = [
  {path: '/board/:id', element: <Board />},
  {path: '/', element: <Dashboard />},
]
