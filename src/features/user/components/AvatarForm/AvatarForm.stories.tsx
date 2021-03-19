import React, {useCallback, useState} from 'react'
import {Meta, Story} from '@storybook/react'
import {ClientUploadProvider, useUpload} from '@eh/react/features/shared/contexts/FileUploadContext'
import {AvatarForm, AvatarFormProps} from './AvatarForm'

export default {
  component: AvatarForm,
  title: 'user/AvatarForm',
  argTypes: {
    avatar: {
      control: {type: 'text'},
      defaultValue:
        'https://avatars.githubusercontent.com/u/31159587?s=400&u=56eb4d76bbeae350f4d2699eca2ec364da11a2cb&v=4',
    },
    defaultAvatar: {table: {disable: true}},
    onSubmit: {table: {disable: true}},
    onFileSelected: {table: {disable: true}},
    onRemove: {table: {disable: true}},
  },
  decorators: [
    Story => (
      <ClientUploadProvider config={{delay: 2000}}>
        <Story />
      </ClientUploadProvider>
    ),
  ],
} as Meta

export const Usual: Story<AvatarFormProps> = props => <AvatarForm {...props} />

const initialAvatar =
  'data:image/jpeg;base64,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'

export const Controlled: Story<AvatarFormProps> = props => {
  const upload = useUpload()

  const [defaultAvatar, setDefaultAvatar] = useState<string | null>(initialAvatar)
  const [avatar, setAvatar] = useState<string | null>(defaultAvatar)
  const [loading, setLoading] = useState(false)

  const uploadAvatar = useCallback(
    (file: File) => {
      setLoading(true)
      upload(file)
        .then(setAvatar)
        .finally(() => setLoading(false))
    },
    [upload],
  )

  const removeAvatar = () => setAvatar(null)

  return (
    <AvatarForm
      {...props}
      defaultAvatar={defaultAvatar}
      avatar={avatar}
      loading={loading}
      onSubmit={setDefaultAvatar}
      onFileSelected={uploadAvatar}
      onRemove={removeAvatar}
    />
  )
}

Controlled.argTypes = {
  avatar: {table: {disable: true}},
  defaultAvatar: {table: {disable: true}},
  loading: {table: {disable: true}},
}
