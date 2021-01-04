import React from 'react'
import {act, getByTestId, render, screen} from '@testing-library/react'
import {boards} from './testData'
import {BoardList} from './BoardList'

describe('BoardList', () => {
  let scrollIntoView: jest.Mock
  beforeEach(() => {
    scrollIntoView = jest.fn()
    window.HTMLElement.prototype.scrollIntoView = scrollIntoView
  })

  it('should scroll to board on expand', () => {
    render(<BoardList boards={boards} />)
    const board = screen.getByTestId('board-' + boards[0].id)
    act(() => getByTestId(board, 'expand-button').click())
    expect(scrollIntoView).toBeCalled()
  })

  it('should set id to board list items', () => {
    render(<BoardList boards={boards} />)
    expect([...screen.getByTestId('board-list').children].every(e => e.id)).toBe(true)
  })
})
