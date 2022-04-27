import React, {useState} from 'react'
import {RiFilterLine} from 'react-icons/ri'
import {FormattedMessage} from 'react-intl'
import {ButtonGroup, ButtonGroupProps, Tooltip, Whisper} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {withModuleLocalization} from '@eh/shared/lib/i18n'
import {FilterButton} from '../filter-button'
import {mapFiltersConfigToObj} from './helpers'
import {texts} from './texts'
import S from './Filters.module.scss'

export type FiltersProps = {
  onChange?: (filters: Record<string, number>) => void
  filters: {name: string; icons: React.ReactNode[]}[]
} & ButtonGroupProps

export const Filters: React.FC<FiltersProps> = withModuleLocalization('filter-feature')(
  ({onChange, filters, ...props}) => {
    const [filter, setFilter] = useState(() => mapFiltersConfigToObj(filters))

    const onStateChange = (name: string) => (state: number) => {
      const newFilter = {...filter, [name]: state}
      setFilter(newFilter)
      onChange?.(newFilter)
    }

    return (
      <div className={S.container}>
        <Whisper
          trigger={['hover', 'click']}
          speaker={
            <Tooltip>
              <FormattedMessage {...texts.filters} />
            </Tooltip>
          }
        >
          <div className={S.filter}>
            <Icon as={RiFilterLine} className={S.icon} />
          </div>
        </Whisper>

        <ButtonGroup {...props}>
          {filters.map((e, i) => (
            <FilterButton
              key={i}
              state={filter[e.name]}
              defaultState={filter[e.name]}
              onChange={onStateChange(e.name)}
            >
              {e.icons}
            </FilterButton>
          ))}
        </ButtonGroup>
      </div>
    )
  },
)
