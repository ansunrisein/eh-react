import React from 'react'
import c from 'classnames'
import s from './Logo.module.css'

export type LogoProps = {
  size?: 'lg' | 'md'
}

export const Logo: React.FC<LogoProps> = ({size = 'md'}) => (
  <h4 className={c(s.logo, s[`size-${size}`])}>Event Horizon</h4>
)
