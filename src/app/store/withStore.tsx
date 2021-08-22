import React from 'react'
import {fork, Domain, withHydrate} from 'effector-next'
import {Provider} from 'effector-react/ssr'
import {createEventEntity, EventEntityProvider} from '@eh/entities/event'

const event = createEventEntity()

export const withStore = (domain: Domain) => {
  const scope = fork(domain)

  return <C extends React.ComponentType<any>>(Component: C) =>
    withHydrate()((props: React.ComponentProps<C>) => (
      <Provider value={scope}>
        <EventEntityProvider event={event}>
          <Component {...props} />
        </EventEntityProvider>
      </Provider>
    ))
}
