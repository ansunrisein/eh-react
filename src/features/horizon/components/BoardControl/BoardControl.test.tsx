import React from 'react'
import {act, render, screen} from '@testing-library/react'
import {BoardControl} from './BoardControl'

describe('BoardControl', () => {
  it('should call onFavClick on fav click', () => {
    const onFavClick = jest.fn()
    render(<BoardControl onFavClick={onFavClick} />)
    act(() => screen.getByTestId('fav').click())
    expect(onFavClick).toBeCalled()
  })

  it('should call onPinClick on pin click', () => {
    const onPinClick = jest.fn()
    render(<BoardControl onPinClick={onPinClick} />)
    act(() => screen.getByTestId('pin').click())
    expect(onPinClick).toBeCalled()
  })
})
