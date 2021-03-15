import React from 'react'
import {fireEvent, render} from '@testing-library/react'
import {AvatarForm} from './AvatarForm'

describe('AvatarForm', () => {
  it('should render submit button if avatar is changed', () => {
    const container = render(<AvatarForm avatar="second" defaultAvatar="first" />)

    const submitButton = container.getByRole('button', {name: 'submit'})

    expect(submitButton).toBeInTheDocument()
  })

  it('should not render submit button if avatar is not changed', () => {
    const container = render(<AvatarForm avatar="first" defaultAvatar="first" />)

    return expect(container.findByRole('button', {name: 'submit'})).rejects.toBeDefined()
  })

  it('should call onSubmit on submit button click', () => {
    const onSubmit = jest.fn()

    const container = render(
      <AvatarForm avatar="first" defaultAvatar="second" onSubmit={onSubmit} />,
    )

    fireEvent.submit(container.getByRole('button', {name: 'submit'}))

    expect(onSubmit).toBeCalled()
  })
})
