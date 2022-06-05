import React from 'react'
import {RiEyeFill, RiStarFill} from 'react-icons/ri'
import {FormattedMessage} from 'react-intl'
import {useMedia} from 'react-use'
import {Panel, PanelProps} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {Link} from '@eh/shared/lib/router'
import {Swiper} from '@eh/shared/ui/swiper'
import {SwiperBreakpoints} from '@eh/shared/ui/swiper/Swiper'
import {EventCard} from '@eh/entities/event'
import {WorldNodeFragment} from '../../api'
import {texts} from './texts'
import S from './MiniBoard.module.scss'

export type MiniBoardProps = {
  board: WorldNodeFragment
} & PanelProps

export const MiniBoard: React.FC<MiniBoardProps> = ({board, ...props}) => {
  const isTablet = useMedia('(min-width: 768px)')

  return (
    <Panel bordered shaded {...props}>
      <Link to={`/board/${board._id}`} className={S.header}>
        <div className={S.topContainer}>
          <div className={S.title}>
            <Icon as={RiStarFill} color="var(--rs-yellow-300)" />

            <span>{board.title}</span>
          </div>

          <div className={S.views}>
            <p>{board.views}</p>

            <Icon as={RiEyeFill} />
          </div>
        </div>

        {!!board.description && <span className={S.description}>{board.description}</span>}
      </Link>

      <Swiper withNavigation={isTablet} breakpoints={swiperBreakpoints}>
        {board.events.edges.length ? (
          board.events.edges.map(e => (
            <Swiper.Slide key={e.node._id}>
              <EventCard event={e.node} />
            </Swiper.Slide>
          ))
        ) : (
          <Panel>
            <FormattedMessage {...texts.noEvents} />
          </Panel>
        )}
      </Swiper>
    </Panel>
  )
}

const swiperBreakpoints: SwiperBreakpoints = {
  0: {slidesPerView: 'auto', spaceBetween: 20},
  768: {slidesPerView: 1, spaceBetween: 20},
  1024: {slidesPerView: 4, spaceBetween: 25},
  2560: {slidesPerView: 8, spaceBetween: 25},
}
