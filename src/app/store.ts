import {createDomain} from 'effector'
import {createEventEntity, EventEntityProvider} from '@eh/entities/event'
import {createProviderBuilder} from '@eh/shared/lib/provider-builder'

const domain = createDomain()

const eventEntity = createEventEntity({domain})

export const AppStoreProvider = createProviderBuilder()
  .add(EventEntityProvider, {event: eventEntity})
  .return()
