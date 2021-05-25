import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Dialog, DialogProps} from './Dialog'

export default {
  component: Dialog,
  title: 'shared/components/Dialog',
  argTypes: {
    onYes: {table: {disable: true}},
    onNo: {table: {disable: true}},
  },
} as Meta

export const Usual: Story<DialogProps> = props => <Dialog {...props} />
