import React from 'react'
import {Col, Grid, Row} from 'rsuite'
import {Box} from 'reflexbox'
import SimpleBar from 'simplebar-react'
import {Board_board} from '../../graphql/types/Board'
import {Dashboard_dashboard_edges} from '../../graphql/types/Dashboard'
import {BoardCard} from '../BoardCard'

export type BoardGridProps = {
  boards: Dashboard_dashboard_edges[]
  onBoardFavClick?: (board: Board_board) => unknown
  onBoardPinClick?: (board: Board_board) => unknown
}

export const BoardGrid: React.FC<BoardGridProps> = ({boards, onBoardFavClick, onBoardPinClick}) => (
  <SimpleBar style={{width: '100%'}} color="blue">
    <Grid style={{marginBottom: '-0.8rem', width: 'auto'}} data-testid="board-grid">
      <Row gutter={20}>
        {boards.map(e => (
          <Col key={e.cursor} lg={4} md={6} sm={12} xs={24}>
            <Box marginBottom="0.8rem" minHeight="100px" minWidth="15vw">
              <BoardCard
                board={e.node}
                onFavClick={() => onBoardFavClick?.(e.node)}
                onPinClick={() => onBoardPinClick?.(e.node)}
                data-testid={e.node._id}
              />
            </Box>
          </Col>
        ))}
      </Row>
    </Grid>
  </SimpleBar>
)
