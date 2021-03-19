import React from 'react'
import {Meta, Story} from '@storybook/react'
import {BoardGrid, BoardGridProps} from './BoardGrid'
import {boards} from './testData'

export default {
  component: BoardGrid,
  title: 'horizon/BoardGrid',
  argTypes: {
    boards: {table: {disable: true}},
    onBoardFavClick: {table: {disable: true}},
    onBoardPinClick: {table: {disable: true}},
  },
} as Meta

export const Usual: Story<BoardGridProps> = props => <BoardGrid {...props} boards={boards} />
