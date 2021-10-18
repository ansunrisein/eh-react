import React from 'react'
import {IconButton, IconButtonProps} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {RiMoonClearFill, RiSunFill} from 'react-icons/ri'
import {useTheme} from '@eh/shared/lib/theme'

export type ThemeSwitcherProps = Omit<IconButtonProps, 'icon' | 'onClick'>

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = props => {
  const {theme, toggle} = useTheme()

  return (
    <IconButton
      icon={theme === 'dark' ? <Icon as={RiSunFill} /> : <Icon as={RiMoonClearFill} />}
      onClick={toggle}
      {...props}
    />
  )
}
