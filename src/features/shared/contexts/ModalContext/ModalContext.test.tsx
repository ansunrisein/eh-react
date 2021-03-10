import {useContext} from 'react'
import {renderHook} from '@testing-library/react-hooks'
import {ModalContext} from './ModalContext'

describe('ModalContext', () => {
  it('should provide default value', () => {
    const {result} = renderHook(() => useContext(ModalContext))
    expect(result.current).toBeDefined()
  })
})
