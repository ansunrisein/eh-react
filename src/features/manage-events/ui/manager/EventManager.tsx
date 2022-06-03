import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Button} from 'rsuite'
import {withModuleLocalization} from '@eh/shared/lib/i18n'
import {Modal} from '@eh/shared/ui'
import {BoardFragment} from '@eh/entities/board'
import {useTimeExpiredEvents, useTimeExpiredEventsModal} from '../../model'
import {SelectEventsList} from '../select-list'
import {texts} from './texts'
import S from './EventManager.module.scss'

export type EventManagerProps = {
  board: BoardFragment
}

export const EventManager: React.FC<EventManagerProps> = withModuleLocalization(
  'manage-events-feature',
)(({board}) => {
  const {isOpen, open, close} = useTimeExpiredEventsModal()

  const {loading} = useTimeExpiredEvents()

  return (
    <div>
      <h5>
        <FormattedMessage {...texts.events} />
      </h5>

      <section>
        <p className={S.timeExpired}>
          <FormattedMessage
            {...texts.removeAllTimeExpiredEvents}
            values={{
              count: board.timeExpiredEventsCount,
              highlight: (text: string) => <span className={S.highlight}>{text}</span>,
            }}
          />
        </p>

        <Button onClick={() => open(board._id)} loading={loading} size="sm">
          <FormattedMessage {...texts.selectEventsForRemoving} />
        </Button>
      </section>

      <Modal open={isOpen} onClose={close} size="lg">
        <SelectEventsList />
      </Modal>
    </div>
  )
})
