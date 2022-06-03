import {Domain} from 'effector'

export type Modal = ReturnType<typeof createModal>

export type ModalDeps = {
  domain: Domain
}

export const createModal = ({domain}: ModalDeps) => {
  const openModal = domain.event<string>()
  const closeModal = domain.event()

  const $boardId = domain
    .store<string | null>(null)
    .on(openModal, (_, id) => id)
    .reset(closeModal)

  return {
    $boardId,
    openModal,
    closeModal,
  }
}
