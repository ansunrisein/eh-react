import React, {useCallback, useState} from 'react'
import {RiUser6Fill} from 'react-icons/ri'
import {FormattedMessage} from 'react-intl'
import {useMedia, useTitle} from 'react-use'
import {Button, IconButton, Loader} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {withModuleLocalization} from '@eh/shared/lib/i18n'
import {Flex} from '@eh/shared/lib/reflexbox'
import {Link} from '@eh/shared/lib/router'
import {Empty} from '@eh/shared/ui'
import {useNewBoardsGate} from '@eh/entities/board'
import {Filters} from '@eh/features/filter'
import {SearchInput, useSearch} from '@eh/features/search'
import {Sorts, SortState} from '@eh/features/sort'
import {Layout} from '@eh/widgets/layout'
import {filterConfig, sortConfig} from './config'
import {useBoards, usePopularBoards} from './model'
import {texts} from './texts'
import {MiniBoard} from './ui'
import S from './World.module.scss'

export const World: React.FC = withModuleLocalization('world-page')(() => {
  const [sortsState, setSortsState] = useState<Record<string, SortState>>(() =>
    sortConfig.reduce((acc, e) => ({...acc, [e.name]: 'none'}), {}),
  )
  const [filtersState, setFiltersState] = useState<Record<string, number>>(() =>
    filterConfig.reduce((acc, e) => ({...acc, [e.name]: 0}), {}),
  )
  const {search} = useSearch()

  const {
    popularBoards,
    initialPopularLoading,
    fetchMorePopularBoards,
    loadingMorePopular,
    hasMorePopularBoards,
  } = usePopularBoards({
    filter: filtersState,
  })

  const {boards, initialBoardsLoading, fetchMoreBoards, loadingMoreBoards, hasMoreBoards} =
    useBoards({
      filter: filtersState,
      sort: sortsState,
    })

  const items = search ? boards : popularBoards

  const hasMore = hasMorePopularBoards || hasMoreBoards
  const initialLoading = initialPopularLoading || initialBoardsLoading
  const loadingMore = loadingMorePopular || loadingMoreBoards

  const fetchMore = useCallback(
    () => (search ? fetchMoreBoards() : fetchMorePopularBoards()),
    [fetchMoreBoards, fetchMorePopularBoards, search],
  )

  useTitle('Popular boards')

  const isTablet = useMedia('(min-width: 768px)')

  useNewBoardsGate()

  return (
    <Layout header>
      <div className={S.main}>
        <Link to="/" className={S.home}>
          <IconButton
            icon={<Icon as={RiUser6Fill} />}
            size={isTablet ? 'md' : 'sm'}
            appearance="primary"
            color="violet"
          />
        </Link>

        <SearchInput size={isTablet ? 'md' : 'sm'} className={S.searchInput} />

        <Flex
          height="100%"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
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
        </Flex>

        <div className={S.content}>
          {initialLoading ? (
            <Loader backdrop center size="lg" />
          ) : !items?.edges.length ? (
            <Empty>
              <p>
                <FormattedMessage {...texts.notFound} />
              </p>
            </Empty>
          ) : (
            <>
              <div className={S.boards}>
                {items.edges.map(e => (
                  <MiniBoard key={e.node._id} board={e.node} className={S.shrink} />
                ))}
              </div>

              {hasMore && (
                <Button
                  className={S.more}
                  appearance="ghost"
                  block
                  onClick={fetchMore}
                  loading={loadingMore}
                >
                  <FormattedMessage {...texts.fetchMoreBoards} />
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  )
})
