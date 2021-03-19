import React from 'react'
import {Meta, Story} from '@storybook/react'
import {ActionIcon, ActionIconProps} from './ActionIcon'

export default {
  component: ActionIcon,
  title: 'ui/ActionIcon',
  argTypes: {
    icon: {control: {type: 'inline-radio'}, defaultValue: 'pin'},
  },
} as Meta

export const Usual: Story<ActionIconProps> = props => <ActionIcon {...props} />
