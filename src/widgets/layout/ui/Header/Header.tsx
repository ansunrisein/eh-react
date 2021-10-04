import React from 'react'
import {Button} from 'rsuite'
import {UserInfo, Dashboard} from '@rsuite/icons'
import {Icon, Logo} from '@eh/shared/ui'
import S from './Header.module.scss'

export const Header: React.FC = () => (
  <header className={S.header}>
    <Button>
      <Dashboard />
    </Button>
    <Logo />
    <Icon icon={UserInfo} />
  </header>
)
