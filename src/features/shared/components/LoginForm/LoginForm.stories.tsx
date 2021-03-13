import React from 'react'
import {Meta, Story} from '@storybook/react'
import {LoginForm, LoginFormProps} from './LoginForm'

export default {
  component: LoginForm,
  title: 'user/LoginForm',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onSubmit: {table: {disable: true}},
    onGoogleClick: {table: {disable: true}},
  },
} as Meta

export const Usual: Story<LoginFormProps> = props => <LoginForm {...props} />
