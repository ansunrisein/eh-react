import React from 'react'
import {Col, Grid, Row} from 'rsuite'
import {Box} from 'reflexbox'
import {EventFragment} from '@eh/react/features/shared/graphql/types/EventFragment'
import {EventCard} from '../EventCard'

export type EventGridProps = {
  events: EventFragment[]
}

export const EventGrid: React.FC<EventGridProps> = ({events}) => (
  <Grid fluid style={{marginBottom: '-0.8rem'}}>
    <Row gutter={10}>
      {events.map((e, i) => (
        <Col key={i} lg={4} md={6} sm={12} xs={24}>
          <Box marginBottom="0.8rem" height="30vh">
            <EventCard event={e} />
          </Box>
        </Col>
      ))}
    </Row>
  </Grid>
)
