import React from 'react'
import {RiBarChartBoxFill} from 'react-icons/ri'
import {useMedia} from 'react-use'
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

  const isTablet = useMedia('(min-width: 768px)')

  return (
    <header className={S.header}>
      <Link to="/">
        <IconButton
          icon={<Icon as={RiBarChartBoxFill} />}
          size={isTablet ? 'md' : 'sm'}
          appearance="link"
          className={S.link}
        />
      </Link>

      <Link to="/">
        <Logo />
      </Link>

      <Flex gap={isTablet ? 10 : 5} alignItems="center">
        <div>
          <ThemeSwitcher size={isTablet ? 'md' : 'sm'} appearance="link" className={S.link} />
        </div>

        <LocaleSwitcher size={isTablet ? 'md' : 'sm'} />

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
            <Button size={isTablet ? 'sm' : 'xs'} appearance="link" className={S.link}>
              <Avatar circle size={isTablet ? 'sm' : 'xs'} />
            </Button>
          </Whisper>
        ) : (
          <LoginButton size="xs" appearance="primary" />
        )}
      </Flex>
    </header>
  )
})
