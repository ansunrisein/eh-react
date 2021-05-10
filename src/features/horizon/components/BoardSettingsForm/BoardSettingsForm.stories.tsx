import React from 'react'
import {Meta, Story} from '@storybook/react'
import {board} from '@eh/react/features/horizon/views/Board/testData'
import {BoardSettingsForm, BoardSettingsFormProps} from './BoardSettingsForm'

export default {
  component: BoardSettingsForm,
  title: 'horizon/components/BoardSettingsForm',
  argTypes: {
    board: {table: {disable: true}},
    onBoardChange: {table: {disable: true}},
    onBoardRemove: {table: {disable: true}},
  },
} as Meta

export const Usual: Story<BoardSettingsFormProps> = props => (
  <BoardSettingsForm {...props} board={board} />
)
