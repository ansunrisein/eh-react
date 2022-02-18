import React from 'react'
import {RiSearch2Line} from 'react-icons/ri'
import {Input, InputGroup, InputGroupProps} from 'rsuite'
import {Icon} from '@rsuite/icons'

export type SearchInputProps = InputGroupProps

export const SearchInput: React.FC<SearchInputProps> = ({...props}) => (
  <InputGroup {...props}>
    <Input placeholder="Search" />
    <InputGroup.Button>
      <Icon as={RiSearch2Line} />
    </InputGroup.Button>
  </InputGroup>
)
