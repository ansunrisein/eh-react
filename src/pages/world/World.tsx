import React, {useState} from 'react'
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
import {SearchInput} from '@eh/features/search'
import {Sorts} from '@eh/features/sort'
import {Layout} from '@eh/widgets/layout'
import {usePopularBoards} from '@eh/pages/world/model'
import {filterConfig, sortConfig} from './config'
import {texts} from './texts'
import {MiniBoard} from './ui'
import S from './World.module.scss'

export const World: React.FC = withModuleLocalization('world-page')(() => {
  const [filtersState, setFiltersState] = useState<Record<string, number>>(() =>
    filterConfig.reduce((acc, e) => ({...acc, [e.name]: 0}), {}),
  )

  const {popularBoards, initialLoading, fetchMorePopularBoards, loadingMore, hasMoreBoards} =
    usePopularBoards({
      filter: filtersState,
    })

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
            <Sorts sorts={sortConfig} vertical size={isTablet ? 'md' : 'sm'} />
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
          ) : !popularBoards?.edges.length ? (
            <Empty>
              <p>
                <FormattedMessage {...texts.notFound} />
              </p>
            </Empty>
          ) : (
            <>
              <div className={S.boards}>
                {popularBoards.edges.map(e => (
                  <MiniBoard key={e.node._id} board={e.node} className={S.shrink} />
                ))}
              </div>

              {hasMoreBoards && (
                <Button
                  className={S.more}
                  appearance="ghost"
                  block
                  onClick={fetchMorePopularBoards}
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
