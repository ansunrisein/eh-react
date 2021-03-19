import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Box} from 'reflexbox'
import {BoardCard, BoardCardProps} from './BoardCard'
import {board} from './testData'

export default {
  component: BoardCard,
  title: 'horizon/components/BoardCard',
  parameters: {layout: 'centered'},
  argTypes: {
    board: {table: {disable: true}},
    onFavClick: {table: {disable: true}},
    onPinClick: {table: {disable: true}},
  },
} as Meta

export const Usual: Story<BoardCardProps> = props => (
  <Box width="20vw" height="30vh">
    <BoardCard {...props} board={board} />
  </Box>
)
