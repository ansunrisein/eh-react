import React from 'react'
import {RiCloseLine, RiSearch2Line} from 'react-icons/ri'
import {useIntl} from 'react-intl'
import {Input, InputGroup, InputGroupProps} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {withModuleLocalization} from '@eh/shared/lib/i18n'
import {texts} from './texts'

export type SearchInputProps = {
  value?: string
  onChange?: (text: string) => unknown
  onReset?: () => unknown
} & Omit<InputGroupProps, 'onChange'>

export const SearchInput: React.FC<SearchInputProps> = withModuleLocalization('search-feature')(
  ({value, onChange, onReset, ...props}) => {
    const {formatMessage} = useIntl()

    return (
      <InputGroup {...props}>
        <Input value={value} placeholder={formatMessage(texts.search)} onChange={onChange} />
        <InputGroup.Button appearance="subtle" onClick={onReset}>
          <Icon as={value ? RiCloseLine : RiSearch2Line} />
        </InputGroup.Button>
      </InputGroup>
    )
  },
)
