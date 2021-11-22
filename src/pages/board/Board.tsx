import React, {useCallback, useState} from 'react'
import {useTitle} from 'react-use'
import {Button} from 'rsuite'
import {useBooleanState} from 'use-boolean-state'
import {Flex} from '@eh/shared/lib/reflexbox'
import {useNavigate, useParams} from '@eh/shared/lib/router'
import {Empty, Modal} from '@eh/shared/ui'
import {isBoardOwner, useBoard, useRemoveBoard} from '@eh/entities/board'
import {EventCard} from '@eh/entities/event'
import {useMe} from '@eh/entities/session'
import {CreateEventForm} from '@eh/features/update-event'
import {Layout} from '@eh/widgets/layout'
import {SingleEvent} from '@eh/widgets/single-event'
import S from './Board.module.scss'

export const Board: React.FC = () => {
  const [openedEventId, setOpenedEventId] = useState<string | null>(null)
  const [isCreateEventOpened, openCreateEvent, closeCreateEvent] = useBooleanState(false)

  const {id = ''} = useParams<'id'>()
  const navigate = useNavigate()

  const me = useMe()
  const {board, loading} = useBoard(id)

  useTitle(`Board | ${board?.title || ''}`)

  const [removingState, removeBoard] = useRemoveBoard()

  const remove = useCallback(async () => {
    await removeBoard({id})
    navigate('/')
  }, [id, navigate, removeBoard])

  const isMyBoard = isBoardOwner(me?._id, board)

  return (
    <Layout header loading={loading || removingState.loading}>
      {isMyBoard && (
        <Flex justifyContent="flex-end" className={S.panel}>
          <Button size="xs" color="blue" appearance="primary" onClick={openCreateEvent}>
            Create event
          </Button>
          <Button size="xs" color="red" onClick={remove}>
            Remove board
          </Button>
          <Modal open={isCreateEventOpened} onClose={closeCreateEvent} backdrop>
            <CreateEventForm boardId={id} onCreate={closeCreateEvent} />
          </Modal>
        </Flex>
      )}

      {board?.events.length ? (
        <ul className={S.grid}>
          {board.events.map(e => (
            <li key={e._id} onClick={() => setOpenedEventId(e._id)}>
              <EventCard event={e} className={S.event} />
            </li>
          ))}
        </ul>
      ) : (
        <Empty>
          <p>There is no events in this board :(</p>
          <Button onClick={openCreateEvent} appearance="link">
            Create now!
          </Button>
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
