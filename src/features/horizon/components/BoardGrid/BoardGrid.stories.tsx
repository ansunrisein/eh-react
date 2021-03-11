import React from 'react'
import {Meta, Story} from '@storybook/react'
import {BoardGrid} from './BoardGrid'
import {boards} from './testData'

export default {
  component: BoardGrid,
  title: 'horizon/BoardGrid',
} as Meta

export const Usual: Story = () => <BoardGrid boards={boards} />
