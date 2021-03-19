import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Board, BoardProps} from './Board'
import {board} from './testData'

export default {
  component: Board,
  title: 'horizon/BoardView',
  argTypes: {
    board: {table: {disable: true}},
    onCreateEventClick: {table: {disable: true}},
    onBoardFavClick: {table: {disable: true}},
    onBoardPinClick: {table: {disable: true}},
    onNavIconClick: {table: {disable: true}},
  },
} as Meta

export const Usual: Story<BoardProps> = props => <Board {...props} board={board} />
