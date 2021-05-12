import React, {useContext} from 'react'
import {act, renderHook} from '@testing-library/react-hooks'
import {ModalProvider} from './ModalProvider'
import {ModalContext} from './ModalContext'
import {useModal} from './useModal'
import {BaseModalProps} from './types'

describe('useModal', () => {
  const wrapper: React.FC = props => <ModalProvider {...props} />
  const ModalComponent: React.FC<BaseModalProps> = () => <></>

  it('should add modal by open function', () => {
    const {result} = renderHook(
      () => [useModal(ModalComponent), useContext(ModalContext)] as const,
      {wrapper},
    )
    act(() => result.current[0].open())
    expect(result.current[1].modals).toEqual(expect.arrayContaining([{component: ModalComponent}]))
  })

  it('should remove modal by close function', () => {
    const {result} = renderHook(
      () => [useModal(ModalComponent), useContext(ModalContext)] as const,
      {wrapper},
    )
    act(() => result.current[0].open())
    act(() => result.current[0].close())
    expect(result.current[1].modals).not.toEqual(
      expect.arrayContaining([{component: ModalComponent}]),
    )
  })

  it('should return isOpened as false by default', () => {
    const {result} = renderHook(() => useModal(ModalComponent), {wrapper})
    expect(result.current.isOpened).toBe(false)
  })

  it('should return isOpened as true when modal is opened', () => {
    const {result} = renderHook(() => useModal(ModalComponent), {wrapper})
    act(result.current.open)
    expect(result.current.isOpened).toBe(true)
  })

  it('should return isOpened as false when modal is closed', () => {
    const {result} = renderHook(() => useModal(ModalComponent), {wrapper})
    act(result.current.open)
    act(result.current.close)
    expect(result.current.isOpened).toBe(false)
  })

  it('should provide props on open', () => {
    const props = {test: 'test'}
    const {result} = renderHook(
      () => [useModal(ModalComponent), useContext(ModalContext)] as const,
      {wrapper},
    )
    act(() => result.current[0].open(props))
    expect(result.current[1].modals).toEqual(
      expect.arrayContaining([{component: ModalComponent, props}]),
    )
  })

  it('should return provided props on close', () => {
    const props = {test: 'test'}
    const {result} = renderHook(() => useModal(ModalComponent), {wrapper})
    act(() => result.current.open(props))
    expect(result.current.props).toEqual(props)
  })

  it('should clear props on close', () => {
    const props = {test: 'test'}
    const {result} = renderHook(() => useModal(ModalComponent), {wrapper})
    act(() => result.current.open(props))
    act(() => result.current.close())
    expect(result.current.props).toBeUndefined()
  })
})
