import React from 'react'
import {fireEvent, render, waitFor} from '@testing-library/react'
import {Login} from './Login'

describe('Login', () => {
  it('should call onLogin on submit form with valid inputs data', () => {
    const onLogin = jest.fn()

    const container = render(<Login onLogin={onLogin} />)

    const emailInput = container.getByRole('textbox', {name: /email/i})
    const passwordInput = container.getByLabelText('Password')

    fireEvent.input(emailInput, {target: {value: 'antonchick@anton.sos'}})
    fireEvent.input(passwordInput, {target: {value: 'P@33w0rd...'}})

    fireEvent.submit(container.getByRole('button', {name: /^login$/i}))

    return waitFor(() => expect(onLogin).toBeCalled())
  })

  it('should call onGoogleLogin', () => {
    const onGoogleLogin = jest.fn()

    const container = render(<Login onGoogleLogin={onGoogleLogin} />)

    fireEvent.click(container.getByRole('button', {name: /^login with google$/i}))

    expect(onGoogleLogin).toBeCalled()
  })

  it('should call onForgotClick', () => {
    const onForgotClick = jest.fn()

    const container = render(<Login onForgotClick={onForgotClick} />)

    fireEvent.click(container.getByRole('button', {name: /^forgot password\?$/i}))

    expect(onForgotClick).toBeCalled()
  })

  it('should call onSignUpClick', () => {
    const onSignUpClick = jest.fn()

    const container = render(<Login onSignUpClick={onSignUpClick} />)

    fireEvent.click(container.getByRole('button', {name: /^sign up$/i}))

    expect(onSignUpClick).toBeCalled()
  })
})
