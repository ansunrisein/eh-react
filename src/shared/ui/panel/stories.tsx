import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Panel} from './Panel'

export default {
  component: Panel,
  title: 'ui/Panel',
  parameters: {layout: 'centered'},
  args: {
    children: 'Lorem ipsum dolor sit',
    size: 'md',
  },
} as Meta

export const Default: Story = props => <Panel {...props} />
