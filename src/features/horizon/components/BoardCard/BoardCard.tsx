import React from 'react'
import {Panel, PanelProps} from 'rsuite'
import {Box, Flex} from 'reflexbox'
import c from 'classnames'
import {Spacing} from '@eh/react/ui'
import {Board_board} from '../../graphql/types/Board'
import {BoardControl} from '../BoardControl'
import s from './BoardCard.module.css'

export type BoardCardProps = {
  board: Board_board
  onFavClick?: () => unknown
  onPinClick?: () => unknown
} & Omit<PanelProps, 'bodyFill' | 'shaded' | 'bordered'>

export const BoardCard: React.FC<BoardCardProps> = ({
  board,
  onFavClick,
  onPinClick,
  className,
  ...props
}) => (
  <Panel className={c(s.panel, className)} shaded bordered bodyFill {...props}>
    <Flex overflow="hidden" justifyContent="space-between">
      <Box height="6rem" padding="0.5rem 0.2rem 0.5rem 1rem">
        <h4 className={s.ellipsis}>{board.title}</h4>
        <Spacing space="0.6rem" vertical />
        <Box flex="1" overflow="hidden">
          {board.description}
        </Box>
      </Box>
      <BoardControl vertical onFavClick={onFavClick} onPinClick={onPinClick} />
    </Flex>
  </Panel>
)
