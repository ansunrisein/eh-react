import React from 'react'
import {Flex} from 'reflexbox'
import {Spacing} from '@eh/react/ui'
import {AvatarForm, ProfileForm} from '../../components'

export type SettingsProps = {
  defaultProfileFormValues?: {
    nickname: string
    name: string
  }
  onProfileFormSubmit?: (data: {nickname: string; avatar: string}) => unknown
  avatar: string | undefined
  defaultAvatar: string | undefined
  isAvatarUploading?: boolean
  onAvatarSelected?: (file: File) => unknown
  onAvatarSubmit?: (avatar: string | undefined) => unknown
  onRemoveAvatar?: () => unknown
}

export const Settings: React.FC<SettingsProps> = ({
  defaultProfileFormValues,
  onProfileFormSubmit,
  defaultAvatar,
  avatar,
  isAvatarUploading,
  onAvatarSelected,
  onAvatarSubmit,
  onRemoveAvatar,
}) => (
  <Flex flexDirection="column" alignItems="center">
    <AvatarForm
      defaultAvatar={defaultAvatar}
      avatar={avatar}
      onFileSelected={onAvatarSelected}
      onSubmit={onAvatarSubmit}
      onRemove={onRemoveAvatar}
      loading={isAvatarUploading}
    />
    <Spacing space="3rem" vertical />
    <ProfileForm defaultValues={defaultProfileFormValues} onSubmit={onProfileFormSubmit} />
  </Flex>
)
