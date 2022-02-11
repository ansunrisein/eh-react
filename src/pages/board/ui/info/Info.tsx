import React from 'react'
import {RiGitRepositoryPrivateFill, RiGitRepositoryPrivateLine} from 'react-icons/ri'
import {Icon} from '@rsuite/icons'
import {BoardFragment} from '@eh/entities/board'
import S from './Info.module.scss'

export type InfoProps = {
  board?: BoardFragment
}

export const Info: React.FC<InfoProps> = ({board}) => {
  return (
    <div className={S.info}>
      {board && (
        <>
          <Icon
            as={board.isPrivate ? RiGitRepositoryPrivateFill : RiGitRepositoryPrivateLine}
            className={S.icon}
          />
          <h4 className={S.title}>{board.title}</h4>
        </>
      )}
    </div>
  )
}
