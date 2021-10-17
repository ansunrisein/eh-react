import React from 'react'
import {IconButton, IconButtonProps} from 'rsuite'
import {Mobile, Pc} from '@rsuite/icons'
import {useTheme} from '@eh/shared/lib/theme'

export type ThemeSwitcherProps = Omit<IconButtonProps, 'icon' | 'onClick'>

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = props => {
  const {theme, toggle} = useTheme()

  return <IconButton icon={theme === 'dark' ? <Mobile /> : <Pc />} onClick={toggle} {...props} />
}
