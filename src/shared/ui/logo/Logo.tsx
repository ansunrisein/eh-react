import React from 'react'
import cx from 'classnames'
import S from './Logo.module.scss'

export type LogoProps = {
  size?: 'lg' | 'md'
} & React.HTMLAttributes<HTMLHeadingElement>

export const Logo: React.FC<LogoProps> = ({size = 'md', className, ...props}) => (
  <h4 className={cx(S.logo, S[`size-${size}`], className)} {...props}>
    Event Horizon
  </h4>
)
