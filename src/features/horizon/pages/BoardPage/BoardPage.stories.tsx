import React from 'react'
import {Meta, Story} from '@storybook/react'
import {BoardPage} from './BoardPage'

export default {
  component: BoardPage,
  title: 'horizon/BoardPage',
} as Meta

export const Usual: Story = () => <BoardPage />