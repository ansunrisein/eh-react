import React from 'react'
import cx from 'classnames'
import S from './Logo.module.scss'

export type LogoProps = {
  size?: 'lg' | 'md'
  short?: boolean
} & React.HTMLAttributes<HTMLHeadingElement>

export const Logo: React.FC<LogoProps> = ({size = 'md', short, className, ...props}) => (
  <h4 className={cx(S.logo, S[`size-${size}`], className)} {...props}>
    {short ? 'Event Horizon' : 'e|h'}
  </h4>
)
