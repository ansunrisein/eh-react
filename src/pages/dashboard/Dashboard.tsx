import React, {useCallback, useState} from 'react'
import cx from 'classnames'
import {RiAddFill, RiDashboardLine, RiHashtag} from 'react-icons/ri'
import {useAsyncFn, useTitle} from 'react-use'
import {Button, Divider, IconButton, Loader, Panel, Popover, Whisper} from 'rsuite'
import {useBooleanState} from 'use-boolean-state'
import {Icon} from '@rsuite/icons'
import {Flex} from '@eh/shared/lib/reflexbox'
import {Link} from '@eh/shared/lib/router'
import {Empty, Modal} from '@eh/shared/ui'
import {useNewBoards, useNewBoardsGate} from '@eh/entities/board'
import {BoardCard} from '@eh/entities/board/ui'
import {useIsAuthenticated} from '@eh/entities/session'
import {Filters} from '@eh/features/filter'
import {SearchInput} from '@eh/features/search'
import {Sorts, SortState} from '@eh/features/sort'
import {CreateBoardForm} from '@eh/features/update-board'
import {Layout} from '@eh/widgets/layout'
import {filterConfig, sortConfig} from './config'
import {useBoards} from './model'
import {MiniBoard} from './ui'
import S from './Dashboard.module.scss'

export const Dashboard: React.FC = () => {
  const [display, setDisplay] = useState('grid')
  const [createWithSearchTitle, setCreateWithSearchTitle] = useState(false)

  const [sortsState, setSortsState] = useState<Record<string, SortState>>(() =>
    sortConfig.reduce((acc, e) => ({...acc, [e.name]: 'none'}), {}),
  )
  const [filtersState, setFiltersState] = useState<Record<string, number>>(() =>
    filterConfig.reduce((acc, e) => ({...acc, [e.name]: 0}), {}),
  )
  const [searchText, setSearchText] = useState<string | undefined>(undefined)

  const [isCreateBoardOpened, openCreateBoard, closeCreateBoard] = useBooleanState(false)
  const openCreate = () => {
    setCreateWithSearchTitle(true)
    openCreateBoard()
  }
  const closeCreate = () => {
    setCreateWithSearchTitle(false)
    closeCreateBoard()
  }

  const isAuthenticated = useIsAuthenticated()

  const newBoards = useNewBoards()

  const {boards, loading, fetchMoreBoards, hasMoreBoards} = useBoards({
    sort: sortsState,
    filter: filtersState,
    search: {text: searchText},
  })

  const [fetchMoreBoardsState, fetchMore] = useAsyncFn(fetchMoreBoards, [fetchMoreBoards])

  useTitle('Dashboard')

  const switchDisplay = useCallback(
    () => setDisplay(display => (display === 'list' ? 'grid' : 'list')),
    [],
  )

  useNewBoardsGate()

  return (
    <Layout header>
      <Flex justifyContent="flex-end" style={{marginRight: '1rem', marginBottom: '1rem'}}>
        <SearchInput style={{width: '300px'}} onChange={setSearchText} />
      </Flex>
      <Flex height="100%" gap={15} alignItems="flex-start" overflow="hidden">
        <Flex height="100%" flexDirection="column" justifyContent="space-between">
          <Flex flexDirection="column" gap="1rem">
            {isAuthenticated && (
              <>
                <Sorts sorts={sortConfig} onChange={setSortsState} vertical />
                <Filters filters={filterConfig} onChange={setFiltersState} vertical />
              </>
            )}
          </Flex>

          <Flex flexDirection="column">
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
        </Flex>

        {loading ? (
          <Loader backdrop center size="lg" />
        ) : !boards?.edges.length && !newBoards.length ? (
          <Empty>
            {isAuthenticated ? (
              !searchText?.length ? (
                <>
                  <p>You have no boards</p>
                  <Button onClick={openCreateBoard} appearance="link">
                    Create now! :)
                  </Button>
                </>
              ) : (
                <>
                  <p>Not found</p>
                  <span>
                    <span>You can </span>
                    <button onClick={openCreate} className={S.link}>
                      create
                    </button>
                    <span> new board with the name </span>
                    <span className={S.name}>{searchText}</span>
                    <span> :)</span>
                  </span>
                </>
              )
            ) : (
              <>
                <p>There is no public boards</p>
                <p>
                  <Link to="/id" className={S.link}>
                    Sign in
                  </Link>{' '}
                  and create first public board :)
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

      <Modal open={isCreateBoardOpened} onClose={closeCreate} backdrop>
        <CreateBoardForm
          defaultValues={
            searchText?.length && createWithSearchTitle
              ? {title: searchText, isPrivate: false}
              : undefined
          }
          onCreate={closeCreate}
        />
      </Modal>
    </Layout>
  )
}
