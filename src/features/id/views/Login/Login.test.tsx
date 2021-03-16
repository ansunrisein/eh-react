import React from 'react'
import {fireEvent, render} from '@testing-library/react'
import {Login} from './Login'

describe('Login', () => {
  it('should call onGoogleLogin', () => {
    const onGoogleLogin = jest.fn()

    const container = render(<Login onGoogleLogin={onGoogleLogin} />)

    fireEvent.click(container.getByRole('button', {name: /^login with google$/i}))

    expect(onGoogleLogin).toBeCalled()
  })
})
