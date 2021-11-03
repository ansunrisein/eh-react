import React from 'react'
import {Panel, PanelProps} from 'rsuite'
import {useMedia} from 'react-use'
import {Swiper} from '@eh/shared/ui/swiper'
import {EventCard} from '@eh/entities/event'
import {BoardWithEvents} from '../../types'
import S from './MiniBoard.module.scss'

export type MiniBoardProps = {
  board: BoardWithEvents
} & PanelProps

export const MiniBoard: React.FC<MiniBoardProps> = ({board, ...props}) => {
  const isTablet = useMedia('(min-width: 768px)')

  return (
    <Panel bordered shaded {...props}>
      <h4 className={S.title}>{board.title}</h4>

      <Swiper withNavigation={isTablet} breakpoints={swiperBreakpoints}>
        {board.events ? (
          board.events.map(e => (
            <Swiper.Slide key={e.id}>
              <EventCard event={e} />
            </Swiper.Slide>
          ))
        ) : (
          <h2>Empty</h2>
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
