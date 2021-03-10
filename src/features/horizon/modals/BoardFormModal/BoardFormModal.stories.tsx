import React from 'react'
import {Meta, Story} from '@storybook/react'
import {BoardFormModal} from './BoardFormModal'

export default {
  component: BoardFormModal,
  title: 'BoardFormModal',
} as Meta

export const Usual: Story = () => <BoardFormModal />
