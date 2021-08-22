import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Button, ButtonProps} from './Button'

export default {
  component: Button,
  title: 'ui/Button',
  args: {
    children: 'Click me',
  },
  argTypes: {
    onClick: {table: {disable: true}},
  },
} as Meta<ButtonProps>

export const Default: Story<ButtonProps> = props => <Button {...props} />
