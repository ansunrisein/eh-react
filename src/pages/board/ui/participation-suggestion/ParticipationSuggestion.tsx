import React from 'react'
import {Button, ButtonToolbar} from 'rsuite'
import {Modal} from '@eh/shared/ui'
import {useSuggestionActions} from '@eh/entities/board-link'
import S from './ParticipationSuggestion.module.scss'

export const ParticipationSuggestion: React.FC = () => {
  const {
    accept: [{loading: acceptLoading}, accept],
    decline: [{loading: declineLoading}, decline],
  } = useSuggestionActions()

  return (
    <Modal open size="sm">
      <section className={S.flex}>
        <p className={S.title}>Accept suggestion</p>
        <p className={S.content}>
          You have been granted access to the board with rights []. Would you like to become a
          member of this board?
        </p>

        <ButtonToolbar className={S.actions}>
          <Button onClick={accept} loading={acceptLoading} appearance="primary">
            Accept
          </Button>
          <Button onClick={decline} loading={declineLoading}>
            Decline
          </Button>
        </ButtonToolbar>
      </section>
    </Modal>
  )
}
