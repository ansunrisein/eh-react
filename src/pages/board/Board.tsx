import React, {useCallback, useState} from 'react'
import {RiHashtag} from 'react-icons/ri'
import {useMedia, useTitle} from 'react-use'
import {Button, Divider, Drawer} from 'rsuite'
import {useBooleanState} from 'use-boolean-state'
import {Icon} from '@rsuite/icons'
import {Flex} from '@eh/shared/lib/reflexbox'
import {useNavigate, useParams} from '@eh/shared/lib/router'
import {Empty, Modal} from '@eh/shared/ui'
import {usePermissions} from '@eh/entities/board'
import {EventCard, useNewEvents, useNewEventsGate} from '@eh/entities/event'
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

  const newEvents = useNewEvents()

  useTitle(`Board | ${board?.title || ''}`)

  const remove = useCallback(() => {
    closeBoardSettings()
    navigate('/')
  }, [closeBoardSettings, navigate])

  const isTablet = useMedia('(min-width: 768px)')

  useNewEventsGate()

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
          <Modal
            size={isTablet ? 'sm' : 'lg'}
            open={isCreateEventOpened}
            onClose={closeCreateEvent}
            backdrop
          >
            <CreateEventForm boardId={id} onCreate={closeCreateEvent} />
          </Modal>
        </Flex>
      )}

      {!newEvents.length && !board?.events.edges.length ? (
        <Empty>
          <p>There is no events in this board :(</p>
          {canCreateEvent && (
            <Button onClick={openCreateEvent} appearance="link">
              Create now!
            </Button>
          )}
        </Empty>
      ) : (
        <>
          {!!newEvents.length && (
            <div>
              <h4 className={S.title}>
                <Icon as={RiHashtag} />
                <span className={S.vertical}>Latest created events</span>
              </h4>
              <ul className={S.grid}>
                {newEvents.map(e => (
                  <li key={e._id} onClick={() => setOpenedEventId(e._id)}>
                    <EventCard event={e} className={S.event} />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!!newEvents.length && !!board?.events.edges && <Divider />}

          <ul className={S.grid}>
            {!!board?.events.edges &&
              board.events.edges.map(e => (
                <li key={e.node._id} onClick={() => setOpenedEventId(e.node._id)}>
                  <EventCard event={e.node} className={S.event} />
                </li>
              ))}
          </ul>
        </>
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
