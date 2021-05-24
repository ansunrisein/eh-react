import React from 'react'
import {Meta, Story} from '@storybook/react'
import {FullEventModal, FullEventModalProps} from './FullEventModal'

export default {
  component: FullEventModal,
  title: 'FullEventModal',
} as Meta

export const Usual: Story<FullEventModalProps> = props => <FullEventModal {...props} />
