import React from 'react'
import {Icon, Steps} from 'rsuite'

export type ItemProps = {
  title: string
  status: React.ComponentProps<typeof Steps.Item>['status']
  icon: React.ComponentProps<typeof Icon>['icon']
}

export const Item: React.FC<ItemProps> = ({title, status, icon, children}) => (
  <Steps.Item
    status={status}
    title={<h5>{title}</h5>}
    icon={<Icon icon={icon} size="lg" />}
    description={children}
  />
)
