import React from 'react'
import {IconButton} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {RiBarChartBoxFill} from 'react-icons/ri'
import {Logo} from '@eh/shared/ui'
import {ThemeSwitcher} from '../theme-switcher'
import S from './Header.module.scss'

export const Header: React.FC = () => (
  <header className={S.header}>
    <IconButton
      icon={<Icon as={RiBarChartBoxFill} />}
      size="md"
      appearance="link"
      className={S.link}
    />
    <Logo />
    <ThemeSwitcher size="md" appearance="link" className={S.link} />
  </header>
)
