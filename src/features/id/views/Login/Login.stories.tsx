import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Login, LoginProps} from './Login'

export default {
  component: Login,
  title: 'id/Login',
  parameters: {layout: 'fullscreen', controls: {hideNoControlsWarning: true}},
  argTypes: {
    onGoogleLogin: {table: {disable: true}},
  },
} as Meta

export const Usual: Story<LoginProps> = props => <Login {...props} />
