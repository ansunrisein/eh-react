import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Login, LoginProps} from './Login'

export default {
  component: Login,
  title: 'id/Login',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Usual: Story<LoginProps> = props => <Login {...props} />
