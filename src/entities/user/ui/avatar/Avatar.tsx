import React from 'react'
import {Avatar as RAvatar, AvatarProps as RAvatarProps, Loader} from 'rsuite'
import {useUser} from '../../model'

export type AvatarProps = RAvatarProps

export const Avatar: React.FC<AvatarProps> = props => {
  const {user, loading} = useUser()

  return (
    <div className="relative">
      {loading ? (
        <Loader size="sm" center />
      ) : (
        <RAvatar
          src={user?.avatar || 'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png'}
          {...props}
        />
      )}
    </div>
  )
}
