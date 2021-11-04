import React from 'react'
import cx from 'classnames'
import {Link as RouterLink, LinkProps as RouterLinkProps} from 'react-router-dom'
import {Paths} from './types'
import S from './Link.module.scss'

export type LinkProps = {
  to: Paths
} & Omit<RouterLinkProps, 'to'>

export const Link: React.FC<LinkProps> = ({className, ...props}) => (
  <RouterLink className={cx(S.link, className)} {...props} />
)
