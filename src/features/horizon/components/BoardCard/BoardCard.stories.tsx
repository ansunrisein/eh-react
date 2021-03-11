import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Box} from 'reflexbox'
import {BoardCard} from './BoardCard'
import {board} from './testData'

export default {
  component: BoardCard,
  title: 'horizon/BoardCard',
} as Meta

export const Usual: Story = () => (
  <Box width="20vw" height="30vh">
    <BoardCard board={board} />
  </Box>
)
