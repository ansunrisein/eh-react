import React, {useCallback} from 'react'
import {FormattedMessage} from 'react-intl'
import {Button, ButtonProps} from 'rsuite'
import {useBooleanState} from 'use-boolean-state'
import {Board} from '@eh/shared/api'
import {withModuleLocalization} from '@eh/shared/lib/i18n'
import {Link} from '@eh/shared/lib/router'
import {DialogModal} from '@eh/shared/ui'
import {useLeaveBoard} from '../../model'
import {texts} from './texts'
import S from './LeaveBoardButton.module.scss'

export type LeaveBoardButtonProps = {
  board: Pick<Board, '_id' | 'title'>
  onLeaveBoard?: () => void
} & ButtonProps

export const LeaveBoardButton: React.FC<LeaveBoardButtonProps> = withModuleLocalization(
  'leave-board-feature',
)(({board, onLeaveBoard, ...props}) => {
  const [isOpen, open, close] = useBooleanState(false)

  const {leave, loading} = useLeaveBoard()

  const handleAccept = useCallback(() => {
    leave({boardId: board._id})
    onLeaveBoard?.()
    close()
  }, [board._id, close, leave, onLeaveBoard])

  return (
    <>
      <Button size="sm" {...props} onClick={open} disabled={loading} loading={loading}>
        <FormattedMessage {...texts.leaveBoard} />
      </Button>

      <DialogModal
        open={isOpen}
        onClose={close}
        onAccept={handleAccept}
        onDecline={close}
        question={
          <FormattedMessage
            {...texts.question}
            values={{
              name: board.title,
              highlight: (name: string) => (
                <Link to={`/board/${board._id}`} className={S.title}>
                  {name}
                </Link>
              ),
            }}
          />
        }
        accept={<FormattedMessage {...texts.leave} />}
        decline={<FormattedMessage {...texts.cancel} />}
        acceptButtonProps={{color: 'red'}}
      />
    </>
  )
})
