import React, {FormEventHandler, useCallback} from 'react'
import {Icon, IconButton} from 'rsuite'
import {AvatarUploader} from '../AvatarUploader'
import s from './AvatarForm.module.css'

export type AvatarFormProps = {
  defaultAvatar: string | undefined
  avatar: string | undefined
  loading?: boolean
  onSubmit?: (avatar: string | undefined) => unknown
  onFileSelected?: (file: File) => unknown
  onRemove?: () => unknown
}

export const AvatarForm: React.FC<AvatarFormProps> = ({
  defaultAvatar,
  avatar,
  loading,
  onSubmit,
  onFileSelected,
  onRemove,
}) => {
  const isDirty = avatar !== defaultAvatar

  const submit = useCallback<FormEventHandler<HTMLFormElement>>(
    event => {
      event.preventDefault()
      onSubmit?.(avatar)
    },
    [avatar, onSubmit],
  )

  return (
    <form className={s.form} onSubmit={submit}>
      <AvatarUploader
        avatar={avatar}
        onRemove={onRemove}
        onFileSelected={onFileSelected}
        loading={loading}
      />
      {isDirty && (
        <div className={s.check}>
          <IconButton
            aria-label="submit"
            type="submit"
            circle
            size="xs"
            color="green"
            appearance="primary"
            icon={<Icon icon="check" />}
          />
        </div>
      )}
    </form>
  )
}
