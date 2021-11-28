import React from 'react'
import {useMedia} from 'react-use'
import {Panel, PanelProps} from 'rsuite'
import {BoardFragment} from '@eh/shared/api'
import {Link} from '@eh/shared/lib/router'
import {Swiper} from '@eh/shared/ui/swiper'
import {EventCard} from '@eh/entities/event'
import S from './MiniBoard.module.scss'

export type MiniBoardProps = {
  board: BoardFragment
} & PanelProps

export const MiniBoard: React.FC<MiniBoardProps> = ({board, ...props}) => {
  const isTablet = useMedia('(min-width: 768px)')

  return (
    <Panel bordered shaded {...props}>
      <Link to={`/board/${board._id}`}>
        <h4 className={S.title}>{board.title}</h4>
      </Link>

      <Swiper withNavigation={isTablet} breakpoints={swiperBreakpoints}>
        {board.events.length ? (
          board.events.map(e => (
            <Swiper.Slide key={e._id}>
              <EventCard event={e} />
            </Swiper.Slide>
          ))
        ) : (
          <Panel>
            There is no events :({' '}
            <Link to={`/board/${board._id}`} className={S.link}>
              Go to the board
            </Link>{' '}
            to create event{' '}
          </Panel>
        )}
      </Swiper>
    </Panel>
  )
}

const swiperBreakpoints = {
  768: {slidesPerView: 1, spaceBetween: 20},
  1024: {slidesPerView: 5, spaceBetween: 25},
  2560: {slidesPerView: 8, spaceBetween: 25},
}
