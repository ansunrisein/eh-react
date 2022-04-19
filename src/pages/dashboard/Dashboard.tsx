import React, {useCallback, useState} from 'react'
import cx from 'classnames'
import {RiAddFill, RiDashboardLine, RiHashtag} from 'react-icons/ri'
import {FormattedMessage} from 'react-intl'
import {useAsyncFn, useTitle} from 'react-use'
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
import {Filters} from '@eh/features/filter'
import {SearchInput} from '@eh/features/search'
import {Sorts, SortState} from '@eh/features/sort'
import {CreateBoardForm} from '@eh/features/update-board'
import {Layout} from '@eh/widgets/layout'
import {filterConfig, sortConfig} from './config'
import {useBoards, useDashboardSearch} from './model'
import {texts} from './texts'
import {MiniBoard} from './ui'
import S from './Dashboard.module.scss'

export const Dashboard: React.FC = withModuleLocalization('dashboard-page')(() => {
  const [display, setDisplay] = useState('grid')
  const [createWithSearchTitle, setCreateWithSearchTitle] = useState(false)

  const [sortsState, setSortsState] = useState<Record<string, SortState>>(() =>
    sortConfig.reduce((acc, e) => ({...acc, [e.name]: 'none'}), {}),
  )
  const [filtersState, setFiltersState] = useState<Record<string, number>>(() =>
    filterConfig.reduce((acc, e) => ({...acc, [e.name]: 0}), {}),
  )
  const {search, changeSearch, resetSearch} = useDashboardSearch()

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

  useNewBoardsGate()

  return (
    <Layout header>
      <Flex justifyContent="flex-end" style={{marginRight: '1rem', marginBottom: '1rem'}}>
        <SearchInput
          className={S.searchInput}
          value={search}
          onChange={changeSearch}
          onReset={resetSearch}
        />
      </Flex>
      <Flex height="100%" gap={15} alignItems="flex-start" overflow="hidden">
        <Flex height="100%" flexDirection="column" justifyContent="space-between">
          <Flex flexDirection="column" gap="5px">
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
          <div className={S.content}>
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
          </div>
        )}
      </Flex>

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
