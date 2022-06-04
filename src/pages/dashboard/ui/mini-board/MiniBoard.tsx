import React from 'react'
import {RiHeart3Fill} from 'react-icons/ri'
import {FormattedMessage} from 'react-intl'
import {useMedia} from 'react-use'
import {Panel, PanelProps} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {Flex} from '@eh/shared/lib/reflexbox'
import {Link} from '@eh/shared/lib/router'
import {Swiper} from '@eh/shared/ui/swiper'
import {SwiperBreakpoints} from '@eh/shared/ui/swiper/Swiper'
import {Info, usePermissions} from '@eh/entities/board'
import {EventCard} from '@eh/entities/event'
import {DashboardNodeFragment} from '../../api'
import {texts} from './texts'
import S from './MiniBoard.module.scss'

export type MiniBoardProps = {
  board: DashboardNodeFragment
} & PanelProps

export const MiniBoard: React.FC<MiniBoardProps> = ({board, ...props}) => {
  const {canCreateEvent} = usePermissions(board)

  const isTablet = useMedia('(min-width: 768px)')

  return (
    <Panel bordered shaded {...props}>
      <Flex justifyContent="space-between">
        <Link to={`/board/${board._id}`} className={S.titleContainer}>
          <Info board={board} className={S.title} />
        </Link>

        {board.isFavorite && <Icon as={RiHeart3Fill} className={S.favorite} />}
      </Flex>

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
            {canCreateEvent && (
              <>
                <br />
                <FormattedMessage
                  {...texts.createEvent}
                  values={{
                    link: (text: string) => (
                      <Link to={`/board/${board._id}`} className={S.link}>
                        {text}
                      </Link>
                    ),
                  }}
                />
              </>
            )}
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
