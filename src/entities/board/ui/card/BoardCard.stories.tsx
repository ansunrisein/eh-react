import React from 'react'
import {Meta, Story} from '@storybook/react'
import {BoardCard, BoardCardProps} from './BoardCard'

export default {
  title: 'entities/board/BoardCard',
  component: BoardCard,
  parameters: {layout: 'centered'},
  args: {
    board: {
      _id: 'board-1',
      title: 'Board',
      isPrivate: false,
      permissions: [],
      user: {
        _id: 'user-1',
      },
      eventsCount: 12,
      isFavorite: false,
      isPin: false,
      views: 1,
    },
  },
} as Meta<BoardCardProps>

export const Default: Story<BoardCardProps> = props => <BoardCard {...props} />
