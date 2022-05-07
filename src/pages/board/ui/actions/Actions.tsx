import React from 'react'
import {
  RiAddFill,
  RiHeart3Fill,
  RiHeart3Line,
  RiPushpin2Fill,
  RiPushpinFill,
  RiQrCodeFill,
  RiSettings2Line,
} from 'react-icons/ri'
import {FormattedMessage} from 'react-intl'
import QRCode from 'react-qr-code'
import {useMedia} from 'react-use'
import {Button, Divider, IconButton, Modal as RModal} from 'rsuite'
import {useBooleanState} from 'use-boolean-state'
import {Icon} from '@rsuite/icons'
import {Flex} from '@eh/shared/lib/reflexbox'
import {useLocation} from '@eh/shared/lib/router'
import {BoardFragment, usePermissions} from '@eh/entities/board'
import {useIsAuthenticated} from '@eh/entities/session'
import {useToggleIsFavorite} from '@eh/features/favorite-board'
import {useToggleIsPin} from '@eh/features/pin-board'
import {useToggleSub} from '@eh/features/sub'
import {useIsMyBoard} from '../../model'
import {texts} from './texts'
import S from './Actions.module.scss'

export type ActionsProps = {
  board?: BoardFragment
  onOpenBoardSettings?: () => unknown
  onOpenCreateEvent?: () => unknown
}

export const Actions: React.FC<ActionsProps> = ({
  board,
  onOpenBoardSettings,
  onOpenCreateEvent,
}) => {
  const [isQRCodeOpened, openQRCode, closeQRCode] = useBooleanState(false)

  const {pathname} = useLocation()

  const isAuthenticated = useIsAuthenticated()
  const isMyBoard = useIsMyBoard()

  const {canCreateEvent, canViewSettings} = usePermissions(board)

  const {loading: toggleIsFavoriteLoading, toggle: toggleFavorite} = useToggleIsFavorite(board)
  const {loading: toggleIsPinLoading, toggle: togglePin} = useToggleIsPin(board)

  const {loading: toggleSubLoading, toggle: toggleSub} = useToggleSub({
    boardId: board?._id || '',
    isFollow: !!board?.sub?._id,
  })

  const isTablet = useMedia('(min-width: 768px)')

  return (
    <>
      <div className={S.actions}>
        <Flex gap="1rem">
          <IconButton onClick={openQRCode} size="sm" icon={<Icon as={RiQrCodeFill} />} />

          {!isMyBoard && board?._id && (
            <Button loading={toggleSubLoading} onClick={toggleSub} size="xs" appearance="primary">
              <FormattedMessage {...texts[board.sub?._id ? 'unfollow' : 'follow']} />
            </Button>
          )}
        </Flex>

        {isAuthenticated && (
          <>
            <Divider vertical className={S.divider} />

            <IconButton
              loading={toggleIsFavoriteLoading}
              onClick={toggleFavorite}
              size="sm"
              icon={<Icon as={board?.isFavorite ? RiHeart3Fill : RiHeart3Line} />}
            />

            <IconButton
              loading={toggleIsPinLoading}
              onClick={togglePin}
              size="sm"
              icon={<Icon as={board?.isPin ? RiPushpinFill : RiPushpin2Fill} />}
            />

            {(canCreateEvent || canViewSettings) && <Divider vertical className={S.divider} />}
          </>
        )}
        {canCreateEvent &&
          (isTablet ? (
            <Button size="sm" appearance="primary" onClick={onOpenCreateEvent}>
              <FormattedMessage {...texts.createEvent} />
            </Button>
          ) : (
            <IconButton
              size="sm"
              appearance="primary"
              onClick={onOpenCreateEvent}
              icon={<Icon as={RiAddFill} />}
            />
          ))}
        {canViewSettings &&
          (isTablet ? (
            <Button size="sm" onClick={onOpenBoardSettings}>
              <FormattedMessage {...texts.settings} />
            </Button>
          ) : (
            <IconButton
              size="sm"
              onClick={onOpenBoardSettings}
              icon={<Icon as={RiSettings2Line} />}
            />
          ))}
      </div>

      <RModal size="xs" open={isQRCodeOpened} onClose={closeQRCode} backdrop>
        <RModal.Header>
          <h4 className={S.qrcode}>{board?.title}</h4>
        </RModal.Header>

        <RModal.Body>
          <Flex justifyContent="center">
            <QRCode
              bgColor="var(--rs-body)"
              fgColor="var(--rs-text-primary)"
              value={`${process.env.REACT_APP_URL}${pathname}`}
            />
          </Flex>
        </RModal.Body>
      </RModal>
    </>
  )
}
