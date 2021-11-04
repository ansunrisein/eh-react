import React, {useMemo, useState} from 'react'
import {Button} from 'rsuite'
import {useBooleanState} from 'use-boolean-state'
import {Flex} from '@eh/shared/lib/reflexbox'
import {Empty, Modal} from '@eh/shared/ui'
import {EventCard, useEvents} from '@eh/entities/event'
import {CreateEventForm} from '@eh/features/update-event'
import {Layout} from '@eh/widgets/layout'
import {SingleEvent} from '@eh/widgets/single-event'
import {useBoard} from '@eh/entities/board'
import {useParams} from '@eh/shared/lib/router'
import S from './Board.module.scss'

export const Board: React.FC = () => {
  const [openedEventId, setOpenedEventId] = useState<string | null>(null)
  const [isCreateEventOpened, openCreateEvent, closeCreateEvent] = useBooleanState(false)

  const {id = ''} = useParams<'id'>()

  const board = useBoard(id)
  const allEvents = useEvents()

  const events = useMemo(
    () => allEvents.filter(event => board?.events.includes(event.id)),
    [allEvents, board],
  )

  return (
    <Layout header>
      <Flex justifyContent="flex-end" className={S.panel}>
        <Button size="xs" color="blue" onClick={openCreateEvent}>
          Create event
        </Button>
        <Modal open={isCreateEventOpened} onClose={closeCreateEvent} backdrop>
          <CreateEventForm boardId={id} onCreate={closeCreateEvent} />
        </Modal>
      </Flex>

      {events.length ? (
        <ul className={S.grid}>
          {events.map(e => (
            <li key={e.id} onClick={() => setOpenedEventId(e.id)}>
              <EventCard event={e} className={S.event} />
            </li>
          ))}
        </ul>
      ) : (
        <Empty>
          <h1>Empty</h1>
        </Empty>
      )}

      <Modal open={openedEventId !== null} onClose={() => setOpenedEventId(null)} backdrop>
        {openedEventId && (
          <SingleEvent id={openedEventId} onRemove={() => setOpenedEventId(null)} />
        )}
      </Modal>
    </Layout>
  )
}
