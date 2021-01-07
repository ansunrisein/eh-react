import React from 'react'
import {act, render, screen} from '@testing-library/react'
import {Icon} from 'rsuite'
import {Filters} from './Filters'

describe('Filters', () => {
  const filters = [
    {
      name: 'ownership',
      icons: [
        <Icon key={0} icon="avatar" style={{opacity: '0.5'}} />,
        <Icon key={1} icon="avatar" />,
      ],
    },
    {
      name: 'favorite',
      icons: [<Icon key={0} icon="star" style={{opacity: '0.5'}} />, <Icon key={1} icon="star" />],
    },
  ]

  it('should call onChange on filter state change', () => {
    const onChange = jest.fn()
    render(<Filters onChange={onChange} filters={filters} />)
    act(() => screen.getAllByTestId('filter-button')[0].click())
    expect(onChange).toBeCalledTimes(1)
  })

  it('should call onChange with current filter state', () => {
    const onChange = jest.fn()
    render(<Filters onChange={onChange} filters={filters} />)
    act(() => screen.getAllByTestId('filter-button')[0].click())
    expect(onChange).toBeCalledWith({ownership: 1, favorite: 0})
  })
})
