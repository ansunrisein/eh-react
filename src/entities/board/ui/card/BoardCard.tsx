import React from 'react'
import cx from 'classnames'
import {Panel, PanelProps, Tag} from 'rsuite'
import {Link} from '@eh/shared/lib/router'
import {BoardFragment} from '../../api'
import S from './BoardCard.module.scss'

export type BoardCardProps = {
  board: BoardFragment
} & PanelProps

export const BoardCard: React.FC<BoardCardProps> = ({board, className, ...props}) => (
  <Panel className={cx(S.height, className)} bordered shaded bodyFill {...props}>
    <div className={S.panel}>
      <Link to={`/board/${board._id}`}>
        <h4 className={S.title}>{board.title}</h4>

        <Tag className={S.tag} color={board.eventsCount ? 'violet' : 'orange'}>
          {board.eventsCount}
        </Tag>
      </Link>
    </div>
  </Panel>
)
