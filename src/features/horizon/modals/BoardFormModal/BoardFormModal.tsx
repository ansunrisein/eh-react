import React from 'react'
import {Loader, Modal} from 'rsuite'
import {useModal} from '@eh/react/features/shared/contexts/ModalContext'
import {useCreateBoard} from '../../hooks'
import {BoardForm} from '../../components'

export type BoardFormModalProps = {
  show?: boolean
  onHide?: () => void
}

export const BoardFormModal: React.FC<BoardFormModalProps> = ({show, onHide}) => {
  const {isOpened, close} = useModal(BoardFormModal)

  const {create, loading} = useCreateBoard()

  return (
    <Modal show={show ?? isOpened} onHide={onHide || close}>
      <BoardForm onSubmit={create} />
      {loading && <Loader center backdrop size="md" />}
    </Modal>
  )
}
