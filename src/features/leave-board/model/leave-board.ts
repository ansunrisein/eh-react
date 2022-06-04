import {Domain} from 'effector'
import {ApolloClient} from '@apollo/client'
import {
  LeaveBoardDocument,
  LeaveBoardMutation,
  LeaveBoardMutationVariables,
} from '@eh/features/leave-board'

export type LeaveBoardFeature = ReturnType<typeof createLeaveBoardFeature>

export type LeaveBoardFeatureDeps = {
  domain: Domain
  apollo: ApolloClient<unknown>
}

export const createLeaveBoardFeature = ({domain, apollo}: LeaveBoardFeatureDeps) => {
  const leaveBoardFx = domain.effect((variables: LeaveBoardMutationVariables) =>
    apollo
      .mutate<LeaveBoardMutation, LeaveBoardMutationVariables>({
        mutation: LeaveBoardDocument,
        variables,
      })
      .then(result => result.data?.leaveBoard),
  )

  return {
    leaveBoardFx,
  }
}
