import React from 'react'
import cx from 'classnames'
import {RiGitRepositoryPrivateFill, RiGitRepositoryPrivateLine} from 'react-icons/ri'
import {Icon} from '@rsuite/icons'
import {BoardFragment} from '@eh/entities/board'
import S from './Info.module.scss'

export type InfoProps = {
  board?: BoardFragment
  withPrivateIcon?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export const Info: React.FC<InfoProps> = ({board, withPrivateIcon, className, ...props}) => (
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
      </>
    )}
  </div>
)
