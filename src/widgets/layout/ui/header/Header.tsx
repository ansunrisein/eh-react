import React from 'react'
import {RiBarChartBoxFill, RiLoginBoxLine, RiLogoutBoxLine} from 'react-icons/ri'
import {IconButton} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {Flex} from '@eh/shared/lib/reflexbox'
import {Link} from '@eh/shared/lib/router'
import {ThemeSwitcher} from '@eh/shared/lib/theme'
import {Logo} from '@eh/shared/ui'
import {useIsAuthenticated, useLogout} from '@eh/entities/session'
import {useLogin} from '@eh/features/auth-with-firebase'
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

      <Link to="/">
        <Logo />
      </Link>

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
