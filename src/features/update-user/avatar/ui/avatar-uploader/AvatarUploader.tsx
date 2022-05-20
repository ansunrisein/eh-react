import React, {useCallback} from 'react'
import {RiCloseFill, RiUser2Fill} from 'react-icons/ri'
import {Button, IconButton, Loader, Uploader, UploaderProps} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {useCurrentAvatar, useRemoveAvatar, useUploadAvatar} from '../../model'
import S from './AvatarUploader.module.scss'

export const AvatarUploader: React.FC = () => {
  const [{loading}, upload] = useUploadAvatar()
  const removeAvatar = useRemoveAvatar()
  const avatar = useCurrentAvatar()

  const handleChange = useCallback<Required<UploaderProps>['onChange']>(
    file => {
      const blob = file[0]?.blobFile
      if (blob) {
        upload(blob)
      }
    },
    [upload],
  )

  return (
    <div className={S.container}>
      <Uploader
        action=""
        multiple={false}
        listType="picture"
        autoUpload={false}
        fileListVisible={false}
        onChange={handleChange}
        accept="image/*"
        className={S.uploader}
        fileList={[]}
        draggable
        key={avatar}
      >
        <Button appearance="subtle">
          {avatar ? (
            <img className={S.image} alt="avatar" src={avatar} />
          ) : (
            <Icon as={RiUser2Fill} />
          )}
          {loading && <Loader size="md" backdrop />}
        </Button>
      </Uploader>

      {!!avatar && (
        <div className={S.remove}>
          <IconButton
            size="xs"
            circle
            onClick={removeAvatar}
            color="red"
            icon={<Icon as={RiCloseFill} />}
          />
        </div>
      )}
    </div>
  )
}
