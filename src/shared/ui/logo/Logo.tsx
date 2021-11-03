import React from 'react'
import cx from 'classnames'
import S from './Logo.module.scss'

export type LogoProps = {
  size?: 'lg' | 'md'
}

export const Logo: React.FC<LogoProps> = ({size = 'md'}) => (
  <h4 className={cx(S.logo, S[`size-${size}`])}>Event Horizon</h4>
)
