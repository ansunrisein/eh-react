import React from 'react'
import c from 'classnames'
import S from './Logo.module.scss'

export type LogoProps = {
  size?: 'lg' | 'md'
}

export const Logo: React.FC<LogoProps> = ({size = 'md'}) => (
  <h4 className={c(S.logo, S[`size-${size}`])}>Event Horizon</h4>
)
