import React, {useState} from 'react'
import {BiSort} from 'react-icons/bi'
import {FormattedMessage} from 'react-intl'
import {ButtonGroup, ButtonGroupProps, Tooltip, Whisper} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {withModuleLocalization} from '@eh/shared/lib/i18n'
import {AvailableSort} from '../../sorts'
import {SortButton, SortState} from '../sort-button'
import {mapSortsConfigToObj} from './helpers'
import {texts} from './texts'
import S from './Sorts.module.scss'

export type SortsProps = {
  onChange?: (sort: Partial<Record<AvailableSort, SortState>>) => unknown
  sorts: AvailableSort[]
} & ButtonGroupProps

export const Sorts: React.FC<SortsProps> = withModuleLocalization('sort-feature')(
  ({onChange, sorts, disabled, ...props}) => {
    const [sort, setSort] = useState(() => mapSortsConfigToObj(sorts))

    const onSortChange = (name: AvailableSort, state: SortState) => {
      const newSort = {[name]: state}
      setSort(newSort)
      onChange?.(newSort)
    }

    return (
      <div className={S.container}>
        <Whisper
          trigger={['click', 'hover']}
          speaker={
            <Tooltip>
              <FormattedMessage {...texts.sorts} />
            </Tooltip>
          }
        >
          <div className={S.sort}>
            <Icon as={BiSort} className={S.icon} />
          </div>
        </Whisper>

        <ButtonGroup {...props}>
          {sorts.map((e, i) => (
            <SortButton
              key={i}
              name={e}
              state={sort[e]}
              onChange={onSortChange}
              data-testid="sort-button"
              disabled={disabled}
            />
          ))}
        </ButtonGroup>
      </div>
    )
  },
)
