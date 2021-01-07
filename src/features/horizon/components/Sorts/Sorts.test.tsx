import React from 'react'
import {act, render, screen} from '@testing-library/react'
import {Icon} from 'rsuite'
import {Sorts} from './Sorts'

describe('Sorts', () => {
  const sorts = [
    {
      name: 'nearestEvent',
      icon: <Icon icon="pie-chart" />,
    },
    {
      name: 'favorite',
      icon: <Icon icon="star" />,
    },
  ]

  it('should call onChange', () => {
    const onChange = jest.fn()
    render(<Sorts sorts={sorts} onChange={onChange} />)
    act(() => screen.getAllByTestId('sort-button')[0].click())
    expect(onChange).toBeCalledTimes(1)
  })

  it('should call onChange with current sorts', () => {
    const onChange = jest.fn()
    render(<Sorts sorts={sorts} onChange={onChange} />)
    act(() => screen.getAllByTestId('sort-button')[0].click())
    expect(onChange).toBeCalledWith({nearestEvent: 'desc', favorite: 'none'})
  })
})
