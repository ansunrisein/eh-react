import React from 'react'
import cx from 'classnames'
import {RiGitRepositoryPrivateFill, RiGitRepositoryPrivateLine, RiHashtag} from 'react-icons/ri'
import {FormattedMessage} from 'react-intl'
import {useMedia} from 'react-use'
import {IconButton, Tag, Tooltip, Whisper} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {withModuleLocalization} from '@eh/shared/lib/i18n'
import {BoardFragment} from '@eh/entities/board'
import {texts} from './texts'
import S from './Info.module.scss'

export type InfoProps = {
  board?: BoardFragment
  withPrivateIcon?: boolean
  withTags?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export const Info: React.FC<InfoProps> = withModuleLocalization('board-entity')(
  ({board, withPrivateIcon, withTags, className, ...props}) => {
    const isTablet = useMedia('(min-width: 768px)')

    return (
      <div className={cx(S.info, className)} {...props}>
        {board && (
          <>
            {withPrivateIcon && (
              <Whisper
                trigger={['click', 'hover']}
                placement="bottomStart"
                speaker={
                  <Tooltip>
                    <FormattedMessage
                      {...texts[board.isPrivate ? 'privateBoard' : 'publicBoard']}
                    />
                  </Tooltip>
                }
              >
                <div>
                  <Icon
                    as={board.isPrivate ? RiGitRepositoryPrivateFill : RiGitRepositoryPrivateLine}
                    className={S.icon}
                  />
                </div>
              </Whisper>
            )}
            <h4 className={S.title}>{board.title}</h4>
            {withTags && !!board.tags?.length && (
              <Whisper
                trigger="click"
                placement="topStart"
                speaker={
                  <Tooltip className={S.tags}>
                    {board.tags?.map(e => (
                      <Tag key={e._id} size="sm" color="violet">
                        {e.name}
                      </Tag>
                    ))}
                  </Tooltip>
                }
              >
                <IconButton
                  size={isTablet ? 'sm' : 'xs'}
                  appearance="ghost"
                  color="violet"
                  className={S.icon}
                  icon={<Icon as={RiHashtag} />}
                />
              </Whisper>
            )}
          </>
        )}
      </div>
    )
  },
)
