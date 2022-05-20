import {Domain} from 'effector'

export type CreateSelectedParticipantsDeps = {
  domain: Domain
}

export const createSelectedParticipants = ({domain}: CreateSelectedParticipantsDeps) => {
  const toggle = domain.event<{isSelected: boolean; id: string}>()
  const reset = domain.event()

  const $selectedParticipants = domain
    .store<string[]>([])
    .on(toggle, (selected, payload) =>
      payload.isSelected ? selected.concat(payload.id) : selected.filter(id => id !== payload.id),
    )
    .reset(reset)

  return {
    $selectedParticipants,
    toggle,
    reset,
  }
}
