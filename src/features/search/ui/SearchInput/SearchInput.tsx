import React from 'react'
import {RiCloseLine, RiSearch2Line} from 'react-icons/ri'
import {Input, InputGroup, InputGroupProps} from 'rsuite'
import {Icon} from '@rsuite/icons'

export type SearchInputProps = {
  value?: string
  onChange?: (text: string) => unknown
  onReset?: () => unknown
} & InputGroupProps

export const SearchInput: React.FC<SearchInputProps> = ({value, onChange, onReset, ...props}) => (
  <InputGroup {...props}>
    <Input value={value} placeholder="Search" onChange={onChange} />
    <InputGroup.Button appearance="subtle" onClick={onReset}>
      <Icon as={value ? RiCloseLine : RiSearch2Line} />
    </InputGroup.Button>
  </InputGroup>
)
