import {Domain, forward} from 'effector'
import {ApolloClient} from '@apollo/client'
import {createParticipants} from '@eh/features/manage-board-participants/model/patricipants'
import {createSelectedParticipants} from './selected-participants'

export type ManageBoardParticipantsFeature = ReturnType<typeof createManageBoardParticipantsFeature>

export type ManageBoardParticipantsFeatureDeps = {
  domain: Domain
  apollo: ApolloClient<unknown>
}

export const createManageBoardParticipantsFeature = ({
  domain,
  apollo,
}: ManageBoardParticipantsFeatureDeps) => {
  const reset = domain.event()

  const selectedParticipants = createSelectedParticipants({domain})
  const participants = createParticipants({domain, apollo})

  forward({
    from: reset,
    to: [selectedParticipants.reset, participants.reset],
  })

  return {
    participants,
    selectedParticipants,
    reset,
  }
}
