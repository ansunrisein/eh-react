import {defineMessages} from 'react-intl'
import {EntityName, Permission} from '@eh/shared/api'

export const texts = defineMessages({
  search: {
    id: 'features.update-link.permissions-input.search',
    defaultMessage: 'Search',
  },
})

export const entitiesTexts = defineMessages({
  [EntityName.Event]: {
    id: `features.update-link.permissions-input.entities.event`,
    defaultMessage: 'Event',
  },
  [EntityName.Board]: {
    id: `features.update-link.permissions-input.entities.board`,
    defaultMessage: 'Board',
  },
  [EntityName.BoardLink]: {
    id: `features.update-link.permissions-input.entities.board-link`,
    defaultMessage: 'Board link',
  },
})

export const permissionsTexts = defineMessages({
  [Permission.VIEW_BOARD]: {
    id: `features.update-link.permissions-input.permissions.view-board`,
    defaultMessage: 'View',
  },
  [Permission.UPDATE_BOARD_DESCRIPTION]: {
    id: `features.update-link.permissions-input.permissions.update-board-description`,
    defaultMessage: 'Update description',
  },
  [Permission.UPDATE_BOARD_VISIBILITY]: {
    id: `features.update-link.permissions-input.permissions.update-board-visibility`,
    defaultMessage: 'Update visibility',
  },
  [Permission.REMOVE_BOARD]: {
    id: `features.update-link.permissions-input.permissions.remove-board`,
    defaultMessage: 'Remove',
  },
  [Permission.VIEW_EVENT]: {
    id: `features.update-link.permissions-input.permissions.view-event`,
    defaultMessage: 'View',
  },
  [Permission.CREATE_EVENT]: {
    id: `features.update-link.permissions-input.permissions.create-event`,
    defaultMessage: 'Create',
  },
  [Permission.UPDATE_EVENT]: {
    id: `features.update-link.permissions-input.permissions.update-event`,
    defaultMessage: 'Update',
  },
  [Permission.REMOVE_EVENT]: {
    id: `features.update-link.permissions-input.permissions.remove-event`,
    defaultMessage: 'Remove',
  },
  [Permission.VIEW_BOARD_LINK]: {
    id: `features.update-link.permissions-input.permissions.view-board-link`,
    defaultMessage: 'View',
  },
  [Permission.CREATE_BOARD_LINK]: {
    id: 'features.update-link.permissions-input.permissions.create-board-link',
    defaultMessage: 'Create',
  },
  [Permission.UPDATE_BOARD_LINK]: {
    id: 'features.update-link.permissions-input.permissions.update-board-link',
    defaultMessage: 'Update',
  },
  [Permission.REMOVE_BOARD_LINK]: {
    id: 'features.update-link.permissions-input.permissions.remove-board-link',
    defaultMessage: 'Remove',
  },
})
