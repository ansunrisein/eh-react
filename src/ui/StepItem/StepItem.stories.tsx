import React from 'react'
import {Meta, Story} from '@storybook/react'
import {StepItem, StepItemProps} from './StepItem'

export default {
  title: 'ui/StepItem',
  component: StepItem,
  argTypes: {
    icon: {control: {type: 'select', options: ['avatar', 'user-o', 'th', 'lock', 'google']}},
    status: {control: {type: 'inline-radio', options: ['error', 'wait', 'finish', 'process']}},
    children: {control: {type: 'text'}},
  },
  args: {
    icon: 'avatar',
    status: 'wait',
    title: 'Step',
    children: 'My step',
  },
} as Meta

export const Usual: Story<StepItemProps> = props => <StepItem {...props} />
