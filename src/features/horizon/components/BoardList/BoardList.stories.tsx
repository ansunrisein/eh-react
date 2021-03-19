import React from 'react'
import {Meta, Story} from '@storybook/react'
import {BoardList, BoardListProps} from './BoardList'
import {boards} from './testData'

export default {
  component: BoardList,
  title: 'horizon/components/BoardList',
  argTypes: {
    boards: {table: {disable: true}},
  },
} as Meta

export const Usual: Story<BoardListProps> = props => <BoardList {...props} boards={boards} />
