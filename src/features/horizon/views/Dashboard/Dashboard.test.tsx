import React from 'react'
import {act, render, screen} from '@testing-library/react'
import {Dashboard} from './Dashboard'
import {boards, filters, sorts} from './testData'

describe('Dashboard', () => {
  it('should call onFiltersChange', () => {
    const onChange = jest.fn()
    render(<Dashboard filters={filters} sorts={sorts} boards={boards} onFiltersChange={onChange} />)
    act(() => screen.getAllByTestId('filter-button')[0].click())
    expect(onChange).toBeCalledTimes(1)
  })

  it('should call onSortsChange', () => {
    const onChange = jest.fn()
    render(<Dashboard filters={filters} sorts={sorts} boards={boards} onSortsChange={onChange} />)
    act(() => screen.getAllByTestId('sort-button')[0].click())
    expect(onChange).toBeCalledTimes(1)
  })
})
