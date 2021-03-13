import React from 'react'
import {fireEvent, render} from '@testing-library/react'
import {UserMenu} from './UserMenu'

describe('UserMenu', () => {
  it('should call onProfileClick on profile click', () => {
    const onProfileClick = jest.fn()

    const container = render(<UserMenu onProfileClick={onProfileClick} />)

    fireEvent.click(container.getByRole('button', {name: /^profile$/i}))

    expect(onProfileClick).toBeCalled()
  })

  it('should call onNotificationsClick on notifications click', () => {
    const onNotificationsClick = jest.fn()

    const container = render(<UserMenu onNotificationsClick={onNotificationsClick} />)

    fireEvent.click(container.getByRole('button', {name: /^notifications$/i}))

    expect(onNotificationsClick).toBeCalled()
  })

  it('should call onLogOutClick on log out click', () => {
    const onLogOutClick = jest.fn()

    const container = render(<UserMenu onLogOutClick={onLogOutClick} />)

    fireEvent.click(container.getByRole('button', {name: /^log out$/i}))

    expect(onLogOutClick).toBeCalled()
  })
})
