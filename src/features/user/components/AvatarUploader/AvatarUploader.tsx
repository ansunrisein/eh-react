import React, {useCallback} from 'react'
import {Button, FileType, Icon, IconButton, Loader, Uploader} from 'rsuite'
import s from './AvatarUploader.module.css'

export type AvatarUploaderProps = {
  avatar: string | null
  loading?: boolean
  onFileSelected?: (file: File) => unknown
  onRemove?: () => unknown
}

export const AvatarUploader: React.FC<AvatarUploaderProps> = ({
  avatar,
  loading,
  onFileSelected,
  onRemove,
}) => {
  const onChange = useCallback(
    (files: FileType[]) => {
      const file = files[0]?.blobFile
      if (file) {
        onFileSelected?.(file)
      }
    },
    [onFileSelected],
  )

  return (
    <div className={s.container}>
      <Uploader
        multiple={false}
        listType="picture"
        autoUpload={false}
        fileListVisible={false}
        onChange={onChange}
        accept="image/*"
        className={s.uploader}
        fileList={[]}
        draggable
        key={avatar}
      >
        <Button aria-busy={loading} appearance="subtle" aria-label="avatar">
          {avatar ? (
            <img className={s.image} alt="avatar" src={avatar} />
          ) : (
            <Icon aria-label="avatar" role="img" icon="avatar" size="5x" />
          )}
          {loading && <Loader role="alert" size="md" backdrop />}
        </Button>
      </Uploader>
      {!!avatar && (
        <div className={s.remove}>
          <IconButton
            aria-label="remove avatar"
            size="xs"
            onClick={onRemove}
            circle
            color="red"
            icon={<Icon icon="close" />}
          />
        </div>
      )}
    </div>
  )
}
