import React, {useCallback, useState} from 'react'
import {useMedia, useTitle} from 'react-use'
import {Button, Drawer} from 'rsuite'
import {useBooleanState} from 'use-boolean-state'
import {Flex} from '@eh/shared/lib/reflexbox'
import {useNavigate, useParams} from '@eh/shared/lib/router'
import {Empty, Modal} from '@eh/shared/ui'
import {usePermissions} from '@eh/entities/board'
import {EventCard} from '@eh/entities/event'
import {CreateEventForm} from '@eh/features/update-event'
import {BoardSettings} from '@eh/widgets/board-settings'
import {Layout} from '@eh/widgets/layout'
import {SingleEvent} from '@eh/widgets/single-event'
import {useFullBoard} from './model'
import S from './Board.module.scss'

export const Board: React.FC = () => {
  const [openedEventId, setOpenedEventId] = useState<string | null>(null)
  const [isCreateEventOpened, openCreateEvent, closeCreateEvent] = useBooleanState(false)
  const [isBoardSettingsOpened, openBoardSettings, closeBoardSettings] = useBooleanState(false)

  const {id = ''} = useParams<'id'>()
  const navigate = useNavigate()

  const {board, loading} = useFullBoard(id)
  const {canCreateEvent, canUpdateEvent, canRemoveEvent, canViewSettings} = usePermissions(board)

  useTitle(`Board | ${board?.title || ''}`)

  const remove = useCallback(() => {
    closeBoardSettings()
    navigate('/')
  }, [closeBoardSettings, navigate])

  const isTablet = useMedia('(min-width: 768px)')

  return (
    <Layout header loading={loading}>
      {(canCreateEvent || canViewSettings) && (
        <Flex justifyContent="flex-end" className={S.panel}>
          {canCreateEvent && (
            <Button size="xs" color="blue" appearance="primary" onClick={openCreateEvent}>
              Create event
            </Button>
          )}
          {canViewSettings && (
            <Button size="xs" color="red" onClick={openBoardSettings}>
              Settings
            </Button>
          )}
          <Modal open={isCreateEventOpened} onClose={closeCreateEvent} backdrop>
            <CreateEventForm boardId={id} onCreate={closeCreateEvent} />
          </Modal>
        </Flex>
      )}

      {board?.events.edges.length ? (
        <ul className={S.grid}>
          {board.events.edges.map(e => (
            <li key={e.node._id} onClick={() => setOpenedEventId(e.node._id)}>
              <EventCard event={e.node} className={S.event} />
            </li>
          ))}
        </ul>
      ) : (
        <Empty>
          <p>There is no events in this board :(</p>
          {canCreateEvent && (
            <Button onClick={openCreateEvent} appearance="link">
              Create now!
            </Button>
          )}
        </Empty>
      )}

      <Modal open={openedEventId !== null} onClose={() => setOpenedEventId(null)} backdrop>
        {openedEventId && (
          <SingleEvent
            id={openedEventId}
            withEdit={canUpdateEvent}
            withRemove={canRemoveEvent}
            onRemove={() => setOpenedEventId(null)}
          />
        )}
      </Modal>

      <Drawer
        open={isBoardSettingsOpened}
        onClose={closeBoardSettings}
        backdrop
        full={!isTablet}
        placement={isTablet ? 'right' : 'bottom'}
      >
        <BoardSettings id={id} onRemove={remove} />
      </Drawer>
    </Layout>
  )
}
