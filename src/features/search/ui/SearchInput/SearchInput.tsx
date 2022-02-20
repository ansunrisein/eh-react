import React from 'react'
import {RiSearch2Line} from 'react-icons/ri'
import {Input, InputGroup, InputGroupProps} from 'rsuite'
import {Icon} from '@rsuite/icons'

export type SearchInputProps = {
  onChange?: (text: string) => unknown
} & InputGroupProps

export const SearchInput: React.FC<SearchInputProps> = ({onChange, ...props}) => (
  <InputGroup {...props}>
    <Input placeholder="Search" onChange={onChange} />
    <InputGroup.Button>
      <Icon as={RiSearch2Line} />
    </InputGroup.Button>
  </InputGroup>
)
