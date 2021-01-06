import React from 'react'
import {act, getByTestId, queryAllByTestId, render, screen} from '@testing-library/react'
import {StateButton} from './StateButton'

describe('StateButton', () => {
  const states = Array(5)
    .fill(0)
    .map((e, i) => <div key={i} data-testid={`test-id-${i}`} />)

  test.each(states.map((_, i) => i))('should set default state', i => {
    render(<StateButton states={states} defaultState={i} neutralState={false} />)
    const button = screen.getByTestId('state-button')
    const element = getByTestId(button, `test-id-${i}`)
    expect(element).toBeInTheDocument()
  })

  it('should set default state to 0 if defaultState prop not provided', () => {
    render(<StateButton states={states} neutralState={false} />)
    const button = screen.getByTestId('state-button')
    const element = getByTestId(button, 'test-id-0')
    expect(element).toBeInTheDocument()
  })

  it('should call onChange on state change', () => {
    const onChange = jest.fn()
    render(<StateButton states={states} onChange={onChange} />)
    act(() => screen.getByTestId('state-button').click())
    expect(onChange).toBeCalled()
  })

  test.each(states.map((_, i) => i))('should call onChange with new state', i => {
    const onChange = jest.fn()
    render(<StateButton states={states} defaultState={i} onChange={onChange} />)
    act(() => screen.getByTestId('state-button').click())
    expect(onChange).toBeCalledWith((i + 1) % (states.length + 1))
  })

  it('should render children', () => {
    render(
      <StateButton states={states}>
        <div data-testid="child" />
      </StateButton>,
    )
    const button = screen.getByTestId('state-button')
    const child = getByTestId(button, 'child')
    expect(child).toBeInTheDocument()
  })

  it('should add neutral state by default', () => {
    render(
      <StateButton states={states}>
        <div />
      </StateButton>,
    )
    const button = screen.getByTestId('state-button')
    const elements = queryAllByTestId(button, /test-id-.*/)
    expect(elements.length).toBe(0)
  })

  it("shouldn't add neutral state without children", () => {
    render(<StateButton states={states} />)
    const button = screen.getByTestId('state-button')
    const elements = queryAllByTestId(button, /test-id-.*/)
    expect(elements.length).toBe(1)
  })
})
