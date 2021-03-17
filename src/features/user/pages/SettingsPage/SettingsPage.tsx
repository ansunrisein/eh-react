import React from 'react'
import {Loader} from 'rsuite'
import {Flex} from 'reflexbox'
import {PageTemplate} from '@eh/react/features/shared/templates'
import {useMe, useUpdateAvatar, useUpdateProfile, useUploadAvatar} from '../../hooks'
import {Settings} from '../../views'

export const SettingsPage: React.FC = () => {
  const {me} = useMe()
  const {updateProfile} = useUpdateProfile()
  const {updateAvatar} = useUpdateAvatar()
  const {upload, avatar, remove, loading} = useUploadAvatar(me?.avatar)

  if (!me) {
    return <Loader size="lg" backdrop />
  }

  return (
    <PageTemplate>
      <Flex alignItems="center" justifyContent="center">
        <Settings
          defaultAvatar={me.avatar}
          avatar={avatar}
          defaultProfileFormValues={me}
          onProfileFormSubmit={updateProfile}
          onAvatarSubmit={updateAvatar}
          onAvatarSelected={upload}
          isAvatarUploading={loading}
          onRemoveAvatar={remove}
        />
      </Flex>
    </PageTemplate>
  )
}
