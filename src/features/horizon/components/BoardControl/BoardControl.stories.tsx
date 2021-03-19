import React from 'react'
import {Meta, Story} from '@storybook/react'
import {BoardControl, BoardControlProps} from './BoardControl'

export default {
  component: BoardControl,
  title: 'horizon/BoardControl',
  parameters: {layout: 'centered'},
  argTypes: {
    onFavClick: {table: {disable: true}},
    onPinClick: {table: {disable: true}},
    vertical: {control: {type: 'boolean'}},
    size: {control: {type: 'inline-radio'}},
  },
} as Meta

export const Usual: Story<BoardControlProps> = props => <BoardControl {...props} />
