import React from 'react'
import {RouteObject} from '@eh/shared/lib/router'
import {Board} from './board'
import {Dashboard} from './dashboard'
import {Landing} from './landing'

export const routes: RouteObject[] = [
  {path: '/board/:id', element: <Board />},
  {path: '/', element: <Dashboard />},
  {path: '/id', element: <Landing />},
]
