import React from 'react'
import {Meta, Story} from '@storybook/react'
import {AvatarUploader, AvatarUploaderProps} from './AvatarUploader'

export default {
  component: AvatarUploader,
  title: 'user/AvatarUploader',
  argTypes: {
    avatar: {table: {disable: true}},
    onFileSelected: {table: {disable: true}},
    onRemove: {table: {disable: true}},
  },
} as Meta

export const Usual: Story<AvatarUploaderProps> = props => <AvatarUploader {...props} />
