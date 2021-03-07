import React from 'react'
import {act, render, screen} from '@testing-library/react'
import {Dashboard} from './Dashboard'
import {boards, filters, sorts} from './testData'

describe('Dashboard', () => {
  const displays = ['list', 'grid'] as const

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

  it('should set default display to list', () => {
    render(<Dashboard boards={boards} filters={filters} sorts={sorts} />)
    const boardList = screen.getByTestId('board-list')
    expect(boardList).toBeInTheDocument()
  })

  test.each(displays)('should set default display', display => {
    render(<Dashboard boards={boards} filters={filters} sorts={sorts} defaultDisplay={display} />)
    const boardDisplay = screen.getByTestId(`board-${display}`)
    expect(boardDisplay).toBeInTheDocument()
  })

  test.each(displays)('should render only one display', display => {
    const restDisplays = displays.filter(e => e !== display)
    render(<Dashboard boards={boards} filters={filters} sorts={sorts} defaultDisplay={display} />)
    for (const display of restDisplays) {
      const board = document.querySelector(`*[data-testid=board-${display}]`)
      expect(board).toBeNull()
    }
  })

  test.each(displays)('should switch display on click', display => {
    render(<Dashboard boards={boards} filters={filters} sorts={sorts} defaultDisplay={display} />)
    act(() => screen.getByTestId('switch-display').click())
    const next = displays[(displays.indexOf(display) + 1) % displays.length]
    const boardDisplay = screen.getByTestId(`board-${next}`)
    expect(boardDisplay).toBeInTheDocument()
  })
})
