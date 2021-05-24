import React from 'react'
import {Meta, Story} from '@storybook/react'
import delay from 'delay'
import {AuthContext} from '@eh/react/features/shared/contexts/AuthContext'
import {LoginPage} from './LoginPage'

export default {
  title: 'id/pages/LoginPage',
  component: LoginPage,
  parameters: {layout: 'fullscreen', controls: {hideNoControlsWarning: true}},
  decorators: [
    Story => (
      <AuthContext.Provider
        value={{
          login: () => delay(1000).then(() => alert('Auth successful')),
          loading: false,
          logout: Promise.resolve,
        }}
      >
        <Story />
      </AuthContext.Provider>
    ),
  ],
} as Meta

export const Usual: Story = props => <LoginPage {...props} />
