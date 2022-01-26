import React, {useCallback, useState} from 'react'
import cx from 'classnames'
import {RiAddFill, RiDashboardLine, RiHashtag} from 'react-icons/ri'
import {useAsyncFn, useTitle} from 'react-use'
import {Button, Divider, IconButton, Panel, Popover, Whisper} from 'rsuite'
import {useBooleanState} from 'use-boolean-state'
import {Icon} from '@rsuite/icons'
import {Flex} from '@eh/shared/lib/reflexbox'
import {Link} from '@eh/shared/lib/router'
import {Empty, Modal} from '@eh/shared/ui'
import {useNewBoards, useNewBoardsGate} from '@eh/entities/board'
import {BoardCard} from '@eh/entities/board/ui'
import {useIsAuthenticated} from '@eh/entities/session'
import {CreateBoardForm} from '@eh/features/update-board'
import {Layout} from '@eh/widgets/layout'
import {useBoards} from './model'
import {MiniBoard} from './ui'
import S from './Dashboard.module.scss'

export const Dashboard: React.FC = () => {
  const [display, setDisplay] = useState('grid')
  const [isCreateBoardOpened, openCreateBoard, closeCreateBoard] = useBooleanState(false)

  const isAuthenticated = useIsAuthenticated()

  const newBoards = useNewBoards()
  const {boards, loading, fetchMoreBoards, hasMoreBoards} = useBoards()

  const [fetchMoreBoardsState, fetchMore] = useAsyncFn(fetchMoreBoards, [fetchMoreBoards])

  useTitle('Dashboard')

  const switchDisplay = useCallback(
    () => setDisplay(display => (display === 'list' ? 'grid' : 'list')),
    [],
  )

  useNewBoardsGate()

  return (
    <Layout header loading={loading}>
      <Flex height="100%" gap={15} alignItems="flex-start" overflow="hidden">
        <Flex height="100%" flexDirection="column" justifyContent="flex-end">
          <IconButton onClick={switchDisplay} icon={<Icon as={RiDashboardLine} />} size="lg" />

          <Whisper
            trigger={isAuthenticated ? 'none' : 'hover'}
            placement="auto"
            speaker={
              <Popover>
                <p>You should be logged in to create a board</p>
              </Popover>
            }
          >
            <div className={S.add}>
              <IconButton
                onClick={openCreateBoard}
                className={cx(!isAuthenticated && S.disabled)}
                disabled={!isAuthenticated}
                icon={<Icon as={RiAddFill} />}
                appearance="primary"
                size="lg"
              />
            </div>
          </Whisper>
        </Flex>

        {!boards?.edges.length && !newBoards.length ? (
          <Empty>
            {isAuthenticated ? (
              <>
                <p>You have no boards :(</p>
                <Button onClick={openCreateBoard} appearance="link">
                  Create now!
                </Button>
              </>
            ) : (
              <>
                <p>There is no public boards :( </p>
                <p>
                  <Link to="/id" className={S.link}>
                    Sign in
                  </Link>{' '}
                  and create first public board
                </p>
              </>
            )}
          </Empty>
        ) : (
          <div className={S.content}>
            {!!newBoards.length && (
              <Panel bodyFill>
                <h4 className={S.title}>
                  <Icon as={RiHashtag} />
                  <span className={S.vertical}>Latest created boards</span>
                </h4>
                <div className={S.grid}>
                  {newBoards.map(e => (
                    <BoardCard key={e._id} board={e} />
                  ))}
                </div>
              </Panel>
            )}

            {!!boards?.edges.length && !!newBoards.length && <Divider />}

            {!!boards?.edges.length &&
              (display === 'grid' ? (
                <div className={S.boards}>
                  {boards.edges.map(e => (
                    <MiniBoard key={e.node._id} board={e.node} className={S.shrink} />
                  ))}
                </div>
              ) : (
                <div className={S.grid}>
                  {boards.edges.map(e => (
                    <BoardCard key={e.node._id} board={e.node} />
                  ))}
                </div>
              ))}

            {hasMoreBoards && (
              <Button
                className={S.more}
                appearance="ghost"
                block
                onClick={fetchMore}
                loading={fetchMoreBoardsState.loading}
              >
                Fetch more boards
              </Button>
            )}
          </div>
        )}
      </Flex>

      <Modal open={isCreateBoardOpened} onClose={closeCreateBoard} backdrop>
        <CreateBoardForm onCreate={closeCreateBoard} />
      </Modal>
    </Layout>
  )
}
