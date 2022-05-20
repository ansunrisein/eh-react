import React from 'react'
import {Avatar as RAvatar, AvatarProps as RAvatarProps, Loader} from 'rsuite'
import {Flex} from '@eh/shared/lib/reflexbox'
import {DEFAULT_USER_AVATAR} from '../../constants'
import {useUser} from '../../model'

export type AvatarProps = RAvatarProps

export const Avatar: React.FC<AvatarProps> = props => {
  const {user, loading} = useUser()

  return (
    <Flex className="relative">
      {loading ? (
        <Loader size="sm" center />
      ) : (
        <RAvatar src={user?.avatar || DEFAULT_USER_AVATAR} {...props} />
      )}
    </Flex>
  )
}
