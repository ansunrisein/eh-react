import {css, Theme} from '@emotion/react'
import {Color} from '../theme'

export type ButtonStylesProps = {
  type?: 'primary' | 'secondary'
  color?: Color
}

export const button =
  ({type, color = 'background1'}: ButtonStylesProps) =>
  (theme: Theme) =>
    css({
      padding: '10px 25px',
      borderRadius: 10,
      color: theme.colors[type === 'primary' ? 'background0' : color],
      background: theme.colors[type === 'primary' ? color : 'background0'],
      border: `1px solid ${theme.colors[color]}`,
      transition: 'all 200ms linear',
      ':disabled': {
        opacity: 0.7,
      },
      ':hover': {
        background: theme.colors[type === 'secondary' ? color : 'background0'],
        color: theme.colors[type === 'secondary' ? 'background0' : color],
      },
    })
