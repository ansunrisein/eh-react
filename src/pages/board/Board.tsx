import React, {useCallback, useState} from 'react'
import {
  RiHashtag,
  RiHeart3Fill,
  RiHeart3Line,
  RiPushpin2Fill,
  RiPushpinFill,
  RiQrCodeFill,
} from 'react-icons/ri'
import QRCode from 'react-qr-code'
import {useAsyncFn, useMedia, useTitle} from 'react-use'
import {Button, Divider, Drawer, IconButton, Loader, Modal as RModal} from 'rsuite'
import {useBooleanState} from 'use-boolean-state'
import {Icon} from '@rsuite/icons'
import {Flex} from '@eh/shared/lib/reflexbox'
import {useLocation, useNavigate, useParams} from '@eh/shared/lib/router'
import {Empty, Modal} from '@eh/shared/ui'
import {usePermissions} from '@eh/entities/board'
import {EventCard, useNewEvents, useNewEventsGate} from '@eh/entities/event'
import {useIsAuthenticated} from '@eh/entities/session'
import {useToggleIsFavorite} from '@eh/features/favorite-board'
import {useToggleIsPin} from '@eh/features/pin-board'
import {Sorts, SortState} from '@eh/features/sort'
import {useToggleSub} from '@eh/features/sub'
import {CreateEventForm} from '@eh/features/update-event'
import {BoardSettings} from '@eh/widgets/board-settings'
import {Layout} from '@eh/widgets/layout'
import {SingleEvent} from '@eh/widgets/single-event'
import {sortConfig} from '@eh/pages/board/sorts'
import {useFullBoard, useIsMyBoard} from './model'
import S from './Board.module.scss'

export const Board: React.FC = () => {
  const [openedEventId, setOpenedEventId] = useState<string | null>(null)
  const [isCreateEventOpened, openCreateEvent, closeCreateEvent] = useBooleanState(false)
  const [isBoardSettingsOpened, openBoardSettings, closeBoardSettings] = useBooleanState(false)
  const [isQRCodeOpened, openQRCode, closeQRCode] = useBooleanState(false)
  const [sortsState, setSortsState] = useState<Record<string, SortState>>(() =>
    sortConfig.reduce((acc, e) => ({...acc, [e.name]: 'none'}), {}),
  )

  const isTablet = useMedia('(min-width: 768px)')
  const {id = ''} = useParams<'id'>()
  const navigate = useNavigate()
  const {pathname} = useLocation()

  const isAuthenticated = useIsAuthenticated()

  const {board, loading, fetchMoreEvents, hasMoreEvents} = useFullBoard({id, sort: sortsState})
  const {canCreateEvent, canUpdateEvent, canRemoveEvent, canViewSettings} = usePermissions(board)

  const {loading: toggleIsFavoriteLoading, toggle: toggleFavorite} = useToggleIsFavorite(board)
  const {loading: toggleIsPinLoading, toggle: togglePin} = useToggleIsPin(board)

  const {loading: toggleSubLoading, toggle: toggleSub} = useToggleSub({
    boardId: board?._id || '',
    isFollow: !!board?.sub?._id,
  })

  const isMyBoard = useIsMyBoard(board?._id)

  const newEvents = useNewEvents()

  const [fetchMoreEventsState, fetchMore] = useAsyncFn(fetchMoreEvents, [fetchMoreEvents])

  useTitle(`Board | ${board?.title || ''}`)

  const remove = useCallback(() => {
    closeBoardSettings()
    navigate('/')
  }, [closeBoardSettings, navigate])

  useNewEventsGate()

  return (
    <Layout header>
      <Flex justifyContent="space-between">
        <Sorts sorts={sortConfig} onChange={setSortsState} size="xs" />

        <Flex alignItems="center" className={S.panel}>
          <Flex gap="1rem">
            <IconButton onClick={openQRCode} size="sm" icon={<Icon as={RiQrCodeFill} />} />

            {!isMyBoard && board && (
              <Button loading={toggleSubLoading} onClick={toggleSub} size="xs" appearance="primary">
                {board.sub?._id ? 'Unfollow' : 'Follow'}
              </Button>
            )}
          </Flex>

          {isAuthenticated && (
            <>
              <Divider vertical className={S.divider} />

              <IconButton
                loading={toggleIsFavoriteLoading}
                onClick={toggleFavorite}
                size="sm"
                icon={<Icon as={board?.isFavorite ? RiHeart3Fill : RiHeart3Line} />}
              />

              <IconButton
                loading={toggleIsPinLoading}
                onClick={togglePin}
                size="sm"
                icon={<Icon as={board?.isPin ? RiPushpinFill : RiPushpin2Fill} />}
              />

              {(canCreateEvent || canViewSettings) && <Divider vertical className={S.divider} />}
            </>
          )}
          {canCreateEvent && (
            <Button size="sm" appearance="primary" onClick={openCreateEvent}>
              Create event
            </Button>
          )}
          {canViewSettings && (
            <Button size="sm" onClick={openBoardSettings}>
              Settings
            </Button>
          )}
        </div>
      </div>

      <Flex>
        <div style={{marginRight: '1rem'}}>
          <Sorts sorts={sortConfig} onChange={setSortsState} vertical />
        </div>

        <Flex flexDirection="column" flex={1}>
          {loading ? (
            <Loader backdrop size="lg" />
          ) : !newEvents.length && !board?.events.edges.length ? (
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

      <RModal size="xs" open={isQRCodeOpened} onClose={closeQRCode} backdrop>
        <RModal.Header>
          <h4 className={S.qrcode}>{board?.title}</h4>
        </RModal.Header>

        <RModal.Body>
          <Flex justifyContent="center">
            <QRCode
              bgColor="var(--rs-body)"
              fgColor="var(--rs-text-primary)"
              value={`${process.env.REACT_APP_URL}${pathname}`}
            />
          </Flex>
        </RModal.Body>
      </RModal>

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
        <CreateEventForm boardId={id} onCreate={closeCreateEvent} />
      </Modal>
    </Layout>
  )
}
