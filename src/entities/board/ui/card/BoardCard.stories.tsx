import React from 'react'
import {Meta, Story} from '@storybook/react'
import {BoardCard, BoardCardProps} from './BoardCard'

export default {
  title: 'entities/board/BoardCard',
  component: BoardCard,
  parameters: {layout: 'centered'},
  args: {
    board: {
      _id: '1',
      title: 'Board',
      events: [
        {_id: '1', title: '1', content: '123'},
        {_id: '2', title: '1', content: '123'},
      ],
    },
  },
} as Meta<BoardCardProps>

export const Default: Story<BoardCardProps> = props => <BoardCard {...props} />
