import React from 'react'
import {Meta, Story} from '@storybook/react'
import {BoardList} from './BoardList'
import {boards} from './testData'

export default {
  component: BoardList,
  title: 'horizon/BoardList',
} as Meta

export const Usual: Story = () => <BoardList boards={boards} />
