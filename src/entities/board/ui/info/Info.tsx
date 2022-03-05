import React from 'react'
import cx from 'classnames'
import {RiGitRepositoryPrivateFill, RiGitRepositoryPrivateLine, RiHashtag} from 'react-icons/ri'
import {Tag, Tooltip, Whisper} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {BoardFragment} from '@eh/entities/board'
import S from './Info.module.scss'

export type InfoProps = {
  board?: BoardFragment
  withPrivateIcon?: boolean
  withTags?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export const Info: React.FC<InfoProps> = ({
  board,
  withPrivateIcon,
  withTags,
  className,
  ...props
}) => (
  <div className={cx(S.info, className)} {...props}>
    {board && (
      <>
        {withPrivateIcon && (
          <Icon
            as={board.isPrivate ? RiGitRepositoryPrivateFill : RiGitRepositoryPrivateLine}
            className={S.icon}
          />
        )}
        <h4 className={S.title}>{board.title}</h4>
        {withTags && !!board.tags?.length && (
          <Whisper
            trigger="click"
            placement="topStart"
            speaker={
              <Tooltip className={S.tags}>
                {board.tags?.map(e => (
                  <Tag key={e._id} size="sm">
                    {e.name}
                  </Tag>
                ))}
              </Tooltip>
            }
          >
            <div>
              <Icon className={S.icon} as={RiHashtag} />
            </div>
          </Whisper>
        )}
      </>
    )}
  </div>
)
