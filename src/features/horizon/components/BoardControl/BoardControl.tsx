import React from 'react'
import {ButtonGroup, ButtonGroupProps, IconButton, IconButtonProps} from 'rsuite'
import {ActionIcon} from '@eh/react/ui'

export type BoardControlProps = {
  isFav?: boolean
  isPinned?: boolean
  onFavClick?: () => unknown
  onPinClick?: () => unknown
  size?: IconButtonProps['size']
} & ButtonGroupProps

export const BoardControl: React.FC<BoardControlProps> = ({
  isFav,
  isPinned,
  onFavClick,
  onPinClick,
  size,
  ...props
}) => (
  <ButtonGroup {...props}>
    <IconButton
      size={size}
      onClick={onFavClick}
      data-testid="fav"
      icon={<ActionIcon icon="fav" inverted={!isFav} />}
    />
    <IconButton
      size={size}
      onClick={onPinClick}
      data-testid="pin"
      icon={<ActionIcon icon="pin" inverted={!isPinned} />}
    />
  </ButtonGroup>
)
