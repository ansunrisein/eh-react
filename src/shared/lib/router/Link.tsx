import React from 'react'
import {Link as RouterLink, LinkProps as RouterLinkProps} from 'react-router-dom'
import {Paths} from './types'

export type LinkProps = {
  to: Paths
} & Omit<RouterLinkProps, 'to'>

export const Link: React.FC<LinkProps> = props => <RouterLink {...props} />
