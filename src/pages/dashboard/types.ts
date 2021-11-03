import {Board} from '@eh/entities/board'
import {Event} from '@eh/entities/event'

export type BoardWithEvents = Omit<Board, 'events'> & {events: Event[]}
