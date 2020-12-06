import {EventFragment} from '@eh/react/features/shared/graphql/types/EventFragment'

export const hasContent = (event: EventFragment): boolean =>
  ('text' in event && !!event.text) ||
  ('list' in event && !!event.list?.length && event.list.some(e => !!e))
