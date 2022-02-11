import React, {useCallback} from 'react'
import cx from 'classnames'
import {format} from 'date-fns'
import {RiAddFill} from 'react-icons/ri'
import {useMedia} from 'react-use'
import {Badge, Calendar, CalendarProps, IconButton, Popover, Whisper} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {BoardPageFragment} from '../../api'
import S from './Calendar.module.scss'

export type EventCalendarProps = {
  events?: BoardPageFragment['events']
  onCreateClick?: (date: Date) => unknown
} & CalendarProps

export const EventCalendar: React.FC<EventCalendarProps> = ({events, onCreateClick}) => {
  const isTablet = useMedia('(min-width: 1220px)')

  const renderCell = useCallback(
    (date: Date) => {
      const list =
        events?.edges.filter(
          e =>
            e.node.deadline &&
            format(new Date(e.node.deadline || ''), 'dd-MM-yyyy') ===
              format(new Date(date), 'dd-MM-yyyy'),
        ) || []

      const displayList = list?.filter((item, index) => index < 2) || []

      const moreCount = list.length - displayList.length

      return (
        <div className={cx(S.ceil, 'relative')}>
          <IconButton
            onClick={() => onCreateClick?.(date)}
            className={S.add}
            appearance="subtle"
            size="xs"
            icon={<Icon as={RiAddFill} style={{fontSize: '50px'}} />}
          />
          {!!list?.length && (
            <ul className={S.list}>
              {isTablet &&
                displayList?.map(({node}, i) => (
                  <li key={i} className={S.event}>
                    <Badge /> <b>{format(new Date(node.deadline), 'dd-MM-yyyy')}</b> -{' '}
                    {node.content}
                  </li>
                ))}
              {(moreCount || !isTablet) && (
                <Whisper
                  placement="top"
                  trigger="click"
                  speaker={
                    <Popover>
                      {list.map(({node}, index) => (
                        <p key={index}>
                          <b>{format(new Date(node.deadline), 'dd-MM-yyyy')}</b> - {node.content}
                        </p>
                      ))}
                    </Popover>
                  }
                >
                  <span className={S.link}>{isTablet ? `${moreCount} more` : 'events'}</span>
                </Whisper>
              )}
            </ul>
          )}
          {!list.length && !isTablet && <span style={{whiteSpace: 'pre'}}> </span>}
        </div>
      )
    },
    [events, isTablet, onCreateClick],
  )

  return <Calendar bordered renderCell={renderCell} />
}
