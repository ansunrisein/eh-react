import React from 'react'
import {RouteObject as RouterRouteObject} from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ApplicationRoutes {}

export type Paths = ApplicationRoutes[keyof ApplicationRoutes]

export type RouteObject = {
  path: Paths
  element: React.ReactElement
} & Omit<RouterRouteObject, 'path' | 'element'>
