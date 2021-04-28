import React from 'react'
import {Col, Grid, Row} from 'rsuite'
import {Box} from 'reflexbox'
import {EventCard} from '../EventCard'
import {Board_board_events_edges} from '../../graphql/types/Board'

export type EventGridProps = {
  events?: Board_board_events_edges[]
}

export const EventGrid: React.FC<EventGridProps> = ({events}) => (
  <Grid fluid style={{marginBottom: '-0.8rem'}}>
    <Row gutter={10}>
      {events &&
        events.map((e, i) => (
          <Col key={i} lg={4} md={6} sm={12} xs={24}>
            <Box marginBottom="0.8rem" height="30vh">
              <EventCard event={e.node} />
            </Box>
          </Col>
        ))}
    </Row>
  </Grid>
)
