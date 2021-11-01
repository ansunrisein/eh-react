import React from 'react'

type Story = React.FC<Record<string, never>>

export const hocsToDecorators = (hocs: Array<(Component: Story) => Story>) =>
  hocs.map(hoc => (Component: Story) => hoc(Component)({}))
