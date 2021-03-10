import React, {useContext} from 'react'
import {act, renderHook} from '@testing-library/react-hooks'
import {ModalProvider} from './ModalProvider'
import {ModalContext} from './ModalContext'

describe('ModalContext', () => {
  const wrapper: React.FC = props => <ModalProvider {...props} />
  const ModalComponent: React.FC<{test: any}> = () => <></>

  it('should provide default modals as empty array', () => {
    const {result} = renderHook(() => useContext(ModalContext), {wrapper})
    expect(result.current.modals).toEqual([])
  })

  it('should add modal by open function', () => {
    const {result} = renderHook(() => useContext(ModalContext), {wrapper})
    act(() => result.current.open(ModalComponent))
    expect(result.current.modals).toEqual(expect.arrayContaining([{component: ModalComponent}]))
  })

  it('should add modal props by open function', () => {
    const props = {test: 'test'}
    const {result} = renderHook(() => useContext(ModalContext), {wrapper})
    act(() => result.current.open(ModalComponent, props))
    expect(result.current.modals).toEqual(
      expect.arrayContaining([{component: ModalComponent, props}]),
    )
  })

  it('should remove modal by close function', () => {
    const {result} = renderHook(() => useContext(ModalContext), {wrapper})
    act(() => result.current.open(ModalComponent))
    act(() => result.current.close(ModalComponent))
    expect(result.current.modals).not.toEqual(expect.arrayContaining([{component: ModalComponent}]))
  })
})
