import React from 'react'
import {IconButton} from 'rsuite'
import {Dashboard, UserInfo} from '@rsuite/icons'
import {Logo} from '@eh/shared/ui'
import S from './Header.module.scss'

export const Header: React.FC = () => (
  <header className={S.header}>
    <IconButton icon={<Dashboard />} size="md" appearance="link" className={S.link} />
    <Logo />
    <IconButton icon={<UserInfo />} size="md" appearance="link" className={S.link} />
  </header>
)
