import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Box} from 'reflexbox'
import {BoardForm, BoardFormProps} from './BoardForm'

export default {
  component: BoardForm,
  title: 'horizon/components/BoardForm',
  parameters: {layout: 'centered', controls: {hideNoControlsWarning: true}},
  argTypes: {
    onSubmit: {table: {disable: true}},
  },
} as Meta

export const Usual: Story<BoardFormProps> = props => (
  <Box width="30vw">
    <BoardForm {...props} />
  </Box>
)
