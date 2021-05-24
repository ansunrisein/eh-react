import React from 'react'
import {Meta, Story} from '@storybook/react'
import {UpdateEventFormModal, UpdateEventFormModalProps} from './UpdateEventFormModal'

export default {
  component: UpdateEventFormModal,
  title: 'UpdateEventFormModal',
} as Meta

export const Usual: Story<UpdateEventFormModalProps> = props => <UpdateEventFormModal {...props} />
