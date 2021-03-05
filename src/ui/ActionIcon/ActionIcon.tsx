import React from 'react'
import c from 'classnames'
import {Icon, IconProps} from 'rsuite'
import s from './ActionIcon.module.css'

export type ActionIconProps = {
  icon: 'fav' | 'pin' | 'user' | 'team' | 'timer'
  disabled?: boolean
  inverted?: boolean
} & Omit<IconProps, 'icon'>

export const ActionIcon: React.FC<ActionIconProps> = ({
  icon,
  disabled,
  inverted,
  className,
  ...rest
}) => {
  const props = {
    className: c(s[icon], disabled && s.disabled, !inverted && s.checked, className),
    ...rest,
  }

  return icon === 'pin' ? (
    <Icon icon="thumb-tack" {...props} />
  ) : icon === 'fav' ? (
    <Icon icon={!inverted || disabled ? 'star' : 'star-o'} {...props} />
  ) : icon === 'user' ? (
    <Icon icon="avatar" {...props} />
  ) : icon === 'team' ? (
    <Icon icon="group" {...props} />
  ) : icon === 'timer' ? (
    <Icon icon="pie-chart" />
  ) : null
}
