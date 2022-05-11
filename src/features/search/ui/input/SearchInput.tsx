import React, {useEffect} from 'react'
import {RiCloseLine, RiSearch2Line} from 'react-icons/ri'
import {useIntl} from 'react-intl'
import {Input, InputGroup, InputGroupProps} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {withModuleLocalization} from '@eh/shared/lib/i18n'
import {useSearch} from '../../model'
import {texts} from './texts'

export type SearchInputProps = InputGroupProps

export const SearchInput: React.FC<SearchInputProps> = withModuleLocalization('search-feature')(
  props => {
    const {formatMessage} = useIntl()

    const {search, setSearch, resetSearch} = useSearch()

    useEffect(resetSearch, [resetSearch])

    return (
      <InputGroup {...props}>
        <Input value={search} placeholder={formatMessage(texts.search)} onChange={setSearch} />
        <InputGroup.Button appearance="subtle" onClick={resetSearch}>
          <Icon as={search ? RiCloseLine : RiSearch2Line} />
        </InputGroup.Button>
      </InputGroup>
    )
  },
)
