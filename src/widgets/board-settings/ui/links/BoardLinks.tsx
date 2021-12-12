import React, {useState} from 'react'
import {RiFileCopy2Fill, RiSettings2Fill} from 'react-icons/ri'
import {useCopyToClipboard} from 'react-use'
import {Button, ButtonGroup, Divider, IconButton, Loader, Message, toaster} from 'rsuite'
import {useBooleanState} from 'use-boolean-state'
import {Icon} from '@rsuite/icons'
import {Flex} from '@eh/shared/lib/reflexbox'
import {Empty, Modal} from '@eh/shared/ui'
import {useBoardLinks} from '@eh/entities/board-link'
import {CreateLinkForm, EditLinkForm} from '@eh/features/update-link'
import {RemoveLinkButton} from '../remove-link-button'
import S from './BoardLinks.module.scss'

const URL = process.env.REACT_APP_URL

export type BoardLinksProps = {
  boardId: string
}

export const BoardLinks: React.FC<BoardLinksProps> = ({boardId}) => {
  const [isCreateOpen, openCreate, closeCreate] = useBooleanState(false)
  const [editedLinkId, setEditedLinkId] = useState<string | null>(null)

  const [, copy] = useCopyToClipboard()

  const {boardLinks, loading} = useBoardLinks(boardId)

  const handleCopy = (link: string) => () => {
    copy(`${URL}/board/${boardId}?link=${link}`)
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
        <h5>Links</h5>

        <Button onClick={openCreate} loading={loading} appearance="primary">
          Create
        </Button>
      </Flex>

      <div className={S.list}>
        {loading ? (
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

                  <IconButton
                    onClick={() => setEditedLinkId(link._id)}
                    icon={<Icon as={RiSettings2Fill} />}
                    appearance="ghost"
                    size="sm"
                  />
                </ButtonGroup>
              </Flex>
            ))}
          </div>
        ) : (
          <Empty>Links provide you the way to share your board with other people!</Empty>
        )}
      </div>

      <Modal open={isCreateOpen} onClose={closeCreate}>
        <CreateLinkForm boardId={boardId} onCreate={closeCreate} />
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
