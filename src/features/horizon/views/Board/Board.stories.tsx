import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Board} from './Board'
import {board} from './testData'

export default {
  component: Board,
  title: 'horizon/BoardView',
} as Meta

export const Usual: Story = () => <Board board={board} />
