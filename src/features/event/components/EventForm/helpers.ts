import {CreateEventVariables} from '../../graphql/types/CreateEvent'

export const hasContent = (event: Partial<CreateEventVariables>): boolean =>
  ('text' in event && !!event.text) ||
  ('list' in event && !!event.list?.length && event.list.some(e => !!e))
