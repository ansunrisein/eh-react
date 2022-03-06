import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Button} from 'rsuite'
import {useRemoveBoardLink} from '@eh/entities/board-link'
import {texts} from './texts'

export type RemoveLinkButtonProps = {
  linkId: string
  onRemove?: () => void
}

export const RemoveLinkButton: React.FC<RemoveLinkButtonProps> = ({linkId, onRemove}) => {
  const [{loading}, remove] = useRemoveBoardLink()

  const handleRemove = async () => {
    await remove({_id: linkId})
    onRemove?.()
  }

  return (
    <Button onClick={handleRemove} loading={loading} appearance="primary" color="red">
      <FormattedMessage {...texts.remove} />
    </Button>
  )
}
