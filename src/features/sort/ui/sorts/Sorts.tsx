import React, {ReactNode, useState} from 'react'
import {BiSort} from 'react-icons/bi'
import {FormattedMessage} from 'react-intl'
import {ButtonGroup, ButtonGroupProps, Tooltip, Whisper} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {withModuleLocalization} from '@eh/shared/lib/i18n'
import {Flex} from '@eh/shared/lib/reflexbox'
import {SortButton, SortState} from '../sort-button'
import {mapSortsConfigToObj} from './helpers'
import {texts} from './texts'
import S from './Sorts.module.scss'

export type SortsProps = {
  onChange?: (sort: Record<string, SortState>) => unknown
  sorts: {name: string; icon: ReactNode}[]
} & Omit<ButtonGroupProps, 'onChange'>

export const Sorts: React.FC<SortsProps> = withModuleLocalization('sort-feature')(
  ({onChange, sorts, ...props}) => {
    const [sort, setSort] = useState(() => mapSortsConfigToObj(sorts))

    const onSortChange = (name: string) => (state: SortState) => {
      const newSort = {[name]: state}
      setSort(newSort)
      onChange?.(newSort)
    }

    return (
      <Flex flexDirection="column">
        <Whisper
          trigger="hover"
          speaker={
            <Tooltip>
              <FormattedMessage {...texts.sorts} />
            </Tooltip>
          }
        >
          <div className={S.sort}>
            <Icon as={BiSort} style={{fontSize: '1rem'}} />
          </div>
        </Whisper>

        <ButtonGroup {...props}>
          {sorts.map((e, i) => (
            <SortButton
              key={i}
              state={sort[e.name]}
              onChange={onSortChange(e.name)}
              data-testid="sort-button"
            >
              {e.icon}
            </SortButton>
          ))}
        </ButtonGroup>
      </Flex>
    )
  },
)
