import {css, Theme} from '@emotion/react'
import {Size} from '../theme'

export type PanelStylesProps = {
  bordered?: boolean
  shaded?: boolean
  size?: Size
}

export const panel =
  ({bordered, shaded, size = 'md'}: PanelStylesProps) =>
  (theme: Theme) =>
    css({
      width: {
        xs: 200,
        sm: 300,
        md: 400,
        lg: 550,
        xl: 800,
      }[size],
      padding: 10,
      borderRadius: 10,
      border: bordered ? `1px solid ${theme.colors.primary1}` : 'none',
      boxShadow: shaded ? `0 0 5px ${theme.colors.primary1}` : 'none',
      lineHeight: theme.font.lineHeight.md,
    })

export const children = css({
  marginTop: 10,
})
