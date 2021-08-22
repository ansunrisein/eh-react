import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Input, InputProps} from './Input'

export default {
  component: Input,
  title: 'ui/Input',
} as Meta<InputProps>

export const Default: Story<InputProps> = props => <Input {...props} />
