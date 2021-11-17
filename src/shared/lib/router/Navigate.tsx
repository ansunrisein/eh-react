import React from 'react'
import {Navigate as RouterNavigate, NavigateProps as RouterNavigateProps} from 'react-router-dom'
import {Paths} from './types'

export type NavigateProps = {
  to: Paths
} & Omit<RouterNavigateProps, 'to'>

export const Navigate: React.FC<NavigateProps> = RouterNavigate
