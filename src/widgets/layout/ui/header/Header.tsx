import React from 'react'
import {RiBarChartBoxFill} from 'react-icons/ri'
import {Button, IconButton, Popover, Whisper} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {LocaleSwitcher, withModuleLocalization} from '@eh/shared/lib/i18n'
import {Flex} from '@eh/shared/lib/reflexbox'
import {Link} from '@eh/shared/lib/router'
import {ThemeSwitcher} from '@eh/shared/lib/theme'
import {Logo} from '@eh/shared/ui'
import {useIsAuthenticated} from '@eh/entities/session'
import {Avatar} from '@eh/entities/user'
import {LoginButton} from '@eh/features/auth-with-firebase'
import {Menu} from '../menu'
import S from './Header.module.scss'

export const Header: React.FC = withModuleLocalization('layout-widget')(() => {
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

      <Flex gap={10} alignItems="center">
        <div>
          <ThemeSwitcher size="md" appearance="link" className={S.link} />
        </div>

        <LocaleSwitcher />

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
            <Button size="sm" appearance="link" className={S.link}>
              <Avatar circle size="sm" />
            </Button>
          </Whisper>
        ) : (
          <LoginButton size="xs" appearance="primary" />
        )}
      </Flex>
    </header>
  )
})
