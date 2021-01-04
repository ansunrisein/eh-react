import React from 'react'
import {act, renderHook} from '@testing-library/react-hooks'
import {render} from '@testing-library/react'
import {useScrollToId} from './useScrollToId'

describe('useScrollToId', () => {
  let scrollIntoView: jest.Mock
  beforeEach(() => {
    scrollIntoView = jest.fn()
    window.HTMLElement.prototype.scrollIntoView = scrollIntoView
  })

  it('should scroll to element by id', () => {
    const {result} = renderHook(() => useScrollToId())
    render(<div id="id" ref={result.current.register} />)
    act(() => result.current.scroll('id'))
    expect(scrollIntoView).toBeCalled()
  })

  it("should not scroll if id doesn't exist", () => {
    const {result} = renderHook(() => useScrollToId())
    render(<div id="id" ref={result.current.register} />)
    act(() => result.current.scroll('notId'))
    expect(scrollIntoView).not.toBeCalled()
  })
})
