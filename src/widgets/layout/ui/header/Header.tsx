import React from 'react'
import {IconButton} from 'rsuite'
import {Dashboard} from '@rsuite/icons'
import {Logo} from '@eh/shared/ui'
import {ThemeSwitcher} from '../theme-switcher'
import S from './Header.module.scss'

export const Header: React.FC = () => (
  <header className={S.header}>
    <IconButton icon={<Dashboard />} size="md" appearance="link" className={S.link} />
    <Logo />
    <ThemeSwitcher size="md" appearance="link" className={S.link} />
  </header>
)
