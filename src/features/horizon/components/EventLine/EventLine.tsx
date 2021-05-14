import React from 'react'
import {Box, Flex} from 'reflexbox'
import SwiperCore, {Navigation} from 'swiper'
import {SwiperSlide} from 'swiper/react'
import {Board_board_events_edges} from '../../graphql/types/Board'
import {MySwiper} from '../MySwiper'
import {EventCard} from '../EventCard'

SwiperCore.use([Navigation])

export type EventLineProps = {
  events?: Board_board_events_edges[]
}

export const EventLine: React.FC<EventLineProps> = ({events}) => (
  <>
    {events && (
      <Flex>
        {events[0]?.node.pinned && (
          <Box width="15vw" flexShrink={0} paddingRight="1rem">
            <EventCard event={events[0].node} />
          </Box>
        )}
        <MySwiper>
          {events
            .filter(e => !e.node?.pinned)
            .map(e => (
              <SwiperSlide key={e.cursor} style={{width: '15vw'}}>
                <EventCard event={e.node} />
              </SwiperSlide>
            ))}
        </MySwiper>
      </Flex>
    )}
  </>
)
