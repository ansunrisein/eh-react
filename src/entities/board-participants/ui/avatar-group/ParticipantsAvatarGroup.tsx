import React from 'react'
import {Avatar, AvatarGroup, AvatarGroupProps, Tooltip, Whisper} from 'rsuite'
import {BoardParticipantFragment} from '../../model'

export type ParticipantsAvatarGroupProps = {
  participants: BoardParticipantFragment[]
  defaultAvatar?: string
} & AvatarGroupProps

export const ParticipantsAvatarGroup: React.FC<ParticipantsAvatarGroupProps> = ({
  participants,
  defaultAvatar,
  ...props
}) => (
  <AvatarGroup stack size="sm" {...props}>
    {participants.map(participant => (
      <Whisper
        key={participant._id}
        placement="autoVertical"
        trigger={['hover', 'click']}
        speaker={<Tooltip>{participant.user.nickname}</Tooltip>}
      >
        <Avatar src={participant.user.avatar || defaultAvatar} circle />
      </Whisper>
    ))}
  </AvatarGroup>
)
