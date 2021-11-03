import React from 'react'
import {Meta, Story} from '@storybook/react'
import {BoardCard, BoardCardProps} from './BoardCard'

export default {
  title: 'entities/board/BoardCard',
  component: BoardCard,
  parameters: {layout: 'centered'},
  args: {
    board: {
      id: '1',
      title: 'Board',
      events: ['1', '2'],
    },
  },
} as Meta<BoardCardProps>

export const Default: Story<BoardCardProps> = props => <BoardCard {...props} />
