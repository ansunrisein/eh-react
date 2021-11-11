import React, {useCallback, useState} from 'react'
import {RiAddFill, RiDashboardLine} from 'react-icons/ri'
import {Button, IconButton} from 'rsuite'
import {useBooleanState} from 'use-boolean-state'
import {Icon} from '@rsuite/icons'
import {Flex} from '@eh/shared/lib/reflexbox'
import {Empty, Modal} from '@eh/shared/ui'
import {BoardCard} from '@eh/entities/board/ui'
import {CreateBoardForm} from '@eh/features/update-board'
import {Layout} from '@eh/widgets/layout'
import {useBoards} from './model'
import {MiniBoard} from './ui'
import S from './Dashboard.module.scss'

export const Dashboard: React.FC = () => {
  const [display, setDisplay] = useState('grid')
  const [isCreateBoardOpened, openCreateBoard, closeCreateBoard] = useBooleanState(false)

  const {boards, loading} = useBoards()

  const switchDisplay = useCallback(
    () => setDisplay(display => (display === 'list' ? 'grid' : 'list')),
    [],
  )

  return (
    <Layout header loading={loading}>
      <Flex height="100%" gap={15} alignItems="flex-start" overflow="hidden">
        <Flex height="100%" flexDirection="column" justifyContent="flex-end">
          <IconButton onClick={switchDisplay} icon={<Icon as={RiDashboardLine} />} size="lg" />
          <IconButton
            onClick={openCreateBoard}
            className={S.add}
            icon={<Icon as={RiAddFill} />}
            appearance="primary"
            size="lg"
          />
        </Flex>
        {!boards?.length ? (
          <Empty>
            <p>You have no boards :(</p>
            <Button onClick={openCreateBoard} appearance="link">
              Create now!
            </Button>
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
