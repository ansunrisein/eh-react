import React from 'react'
import {render, act, screen} from '@testing-library/react'
import {board} from './testData'
import {BoardCard} from './BoardCard'

describe('BoardCard', () => {
  it('should call onFavClick on fav click', () => {
    const onFavClick = jest.fn()
    render(<BoardCard board={board} onFavClick={onFavClick} />)
    act(() => screen.getByTestId('fav').click())
    expect(onFavClick).toBeCalled()
  })

  it('should call onPinClick on fav click', () => {
    const onPinClick = jest.fn()
    render(<BoardCard board={board} onPinClick={onPinClick} />)
    act(() => screen.getByTestId('pin').click())
    expect(onPinClick).toBeCalled()
  })
})
