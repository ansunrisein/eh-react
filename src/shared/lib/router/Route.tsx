import React from 'react'
import {Route as RouterRoute, RouteProps as RouterRouteProps} from 'react-router-dom'
import {Paths} from './types'

export type RouteProps = {
  path: Paths
} & Omit<RouterRouteProps, 'path'>

export const Route: React.FC<RouteProps> = RouterRoute
