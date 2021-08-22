import {css, Theme} from '@emotion/react'
import {Color} from '../theme'

export type InputStylesProps = {
  background?: Color
  state?: 'error' | 'warning' | 'success'
}

export const input =
  ({background = 'inputBackground', state}: InputStylesProps) =>
  (theme: Theme) =>
    css({
      width: '100%',
      padding: 8,
      border: `1px solid ${theme.colors[!state ? 'primary0' : (`${state}1` as const)]}`,
      backgroundColor: theme.colors[background],
      borderRadius: 8,
      transition: 'box-shadow 200ms linear',
      '::placeholder': {
        color: theme.colors.placeholder,
      },
      ':focus': {
        boxShadow: `0 0 2px ${theme.colors[!state ? 'primary0' : (`${state}1` as const)]}`,
      },
    })
