import React from 'react'
import {Box, Flex} from 'reflexbox'
import SwiperCore, {Navigation} from 'swiper'
import {SwiperSlide} from 'swiper/react'
import {MySwiper} from '../MySwiper'
import {BoardFragment_events} from '../../graphql/types/BoardFragment'
import {EventCard} from '../EventCard'

SwiperCore.use([Navigation])

export type EventLineProps = {
  events: BoardFragment_events[]
}

export const EventLine: React.FC<EventLineProps> = ({events}) => (
  <Flex>
    {events[0].pinned && (
      <Box width="18vw" flexShrink={0} paddingRight="1rem">
        <EventCard event={events[0]} />
      </Box>
    )}
    <MySwiper>
      {events
        .filter(e => !e.pinned)
        .map((e, i) => (
          <SwiperSlide key={i} style={{width: '18vw'}}>
            <EventCard event={e} />
          </SwiperSlide>
        ))}
    </MySwiper>
  </Flex>
)
