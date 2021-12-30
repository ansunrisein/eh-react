import React from 'react'
import {RouteObject} from '@eh/shared/lib/router'
import {AuthGuardProps} from '@eh/entities/session'
import {Board} from './board'
import {Dashboard} from './dashboard'
import {Landing} from './landing'
import {Settings} from './settings'

export type AppRoute = RouteObject & Pick<AuthGuardProps, 'isPublic' | 'isPrivate'>

export const routes: AppRoute[] = [
  {path: '/settings', isPrivate: true, element: <Settings />},
  {path: '/board/:id', element: <Board />},
  {path: '/', element: <Dashboard />},
  {path: '/id', isPublic: true, element: <Landing />},
]
