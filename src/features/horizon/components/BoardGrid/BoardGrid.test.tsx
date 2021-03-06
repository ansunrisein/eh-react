import React from 'react'
import {act, getByTestId, render, screen} from '@testing-library/react'
import {BoardGrid} from './BoardGrid'
import {boards} from './testData'

describe('BoardGrid', () => {
  test.each(boards)('should call onBoardFavClick with related board on fav click', board => {
    const onBoardFavClick = jest.fn()
    render(<BoardGrid boards={boards} onBoardFavClick={onBoardFavClick} />)
    const card = screen.getByTestId(board.node.id)
    act(() => getByTestId(card, 'fav').click())
    expect(onBoardFavClick).toBeCalledWith(board)
  })

  test.each(boards)('should call onBoardPinClick with related board on pin click', board => {
    const onBoardPinClick = jest.fn()
    render(<BoardGrid boards={boards} onBoardPinClick={onBoardPinClick} />)
    const card = screen.getByTestId(board.node.id)
    act(() => getByTestId(card, 'pin').click())
    expect(onBoardPinClick).toBeCalledWith(board)
  })
})
