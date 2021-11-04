import React from 'react'
import {IconButton} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {RiBarChartBoxFill, RiLoginBoxLine, RiLogoutBoxLine} from 'react-icons/ri'
import {Link} from '@eh/shared/lib/router'
import {Logo} from '@eh/shared/ui'
import {Flex} from '@eh/shared/lib/reflexbox'
import {useIsAuthenticated, useLogout} from '@eh/entities/session'
import {useLogin} from '@eh/features/auth-with-firebase'
import {ThemeSwitcher} from '../theme-switcher'
import S from './Header.module.scss'

export const Header: React.FC = () => {
  const {login, loading} = useLogin()
  const logout = useLogout()
  const isAuthenticated = useIsAuthenticated()

  return (
    <header className={S.header}>
      <Link to="/">
        <IconButton
          icon={<Icon as={RiBarChartBoxFill} />}
          size="md"
          appearance="link"
          className={S.link}
        />
      </Link>

      <Logo />

      <Flex gap={10}>
        <ThemeSwitcher size="md" appearance="link" className={S.link} />

        <IconButton
          icon={<Icon as={isAuthenticated ? RiLogoutBoxLine : RiLoginBoxLine} />}
          size="md"
          appearance="link"
          className={S.link}
          loading={loading}
          onClick={isAuthenticated ? logout : login}
        />
      </Flex>
    </header>
  )
}
