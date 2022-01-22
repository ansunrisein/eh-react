import React from 'react'
import {RiBarChartBoxFill, RiUser2Fill} from 'react-icons/ri'
import {IconButton, Popover, Whisper} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {Flex} from '@eh/shared/lib/reflexbox'
import {Link} from '@eh/shared/lib/router'
import {ThemeSwitcher} from '@eh/shared/lib/theme'
import {Logo} from '@eh/shared/ui'
import {useIsAuthenticated} from '@eh/entities/session'
import {LoginButton} from '@eh/features/auth-with-firebase'
import {Menu} from '../menu'
import S from './Header.module.scss'

export const Header: React.FC = () => {
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

        {isAuthenticated ? (
          <Whisper
            placement="bottomEnd"
            trigger="click"
            speaker={
              <Popover full>
                <Menu />
              </Popover>
            }
          >
            <IconButton
              icon={<Icon as={RiUser2Fill} />}
              size="md"
              appearance="link"
              className={S.link}
            />
          </Whisper>
        ) : (
          <LoginButton size="xs" appearance="primary" />
        )}
      </Flex>
    </header>
  )
}
