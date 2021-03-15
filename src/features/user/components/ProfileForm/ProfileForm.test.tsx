import React from 'react'
import {fireEvent, render, waitFor} from '@testing-library/react'
import {ProfileForm} from './ProfileForm'

describe('ProfileForm', () => {
  const defaultValues = {
    nickname: 'nickname',
    name: 'name',
  }

  it('should render nickname field', () => {
    const container = render(<ProfileForm />)
    expect(container.getByRole('textbox', {name: 'nickname'})).toBeInTheDocument()
  })

  it('should render name field', () => {
    const container = render(<ProfileForm />)
    expect(container.getByRole('textbox', {name: 'name'})).toBeInTheDocument()
  })

  it('should pass default values to inputs', () => {
    const container = render(<ProfileForm defaultValues={defaultValues} />)

    expect(container.getByRole('textbox', {name: 'nickname'})).toHaveValue(defaultValues.nickname)
    expect(container.getByRole('textbox', {name: 'name'})).toHaveValue(defaultValues.name)
  })

  it('should not show submit button if form is not dirty', () => {
    const onSubmit = jest.fn()

    const container = render(<ProfileForm defaultValues={defaultValues} onSubmit={onSubmit} />)

    expect(container.getByRole('button', {name: /^save$/i})).toBeDisabled()
  })

  it('should call onSubmit when inputs data is valid', () => {
    const onSubmit = jest.fn()
    const container = render(<ProfileForm onSubmit={onSubmit} />)

    fireEvent.input(container.getByRole('textbox', {name: 'nickname'}), {
      target: {value: 'nickname'},
    })
    fireEvent.input(container.getByRole('textbox', {name: 'name'}), {
      target: {value: 'name'},
    })

    fireEvent.submit(container.getByRole('button', {name: /^save$/i}))

    return waitFor(() => expect(onSubmit).toBeCalled())
  })

  test.each([
    {name: '', nickname: ''},
    {name: '123', nickname: ''},
  ])('should not call onSubmit when inputs is invalid', async ({name, nickname}) => {
    const onSubmit = jest.fn()
    const container = render(<ProfileForm onSubmit={onSubmit} />)

    fireEvent.input(container.getByRole('textbox', {name: 'nickname'}), {
      target: {value: nickname},
    })
    fireEvent.input(container.getByRole('textbox', {name: 'name'}), {
      target: {value: name},
    })

    fireEvent.submit(container.getByRole('button', {name: /^save$/i}))

    await new Promise(setImmediate)

    expect(onSubmit).not.toBeCalled()
  })
})
