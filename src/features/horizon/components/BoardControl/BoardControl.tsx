import React from 'react'
import {ButtonGroup, ButtonGroupProps, IconButton} from 'rsuite'
import {ActionIcon} from '@eh/react/ui'

export type BoardControlProps = {
  isFav?: boolean
  isPinned?: boolean
  onFavClick?: () => unknown
  onPinClick?: () => unknown
} & ButtonGroupProps

export const BoardControl: React.FC<BoardControlProps> = ({
  isFav,
  isPinned,
  onFavClick,
  onPinClick,
  ...props
}) => (
  <ButtonGroup {...props}>
    <IconButton
      onClick={onFavClick}
      data-testid="fav"
      icon={<ActionIcon icon="fav" inverted={!isFav} />}
    />
    <IconButton
      onClick={onPinClick}
      data-testid="pin"
      icon={<ActionIcon icon="pin" inverted={!isPinned} />}
    />
  </ButtonGroup>
)
