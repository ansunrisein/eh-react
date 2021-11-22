import React, {useCallback, useState} from 'react'
import cx from 'classnames'
import {RiAddFill, RiDashboardLine} from 'react-icons/ri'
import {useTitle} from 'react-use'
import {Button, IconButton, Popover, Whisper} from 'rsuite'
import {useBooleanState} from 'use-boolean-state'
import {Icon} from '@rsuite/icons'
import {Flex} from '@eh/shared/lib/reflexbox'
import {Link} from '@eh/shared/lib/router'
import {Empty, Modal} from '@eh/shared/ui'
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

  const {boards, loading} = useBoards()

  useTitle('Dashboard')

  const switchDisplay = useCallback(
    () => setDisplay(display => (display === 'list' ? 'grid' : 'list')),
    [],
  )

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

        {!boards?.length ? (
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
        ) : display === 'grid' ? (
          <div className={S.boards}>
            {boards.map(board => (
              <MiniBoard key={board._id} board={board} className={S.shrink} />
            ))}
          </div>
        ) : (
          <div className={S.grid}>
            {boards.map(board => (
              <BoardCard key={board._id} board={board} />
            ))}
          </div>
        )}
      </Flex>

      <Modal open={isCreateBoardOpened} onClose={closeCreateBoard} backdrop>
        <CreateBoardForm onCreate={closeCreateBoard} />
      </Modal>
    </Layout>
  )
}
