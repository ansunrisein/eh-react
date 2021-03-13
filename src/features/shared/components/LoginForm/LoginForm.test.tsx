import React from 'react'
import {fireEvent, render, RenderResult, waitFor} from '@testing-library/react'
import {LoginForm} from './LoginForm'

describe('LoginForm', () => {
  const email = 'antonchick@anton.sos'
  const password = 'P@33w0rd...'

  it('should call onSubmit on form submit valid inputs data', () => {
    const onSubmit = jest.fn()

    const container = render(<LoginForm onSubmit={onSubmit} />)

    fillForm(container, email, password)

    fireEvent.submit(container.getByRole('button', {name: /^login$/i}))

    return waitFor(() => expect(onSubmit).toBeCalled())
  })

  it('should call onSubmit with inputs data', async () => {
    const onSubmit = jest.fn()

    const container = render(<LoginForm onSubmit={onSubmit} />)

    fillForm(container, email, password)

    fireEvent.submit(container.getByRole('button', {name: /^login$/i}))

    await waitFor(() => expect(onSubmit).toBeCalled())
    expect(onSubmit.mock.calls[0]?.[0]).toEqual({email, password})
  })

  test.each([
    {email: '', password: ''},
    {email, password: ''},
    {email: '', password},
  ])('should not call onSubmit', async ({email, password}) => {
    const onSubmit = jest.fn()

    const container = render(<LoginForm onSubmit={onSubmit} />)

    fillForm(container, email, password)

    fireEvent.submit(container.getByRole('button', {name: /^login$/i}))

    await new Promise(setImmediate)
    expect(onSubmit).not.toBeCalled()
  })

  it('should call onGoogleClick', () => {
    const onGoogleClick = jest.fn()

    const container = render(<LoginForm onGoogleClick={onGoogleClick} />)

    fireEvent.click(container.getByRole('button', {name: /login with google/i}))

    expect(onGoogleClick).toBeCalled()
  })
})

const fillForm = (container: RenderResult, email: string, password: string) => {
  const emailInput = container.getByRole('textbox', {name: /email/i})
  const passwordInput = container.getByLabelText('Password')

  fireEvent.input(emailInput, {target: {value: email}})
  fireEvent.input(passwordInput, {target: {value: password}})
}
