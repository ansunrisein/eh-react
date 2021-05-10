import React from 'react'
import {Col, Grid, Row} from 'rsuite'
import {Box} from 'reflexbox'
import {Dashboard_dashboard_edges} from '../../graphql/types/Dashboard'
import {BoardCard} from '../BoardCard'

export type BoardGridProps = {
  boards: Dashboard_dashboard_edges[]
  onBoardFavClick?: (board: Dashboard_dashboard_edges) => unknown
  onBoardPinClick?: (board: Dashboard_dashboard_edges) => unknown
}

export const BoardGrid: React.FC<BoardGridProps> = ({boards, onBoardFavClick, onBoardPinClick}) => {
  const createOnFavClick = (board: Dashboard_dashboard_edges) =>
    onBoardFavClick ? () => onBoardFavClick(board) : undefined

  const createOnPinClick = (board: Dashboard_dashboard_edges) =>
    onBoardPinClick ? () => onBoardPinClick(board) : undefined

  return (
    <Grid fluid style={{marginBottom: '-0.8rem', width: 'auto'}} data-testid="board-grid">
      <Row gutter={10}>
        {boards.map(e => (
          <Col key={e.cursor} lg={4} md={6} sm={12} xs={24}>
            <Box marginBottom="0.8rem">
              <BoardCard
                board={e.node}
                onFavClick={createOnFavClick(e)}
                onPinClick={createOnPinClick(e)}
                data-testid={e.node._id}
              />
            </Box>
          </Col>
        ))}
      </Row>
    </Grid>
  )
}
