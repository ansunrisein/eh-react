import React, {useState} from 'react'
import {FormattedMessage} from 'react-intl'
import {Avatar, Button, ButtonToolbar, Checkbox, Placeholder, Tooltip, Whisper} from 'rsuite'
import {withModuleLocalization} from '@eh/shared/lib/i18n'
import {Empty} from '@eh/shared/ui'
import {BoardFragment} from '@eh/entities/board'
import {DEFAULT_USER_AVATAR} from '@eh/entities/user'
import {useBoardParticipants, useSelectedParticipants} from '../../model'
import {texts} from './texts'
import S from './ParticipantsManager.module.scss'

export type ParticipantsManagerProps = {
  board: BoardFragment
}

export const ParticipantsManager: React.FC<ParticipantsManagerProps> = withModuleLocalization(
  'manage-board-participants-feature',
)(({board}) => {
  const [isSelect, setIsSelect] = useState(false)

  const {selectedParticipants, toggle, reset} = useSelectedParticipants()

  const {
    boardParticipants,
    loading,
    fetchMore,
    moreLoading,
    hasMore,
    removeSelected,
    removeLoading,
  } = useBoardParticipants({
    boardId: board._id,
  })

  const cancel = () => {
    setIsSelect(!isSelect)
    reset()
  }

  const remove = async () => {
    await removeSelected({boardId: board._id, participantIds: selectedParticipants})
    setIsSelect(!isSelect)
  }

  return (
    <div>
      <div className={S.title}>
        <h5>
          <FormattedMessage {...texts.participants} />
        </h5>
        {!!boardParticipants?.edges.length && (
          <ButtonToolbar>
            {isSelect && (
              <Button
                onClick={remove}
                loading={removeLoading}
                appearance="primary"
                color="red"
                size="sm"
                disabled={!selectedParticipants.length}
              >
                <FormattedMessage {...texts.remove} />
              </Button>
            )}
            <Button appearance="link" onClick={cancel} size="sm">
              <FormattedMessage {...texts[isSelect ? 'cancel' : 'select']} />
            </Button>
          </ButtonToolbar>
        )}
      </div>

      <ul className={S.list}>
        {loading ? (
          <Placeholder.Paragraph active rows={3} />
        ) : boardParticipants?.edges.length ? (
          boardParticipants?.edges.map(({node}) => (
            <li key={node._id} className={S.item}>
              {isSelect && (
                <Checkbox onChange={(_, isSelected) => toggle({isSelected, id: node._id})} />
              )}
              <Whisper
                placement="autoVertical"
                trigger={['hover', 'click']}
                speaker={<Tooltip>{node.user.name}</Tooltip>}
              >
                <div className={S.item}>
                  <Avatar src={node.user.avatar || DEFAULT_USER_AVATAR} circle size="sm" />
                  <p className={S.nickname}>{node.user.nickname}</p>
                </div>
              </Whisper>
            </li>
          ))
        ) : (
          <Empty>
            <p className={S.text}>
              <FormattedMessage
                {...texts.canInviteAUser}
                values={{
                  bold: (text: string) => <b>{text}</b>,
                }}
              />
            </p>
          </Empty>
        )}
        {hasMore && (
          <Button onClick={fetchMore} loading={moreLoading} className={S.more} appearance="link">
            <FormattedMessage {...texts.fetchMore} />
          </Button>
        )}
      </ul>
    </div>
  )
})
