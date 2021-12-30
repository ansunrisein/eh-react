import React, {FormEvent, useCallback} from 'react'
import {RiCheckFill} from 'react-icons/ri'
import {IconButton} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {useCurrentAvatar, useEditAvatar, useUserAvatar} from '../../model'
import {AvatarUploader} from '../avatar-uploader'
import S from './EditUserAvatarForm.module.scss'

export const EditUserAvatarForm: React.FC = () => {
  const {userAvatar, loading: userLoading} = useUserAvatar()
  const currentAvatar = useCurrentAvatar()
  const [{loading}, editAvatar] = useEditAvatar()

  const submit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      editAvatar({avatar: currentAvatar})
    },
    [currentAvatar, editAvatar],
  )

  const isDirty = !userLoading && userAvatar !== currentAvatar

  return (
    <form className="relative" onSubmit={submit}>
      <AvatarUploader />
      {isDirty && (
        <div className={S.check}>
          <IconButton
            loading={loading}
            type="submit"
            circle
            size="xs"
            color="green"
            appearance="primary"
            icon={<Icon as={RiCheckFill} />}
          />
        </div>
      )}
    </form>
  )
}
