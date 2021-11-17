import React from 'react'
import {RiMoonClearFill, RiSunFill} from 'react-icons/ri'
import {IconButton, IconButtonProps} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {useTheme} from './ThemeContext'

export const ThemeSwitcher: React.FC<Omit<IconButtonProps, 'icon'>> = ({onClick, ...props}) => {
  const {theme, toggle} = useTheme()

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    toggle()
    onClick?.(e)
  }

  return (
    <IconButton
      icon={<Icon as={theme === 'dark' ? RiSunFill : RiMoonClearFill} />}
      onClick={handleClick}
      {...props}
    />
  )
}
