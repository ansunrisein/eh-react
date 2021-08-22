import React from 'react'
import * as S from './styles'

export type ButtonProps = {
  onClick?: () => unknown
} & S.ButtonStylesProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>

export const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  color = 'primary0',
  onClick,
  children,
  ...props
}) => (
  <button css={S.button({color, type})} onClick={onClick} {...props}>
    {children}
  </button>
)
