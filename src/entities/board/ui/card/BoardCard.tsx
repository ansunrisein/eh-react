import React from 'react'
import cx from 'classnames'
import {Panel, PanelProps, Tag} from 'rsuite'
import {Link} from '@eh/shared/lib/router'
import {Board} from '../../types'
import S from './BoardCard.module.scss'

export type BoardCardProps = {
  board: Omit<Board, 'events'> & {events: unknown[]}
} & PanelProps

export const BoardCard: React.FC<BoardCardProps> = ({board, className, ...props}) => {
  const eventsCount = board.events.length

  return (
    <Panel className={cx(S.height, className)} bordered shaded bodyFill {...props}>
      <div className={S.panel}>
        <Link to={`/board/${board.id}`}>
          <h4 className={S.title}>{board.title}</h4>

          <Tag className={S.tag} color={eventsCount ? 'violet' : 'orange'}>
            {eventsCount}
          </Tag>
        </Link>
      </div>
    </Panel>
  )
}
