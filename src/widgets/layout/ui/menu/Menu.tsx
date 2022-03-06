import React from 'react'
import cx from 'classnames'
import {RiLogoutBoxLine, RiSettings2Fill} from 'react-icons/ri'
import {FormattedMessage} from 'react-intl'
import {ButtonGroup, ButtonGroupProps, IconButton} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {useNavigate} from '@eh/shared/lib/router'
import {useLogout} from '@eh/entities/session'
import {texts} from './texts'
import S from './Menu.module.scss'

export type MenuProps = Pick<ButtonGroupProps, keyof ButtonGroupProps>

export const Menu: React.FC<MenuProps> = ({className, vertical = true, ...props}) => {
  const logout = useLogout()
  const navigate = useNavigate()

  return (
    <ButtonGroup className={cx(S.menu, className)} vertical={vertical} {...props}>
      <IconButton
        href="/settings"
        onClick={e => {
          e.preventDefault()
          navigate('/settings')
        }}
        icon={<Icon as={RiSettings2Fill} />}
        size="md"
        appearance="link"
        className={S.link}
      >
        <FormattedMessage {...texts.settings} />
      </IconButton>

      <IconButton
        onClick={logout}
        icon={<Icon as={RiLogoutBoxLine} />}
        size="md"
        appearance="link"
        className={S.link}
      >
        <FormattedMessage {...texts.logout} />
      </IconButton>
    </ButtonGroup>
  )
}
