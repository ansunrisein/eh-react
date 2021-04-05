import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Header} from './Header'

export default {
  component: Header,
  title: 'common/components/Header',
  parameters: {layout: 'fullscreen', controls: {hideNoControlsWarning: true}},
  argTypes: {
    onDashboardClick: {table: {disable: true}},
    onLoginClick: {table: {disable: true}},
    onNotificationsClick: {table: {disable: true}},
    onLogOutClick: {table: {disable: true}},
    onProfileClick: {table: {disable: true}},
  },
} as Meta

export const Usual: Story = props => <Header {...props} />
