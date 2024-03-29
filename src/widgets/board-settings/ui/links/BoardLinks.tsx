import React, {useState} from 'react'
import {RiFileCopy2Fill, RiInformationLine, RiSettings2Fill} from 'react-icons/ri'
import {FormattedMessage, useIntl} from 'react-intl'
import {
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  Loader,
  Message,
  toaster,
  Tooltip,
  Whisper,
} from 'rsuite'
import {useBooleanState} from 'use-boolean-state'
import {Icon} from '@rsuite/icons'
import {Flex} from '@eh/shared/lib/reflexbox'
import {Empty, Modal} from '@eh/shared/ui'
import {BoardFragment, usePermissions} from '@eh/entities/board'
import {useBoardLinks} from '@eh/entities/board-link'
import {CreateLinkForm, EditLinkForm} from '@eh/features/update-link'
import {LinkView} from '@eh/widgets/board-settings/ui'
import {useCopyLink} from '../../model'
import {RemoveLinkButton} from '../remove-link-button'
import {texts} from './texts'
import S from './BoardLinks.module.scss'

export type BoardLinksProps = {
  board: BoardFragment
}

export const BoardLinks: React.FC<BoardLinksProps> = ({board}) => {
  const [isCreateOpen, openCreate, closeCreate] = useBooleanState(false)
  const [viewedLinkId, setViewedLinkId] = useState<string | null>(null)
  const [editedLinkId, setEditedLinkId] = useState<string | null>(null)

  const [, copyLink] = useCopyLink()
  const {formatMessage} = useIntl()

  const {canCreateLink, canViewLinks, canUpdateLink} = usePermissions(board)

  const {boardLinks, loading} = useBoardLinks(board._id)

  const handleCopy = (linkToken: string) => () => {
    copyLink({boardId: board._id, linkToken})
    toaster.push(
      <Message type="success" showIcon>
        {formatMessage(texts.linkCopied)}
      </Message>,
      {placement: 'topStart'},
    )
  }

  return (
    <div>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" gap="10px">
          <h5>
            <FormattedMessage {...texts.links} />
          </h5>
          {!!boardLinks?.edges.length && (
            <Whisper
              trigger="hover"
              speaker={
                <Tooltip>
                  <FormattedMessage {...texts.provideLink} />
                </Tooltip>
              }
            >
              <div>
                <Icon as={RiInformationLine} />
              </div>
            </Whisper>
          )}
        </Flex>

        <Button
          onClick={openCreate}
          disabled={!canCreateLink}
          loading={loading}
          appearance="primary"
        >
          <FormattedMessage {...texts.create} />
        </Button>
      </Flex>

      <div className={S.list}>
        {canViewLinks ? (
          loading ? (
            <Loader center size="md" />
          ) : boardLinks?.edges.length ? (
            <div>
              {boardLinks.edges.map(e => (
                <Flex
                  key={e.node._id}
                  justifyContent="space-between"
                  alignItems="center"
                  style={{padding: 5}}
                >
                  <span onClick={() => setViewedLinkId(e.node._id)}>{e.node.name}</span>

                  <ButtonGroup>
                    <IconButton
                      onClick={handleCopy(e.node.link)}
                      icon={<Icon as={RiFileCopy2Fill} />}
                      appearance="ghost"
                      size="sm"
                    />

                    {canUpdateLink && (
                      <IconButton
                        onClick={() => setEditedLinkId(e.node._id)}
                        icon={<Icon as={RiSettings2Fill} />}
                        appearance="ghost"
                        size="sm"
                      />
                    )}
                  </ButtonGroup>
                </Flex>
              ))}
            </div>
          ) : (
            <Empty>
              <FormattedMessage {...texts.provideLink} />
            </Empty>
          )
        ) : (
          <Empty>
            <FormattedMessage {...texts.noAccess} />
          </Empty>
        )}
      </div>

      <Modal open={isCreateOpen} onClose={closeCreate} full>
        <CreateLinkForm boardId={board._id} onCreate={closeCreate} />
      </Modal>

      <Modal open={!!editedLinkId} onClose={() => setEditedLinkId(null)} full>
        {editedLinkId && (
          <div>
            <EditLinkForm linkId={editedLinkId} onEdit={() => setEditedLinkId(null)} />

            <Divider />

            <RemoveLinkButton linkId={editedLinkId} onRemove={() => setEditedLinkId(null)} />
          </div>
        )}
      </Modal>

      <Modal open={!!viewedLinkId} onClose={() => setViewedLinkId(null)} full>
        {viewedLinkId && <LinkView linkId={viewedLinkId} />}
      </Modal>
    </div>
  )
}
