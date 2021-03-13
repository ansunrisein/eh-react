import React from 'react'
import {Meta, Story} from '@storybook/react'
import {UserMenu, UserMenuProps} from './UserMenu'

export default {
  component: UserMenu,
  title: 'common/UserMenu',
  parameters: {layout: 'centered'},
  argTypes: {
    onProfileClick: {table: {disable: true}},
    onNotificationsClick: {table: {disable: true}},
    onLogOutClick: {table: {disable: true}},
  },
} as Meta

export const Usual: Story<UserMenuProps> = props => <UserMenu style={{width: '10rem'}} {...props} />
