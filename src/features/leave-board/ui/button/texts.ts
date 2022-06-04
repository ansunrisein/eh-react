import {defineMessages} from 'react-intl'

export const texts = defineMessages({
  leaveBoard: {
    id: 'features.leave-board.button.leaveBoard',
    defaultMessage: 'Leave board',
  },
  question: {
    id: 'features.leave-board.button.question',
    defaultMessage:
      'Are you sure you want to leave the board with title <highlight>«{name}»</highlight>?',
  },
  leave: {
    id: 'features.leave-board.button.leave',
    defaultMessage: 'Leave',
  },
  cancel: {
    id: 'features.leave-board.button.cancel',
    defaultMessage: 'Cancel',
  },
})
