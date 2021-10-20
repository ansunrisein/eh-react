import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Empty} from './Empty'

export default {
  title: 'shared/empty',
  component: Empty,
  parameters: {layout: 'fullscreen'},
  args: {
    children: 'Content',
  },
} as Meta

export const Default: Story = props => (
  <div style={{height: '100vh'}}>
    <Empty {...props} />
  </div>
)
