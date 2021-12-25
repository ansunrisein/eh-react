import React, {useState} from 'react'
import {RiFileCopy2Fill, RiInformationLine, RiSettings2Fill} from 'react-icons/ri'
import {useCopyToClipboard} from 'react-use'
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
import {RemoveLinkButton} from '../remove-link-button'
import S from './BoardLinks.module.scss'

const URL = process.env.REACT_APP_URL

export type BoardLinksProps = {
  board: BoardFragment
}

export const BoardLinks: React.FC<BoardLinksProps> = ({board}) => {
  const [isCreateOpen, openCreate, closeCreate] = useBooleanState(false)
  const [editedLinkId, setEditedLinkId] = useState<string | null>(null)

  const [, copy] = useCopyToClipboard()

  const {canCreateLink, canViewLinks, canUpdateLink} = usePermissions(board)

  const {boardLinks, loading} = useBoardLinks(board._id)

  const handleCopy = (link: string) => () => {
    copy(`${URL}/board/${board._id}?linkToken=${link}`)
    toaster.push(
      <Message type="success" showIcon>
        Link is copied
      </Message>,
      {placement: 'topStart'},
    )
  }

  return (
    <div>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" gap="10px">
          <h5>Links</h5>
          {!!boardLinks?.length && (
            <Whisper
              trigger="hover"
              speaker={
                <Tooltip>Links provide you the way to share your board with other people!</Tooltip>
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
          Create
        </Button>
      </Flex>

      <div className={S.list}>
        {canViewLinks ? (
          loading ? (
            <Loader center size="md" />
          ) : boardLinks?.length ? (
            <div>
              {boardLinks.map(link => (
                <Flex
                  key={link._id}
                  justifyContent="space-between"
                  alignItems="center"
                  style={{padding: 5}}
                >
                  <span>{link.name}</span>

                  <ButtonGroup>
                    <IconButton
                      onClick={handleCopy(link.link)}
                      icon={<Icon as={RiFileCopy2Fill} />}
                      appearance="ghost"
                      size="sm"
                    />

                    {canUpdateLink && (
                      <IconButton
                        onClick={() => setEditedLinkId(link._id)}
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
            <Empty>Links provide you the way to share your board with other people!</Empty>
          )
        ) : (
          <Empty>You have no access to view links :(</Empty>
        )}
      </div>

      <Modal open={isCreateOpen} onClose={closeCreate}>
        <CreateLinkForm boardId={board._id} onCreate={closeCreate} />
      </Modal>

      <Modal open={!!editedLinkId} onClose={() => setEditedLinkId(null)}>
        {editedLinkId && (
          <div>
            <EditLinkForm linkId={editedLinkId} onEdit={() => setEditedLinkId(null)} />

            <Divider />

            <RemoveLinkButton linkId={editedLinkId} onRemove={() => setEditedLinkId(null)} />
          </div>
        )}
      </Modal>
    </div>
  )
}
