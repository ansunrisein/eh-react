import React from 'react'
import {useStore} from 'effector-react/ssr'
import {EventCard, eventEntity} from '@eh/entities/event'
import {Button} from '@eh/shared/ui'
import * as S from './styles'

export const Board: React.FC = () => {
  const events = useStore(eventEntity.$events)

  return (
    <div>
      <div css={S.header}>
        <Button color="gradientPrimary">
          Create event
        </Button>
      </div>
      <div css={S.board}>
        {events.map(e => (
          <EventCard key={e.id} event={e} />
        ))}
      </div>
    </div>
  )
}
