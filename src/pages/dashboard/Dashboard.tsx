import React, {useCallback, useState} from 'react'
import cx from 'classnames'
import {RiAddFill, RiDashboardLine, RiGlobalLine, RiHashtag} from 'react-icons/ri'
import {FormattedMessage} from 'react-intl'
import {useAsyncFn, useMedia, useTitle} from 'react-use'
import {Button, Divider, IconButton, Loader, Panel, Popover, Whisper} from 'rsuite'
import {useBooleanState} from 'use-boolean-state'
import {Icon} from '@rsuite/icons'
import {withModuleLocalization} from '@eh/shared/lib/i18n'
import {Flex} from '@eh/shared/lib/reflexbox'
import {Link} from '@eh/shared/lib/router'
import {Empty, Modal} from '@eh/shared/ui'
import {useNewBoards, useNewBoardsGate} from '@eh/entities/board'
import {BoardCard} from '@eh/entities/board/ui'
import {useIsAuthenticated} from '@eh/entities/session'
import {AvailableFilter, Filters} from '@eh/features/filter'
import {SearchInput, useSearch} from '@eh/features/search'
import {AvailableSort, Sorts, SortState} from '@eh/features/sort'
import {CreateBoardForm} from '@eh/features/update-board'
import {Layout} from '@eh/widgets/layout'
import {useBoards} from './model'
import {texts} from './texts'
import {MiniBoard} from './ui'
import S from './Dashboard.module.scss'

export const filterConfig = Array<AvailableFilter>('ownership', 'favorite', 'pin')

export const sortConfig = Array<AvailableSort>('nearestEvent', 'favorite', 'pin', 'views')

export const Dashboard: React.FC = withModuleLocalization('dashboard-page')(() => {
  const [display, setDisplay] = useState('grid')
  const [createWithSearchTitle, setCreateWithSearchTitle] = useState(false)

  const [sortsState, setSortsState] = useState<Partial<Record<AvailableSort, SortState>>>(() =>
    sortConfig.reduce((acc, e) => ({...acc, [e]: 'none'}), {}),
  )
  const [filtersState, setFiltersState] = useState<Partial<Record<AvailableFilter, number>>>(() =>
    filterConfig.reduce((acc, e) => ({...acc, [e]: 0}), {}),
  )
  const {search} = useSearch()

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
    search: {text: search},
  })

  const [fetchMoreBoardsState, fetchMore] = useAsyncFn(fetchMoreBoards, [fetchMoreBoards])

  useTitle('Dashboard')

  const switchDisplay = useCallback(
    () => setDisplay(display => (display === 'list' ? 'grid' : 'list')),
    [],
  )

  const isTablet = useMedia('(min-width: 768px)')

  useNewBoardsGate()

  return (
    <Layout header>
      <div className={S.main}>
        <Flex alignItems="center" justifyContent="center">
          <Link to="/world">
            <IconButton
              icon={<Icon as={RiGlobalLine} />}
              size={isTablet ? 'md' : 'sm'}
              appearance="primary"
              color="violet"
            />
          </Link>
        </Flex>

        <SearchInput size={isTablet ? 'md' : 'sm'} className={S.searchInput} />

        <Flex
          height="100%"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          {isAuthenticated && (
            <Flex flexDirection="column" gap="1rem">
              <Sorts
                sorts={sortConfig}
                onChange={setSortsState}
                vertical
                size={isTablet ? 'md' : 'sm'}
              />
              <Filters
                filters={filterConfig}
                onChange={setFiltersState}
                vertical
                size={isTablet ? 'md' : 'sm'}
              />
            </Flex>
          )}

          <Flex flexDirection="column">
            <IconButton
              onClick={switchDisplay}
              icon={<Icon as={RiDashboardLine} />}
              size={isTablet ? 'lg' : 'md'}
            />

            <Whisper
              trigger={isAuthenticated ? 'none' : 'hover'}
              placement="auto"
              speaker={
                <Popover>
                  <p>
                    <FormattedMessage {...texts.createBoardUnauthorized} />
                  </p>
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
                  size={isTablet ? 'lg' : 'md'}
                />
              </div>
            </Whisper>
          </Flex>
        </Flex>

        <div className={S.content}>
          {loading ? (
            <Loader backdrop center size="lg" />
          ) : !boards?.edges.length && !newBoards.length ? (
            <Empty>
              {isAuthenticated ? (
                !search?.length ? (
                  <>
                    <p>
                      <FormattedMessage {...texts.noBoards} />
                    </p>
                    <Button onClick={openCreateBoard} appearance="link">
                      <FormattedMessage {...texts.createNow} />
                    </Button>
                  </>
                ) : (
                  <>
                    <p>
                      <FormattedMessage {...texts.notFound} />
                    </p>
                    <FormattedMessage
                      tagName="span"
                      {...texts.createWithSearchedNameSuggestion}
                      values={{
                        search,
                        createButton: (text: string) => (
                          <button onClick={openCreate} className={S.link}>
                            {text}
                          </button>
                        ),
                        title: (text: string) => <span className={S.name}>{text}</span>,
                      }}
                    />
                  </>
                )
              ) : (
                <>
                  <p>
                    <FormattedMessage {...texts.noPublicBoards} />
                  </p>
                  <p>
                    <FormattedMessage
                      {...texts.createPublicBoardSuggestion}
                      values={{
                        signInLink: (text: string) => (
                          <Link to="/id" className={S.link}>
                            {text}
                          </Link>
                        ),
                      }}
                    />
                  </p>
                </>
              )}
            </Empty>
          ) : (
            <>
              {!!newBoards.length && (
                <Panel bodyFill>
                  <h4 className={S.title}>
                    <Icon as={RiHashtag} />
                    <span className={S.vertical}>
                      <FormattedMessage {...texts.latestCreatedBoards} />
                    </span>
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
                  <FormattedMessage {...texts.fetchMoreBoards} />
                </Button>
              )}
            </>
          )}
        </div>
      </div>

      <Modal open={isCreateBoardOpened} onClose={closeCreate} backdrop>
        <CreateBoardForm
          defaultValues={
            search?.length && createWithSearchTitle ? {title: search, isPrivate: false} : undefined
          }
          onCreate={closeCreate}
        />
      </Modal>
    </Layout>
  )
})
