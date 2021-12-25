import React from 'react'
import cx from 'classnames'
import {Panel, PanelProps, Tag} from 'rsuite'
import {Link} from '@eh/shared/lib/router'
import {BoardFragment} from '../../api'
import S from './BoardCard.module.scss'

export type BoardCardProps = {
  board: BoardFragment
} & PanelProps

export const BoardCard: React.FC<BoardCardProps> = ({board, className, ...props}) => {
  // TODO: add `totalEvents` field to board entity
  const eventsCount = 15

  return (
    <Panel className={cx(S.height, className)} bordered shaded bodyFill {...props}>
      <div className={S.panel}>
        <Link to={`/board/${board._id}`}>
          <h4 className={S.title}>{board.title}</h4>

          <Tag className={S.tag} color={eventsCount ? 'violet' : 'orange'}>
            {eventsCount}
          </Tag>
        </Link>
      </div>
    </Panel>
  )
}
