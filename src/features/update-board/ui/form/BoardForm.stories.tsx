import React from 'react'
import {Meta, Story} from '@storybook/react'
import {BoardForm} from './BoardForm'

export default {
  title: 'features/update-board/BoardForm',
  component: BoardForm,
  parameters: {layout: 'centered', docs: {source: {type: 'code'}}},
} as Meta

export const Default: Story = props => (
  <div style={{width: 500}}>
    <BoardForm {...props} />
  </div>
)
