import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Box} from 'reflexbox'
import {ProfileForm, ProfileFormProps} from './ProfileForm'

export default {
  component: ProfileForm,
  title: 'user/ProfileForm',
  parameters: {layout: 'centered'},
  argTypes: {
    onSubmit: {table: {disable: true}},
    defaultValues: {table: {disable: true}},
  },
} as Meta

export const Usual: Story<ProfileFormProps> = props => (
  <Box width="20vw">
    <ProfileForm {...props} />
  </Box>
)
