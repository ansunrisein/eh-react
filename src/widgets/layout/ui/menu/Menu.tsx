import React from 'react'
import {RiLogoutBoxLine, RiSettings2Fill} from 'react-icons/ri'
import {ButtonGroup, ButtonGroupProps, IconButton} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {useNavigate} from '@eh/shared/lib/router'
import {useLogout} from '@eh/entities/session'
import S from '@eh/widgets/layout/ui/header/Header.module.scss'

export const Menu: React.FC<ButtonGroupProps> = ({style, vertical = true, ...props}) => {
  const logout = useLogout()
  const navigate = useNavigate()

  return (
    <ButtonGroup style={{width: '100%', ...style}} vertical={vertical} {...props}>
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
        Settings
      </IconButton>

      <IconButton
        onClick={logout}
        icon={<Icon as={RiLogoutBoxLine} />}
        size="md"
        appearance="link"
        className={S.link}
      >
        Logout
      </IconButton>
    </ButtonGroup>
  )
}
