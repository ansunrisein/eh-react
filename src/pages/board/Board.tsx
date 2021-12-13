import React, {useCallback, useState} from 'react'
import {useTitle} from 'react-use'
import {Button, Drawer} from 'rsuite'
import {useBooleanState} from 'use-boolean-state'
import {Flex} from '@eh/shared/lib/reflexbox'
import {useNavigate, useParams} from '@eh/shared/lib/router'
import {Empty, Modal} from '@eh/shared/ui'
import {isBoardOwner, useBoard} from '@eh/entities/board'
import {EventCard} from '@eh/entities/event'
import {useMe} from '@eh/entities/session'
import {CreateEventForm} from '@eh/features/update-event'
import {BoardSettings} from '@eh/widgets/board-settings'
import {Layout} from '@eh/widgets/layout'
import {SingleEvent} from '@eh/widgets/single-event'
import S from './Board.module.scss'

export const Board: React.FC = () => {
  const [openedEventId, setOpenedEventId] = useState<string | null>(null)
  const [isCreateEventOpened, openCreateEvent, closeCreateEvent] = useBooleanState(false)
  const [isBoardSettingsOpened, openBoardSettings, closeBoardSettings] = useBooleanState(false)

  const {id = ''} = useParams<'id'>()

  const navigate = useNavigate()
  const {board, loading} = useBoard(id)

  useTitle(`Board | ${board?.title || ''}`)

  const remove = useCallback(() => {
    closeBoardSettings()
    navigate('/')
  }, [closeBoardSettings, navigate])

  const isMyBoard = isBoardOwner(me?._id, board)

  return (
    <Layout header loading={loading}>
      {isMyBoard && (
        <Flex justifyContent="flex-end" className={S.panel}>
          <Button size="xs" color="blue" appearance="primary" onClick={openCreateEvent}>
            Create event
          </Button>
          <Button size="xs" color="red" onClick={openBoardSettings}>
            Settings
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
          {isMyBoard && (
            <Button onClick={openCreateEvent} appearance="link">
              Create now!
            </Button>
          )}
        </Empty>
      )}

      <Modal open={openedEventId !== null} onClose={() => setOpenedEventId(null)} backdrop>
        {openedEventId && (
          <SingleEvent id={openedEventId} onRemove={() => setOpenedEventId(null)} />
        )}
      </Modal>

      <Drawer open={isBoardSettingsOpened} onClose={closeBoardSettings} backdrop>
        <BoardSettings id={id} onRemove={remove} />
      </Drawer>
    </Layout>
  )
}
