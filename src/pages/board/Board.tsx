import React, {useCallback, useState} from 'react'
import {RiCalendar2Fill, RiHashtag} from 'react-icons/ri'
import {useAsyncFn, useMedia, useTitle} from 'react-use'
import {Button, ButtonGroup, Divider, Drawer, Loader} from 'rsuite'
import {useBooleanState} from 'use-boolean-state'
import {Icon} from '@rsuite/icons'
import {Flex} from '@eh/shared/lib/reflexbox'
import {useNavigate, useParams} from '@eh/shared/lib/router'
import {Empty, Modal} from '@eh/shared/ui'
import {Info, usePermissions} from '@eh/entities/board'
import {EventCard, useNewEvents, useNewEventsGate} from '@eh/entities/event'
import {Sorts, SortState} from '@eh/features/sort'
import {CreateEventForm} from '@eh/features/update-event'
import {BoardSettings} from '@eh/widgets/board-settings'
import {Layout} from '@eh/widgets/layout'
import {SingleEvent} from '@eh/widgets/single-event'
import {sortConfig} from './config'
import {useFullBoard} from './model'
import {Actions, EventCalendar} from './ui'
import S from './Board.module.scss'

export const Board: React.FC = () => {
  const [defaultDeadline, setDefaultDeadline] = useState<Date | null>(null)
  const [openedEventId, setOpenedEventId] = useState<string | null>(null)
  const [openCalendar, setOpenCalendar] = useState(false)
  const [isCreateEventOpened, openCreateEvent, closeCreateEvent] = useBooleanState(false)
  const [isBoardSettingsOpened, openBoardSettings, closeBoardSettings] = useBooleanState(false)

  const [sortsState, setSortsState] = useState<Record<string, SortState>>(() =>
    sortConfig.reduce((acc, e) => ({...acc, [e.name]: 'none'}), {}),
  )

  const isTablet = useMedia('(min-width: 768px)')
  const {id = ''} = useParams<'id'>()
  const navigate = useNavigate()

  const {board, loading, fetchMoreEvents, hasMoreEvents} = useFullBoard({
    id,
    sort: sortsState,
    refetch: true,
  })
  const {canCreateEvent, canUpdateEvent, canRemoveEvent} = usePermissions(board)

  const newEvents = useNewEvents()

  const [fetchMoreEventsState, fetchMore] = useAsyncFn(fetchMoreEvents, [fetchMoreEvents])

  useTitle(`Board | ${board?.title || ''}`)

  const remove = useCallback(() => {
    closeBoardSettings()
    navigate('/')
  }, [closeBoardSettings, navigate])

  useNewEventsGate()

  const createEvent = useCallback(
    (date: Date) => {
      setDefaultDeadline(date)
      openCreateEvent()
    },
    [openCreateEvent],
  )

  return (
    <Layout header>
      <div className={S.panel}>
        <Info board={board} withPrivateIcon className={S.info} />
        <Actions
          board={board}
          onOpenBoardSettings={openBoardSettings}
          onOpenCreateEvent={openCreateEvent}
        />
      </div>

      <Flex height="100%">
        <div className={S.left}>
          <Sorts
            sorts={sortConfig}
            onChange={setSortsState}
            vertical
            size={isTablet ? 'md' : 'sm'}
          />
          <ButtonGroup size={isTablet ? 'md' : 'sm'}>
            <Button onClick={() => setOpenCalendar(state => !state)}>
              <div style={{padding: '3px'}}>
                <Icon as={RiCalendar2Fill} />
              </div>
            </Button>
          </ButtonGroup>
        </div>

        <Flex flexDirection="column" flex={1}>
          {loading ? (
            <Loader backdrop size="lg" />
          ) : !newEvents.length && !board?.events.edges.length ? (
            <Empty>
              <p>There is no events in this board</p>
              {canCreateEvent && (
                <Button onClick={openCreateEvent} appearance="link">
                  Create now! :)
                </Button>
              )}
            </Empty>
          ) : (
            <>
              {!!newEvents.length && (
                <div>
                  <h4 className={S.created}>
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

              {openCalendar ? (
                <EventCalendar events={board?.events} onCreateClick={createEvent} />
              ) : (
                <>
                  <ul className={S.grid}>
                    {!!board?.events.edges &&
                      board.events.edges.map(e => (
                        <li key={e.node._id} onClick={() => setOpenedEventId(e.node._id)}>
                          <EventCard event={e.node} className={S.event} />
                        </li>
                      ))}
                  </ul>
                  {hasMoreEvents && (
                    <Button
                      onClick={fetchMore}
                      loading={fetchMoreEventsState.loading}
                      className={S.more}
                      appearance="ghost"
                      block
                    >
                      Fetch more events
                    </Button>
                  )}
                </>
              )}
            </>
          )}
        </Flex>
      </Flex>

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

      <Modal
        size={isTablet ? 'sm' : 'lg'}
        open={isCreateEventOpened}
        onClose={closeCreateEvent}
        backdrop
      >
        <CreateEventForm
          boardId={id}
          onCreate={closeCreateEvent}
          defaultValues={{deadline: defaultDeadline, content: ''}}
        />
      </Modal>
    </Layout>
  )
}
