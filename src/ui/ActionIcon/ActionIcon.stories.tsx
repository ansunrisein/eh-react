import React from 'react'
import {Meta, Story} from '@storybook/react'
import {ActionIcon} from './ActionIcon'

export default {
  component: ActionIcon,
  title: 'ActionIcon',
} as Meta

export const Usual: Story = () => <ActionIcon icon="pin" />
