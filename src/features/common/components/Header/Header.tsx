import React from 'react'
import {Flex} from 'reflexbox'
import {Button, Icon, Popover, Whisper} from 'rsuite'
import {Logo} from '@eh/react/ui'
import {UserMenu, UserMenuProps} from '../UserMenu'

export type HeaderProps = {
  isAuthenticated?: boolean
  onDashboardClick?: () => unknown
  onLoginClick?: () => unknown
} & Pick<
  UserMenuProps,
  'notificationsCount' | 'onNotificationsClick' | 'onLogOutClick' | 'onProfileClick'
>

export const Header: React.FC<HeaderProps> = ({
  isAuthenticated,
  onDashboardClick,
  onLoginClick,
  notificationsCount,
  onNotificationsClick,
  onLogOutClick,
  onProfileClick,
}) => (
  <Flex as="header" justifyContent="space-between" alignItems="center" padding="0.5rem">
    <Button
      onClick={onDashboardClick}
      appearance="link"
      style={{color: 'inherit'}}
      aria-label="dashboard"
    >
      <Icon icon="dashboard" size="2x" />
    </Button>
    <Logo />
    {isAuthenticated ? (
      <Whisper
        placement="bottomEnd"
        trigger="click"
        speaker={
          <Popover full>
            <UserMenu
              style={{width: '10rem'}}
              notificationsCount={notificationsCount}
              onNotificationsClick={onNotificationsClick}
              onLogOutClick={onLogOutClick}
              onProfileClick={onProfileClick}
            />
          </Popover>
        }
      >
        <Button appearance="link" style={{color: 'inherit'}} aria-label="me">
          <Icon icon="user" size="2x" />
        </Button>
      </Whisper>
    ) : (
      <Button
        onClick={onLoginClick}
        appearance="link"
        style={{color: 'inherit'}}
        aria-label="login"
      >
        <Icon icon="sign-in" size="2x" />
      </Button>
    )}
  </Flex>
)
