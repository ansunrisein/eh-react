import React from 'react'
import {Alert, Badge, ButtonGroup, ButtonGroupProps, Icon, IconButton} from 'rsuite'

export type UserMenuProps = {
  onProfileClick?: () => unknown
  onNotificationsClick?: () => unknown
  onLogOutClick?: () => unknown
  notificationsCount?: number
} & ButtonGroupProps

export const UserMenu: React.FC<UserMenuProps> = ({
  notificationsCount,
  style,
  onProfileClick,
  onNotificationsClick,
  onLogOutClick,
  vertical = true,
  ...props
}) => (
  <ButtonGroup style={{width: '100%', ...style}} vertical={vertical} {...props}>
    <IconButton onClick={onProfileClick} appearance="subtle" icon={<Icon icon="user-circle" />}>
      Profile
    </IconButton>
    <IconButton
      onClick={() => {
        onNotificationsClick?.()
        Alert.info('This is feature not implement', 3000)
      }}
      appearance="subtle"
      icon={<Icon icon="bell" />}
    >
      <Badge style={{width: '100%'}} content={notificationsCount} maxCount={9}>
        Notifications
      </Badge>
    </IconButton>
    <IconButton onClick={onLogOutClick} appearance="subtle" icon={<Icon icon="suitcase" />}>
      Log out
    </IconButton>
  </ButtonGroup>
)
