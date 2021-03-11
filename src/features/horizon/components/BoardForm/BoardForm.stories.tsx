import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Box} from 'reflexbox'
import {BoardForm} from './BoardForm'

export default {
  component: BoardForm,
  title: 'horizon/BoardForm',
} as Meta

export const Usual: Story = () => (
  <Box width="30vw">
    <BoardForm />
  </Box>
)
