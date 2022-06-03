import React, {useCallback} from 'react'
import cx from 'classnames'
import {FormattedMessage} from 'react-intl'
import {Button, ButtonToolbar, Loader} from 'rsuite'
import {withModuleLocalization} from '@eh/shared/lib/i18n'
import {Flex} from '@eh/shared/lib/reflexbox'
import {EventCard, EventFragment} from '@eh/entities/event'
import {
  useRemoveTimeExpiredEvents,
  useSelectEvents,
  useTimeExpiredEvents,
  useTimeExpiredEventsGate,
} from '../../model'
import {texts} from './texts'
import S from './SelectEventsList.module.scss'

export const SelectEventsList: React.FC = withModuleLocalization('manage-events-feature')(() => {
  const {timeExpiredEvents, loading} = useTimeExpiredEvents()
  const {selectedEvents, areAllEventsSelected, toggle, selectAll, reset} = useSelectEvents()
  const {removeExpiredEvents, loading: removeLoading} = useRemoveTimeExpiredEvents()

  const handleEventSelect = useCallback((event: EventFragment) => toggle(event._id), [toggle])

  useTimeExpiredEventsGate()

  return (
    <div className={cx('relative', S.panel)}>
      <div className={S.header}>
        <p className={S.title}>
          <FormattedMessage {...texts.timeExpiredEvents} />
        </p>

        <ButtonToolbar>
          {!areAllEventsSelected && (
            <Button onClick={selectAll} appearance="link" size="sm">
              <FormattedMessage {...texts.selectAllEvents} />
            </Button>
          )}
          <Button onClick={reset} disabled={!selectedEvents.length} appearance="primary" size="sm">
            <FormattedMessage {...texts.reset} />
          </Button>
        </ButtonToolbar>
      </div>

      {!!timeExpiredEvents.length && (
        <ul className={S.grid}>
          {timeExpiredEvents.map(event => (
            <li
              key={event._id}
              style={{opacity: selectedEvents.includes(event._id) ? 1 : 0.5}}
              className={S.event}
            >
              <EventCard
                event={event}
                onClick={handleEventSelect}
                showDeadline
                className={S.background}
              />
            </li>
          ))}
        </ul>
      )}

      <Flex justifyContent="flex-end">
        <Button
          onClick={removeExpiredEvents}
          disabled={!selectedEvents.length}
          loading={removeLoading}
          appearance="primary"
          color="red"
        >
          Удалить выбранные ивенты
        </Button>
      </Flex>

      {loading && <Loader size="lg" backdrop />}
    </div>
  )
})
