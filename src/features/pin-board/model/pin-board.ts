import {Domain} from 'effector'
import {ApolloClient} from '@apollo/client'
import {
  MarkBoardAsPinDocument,
  MarkBoardAsPinMutation,
  MarkBoardAsPinMutationVariables,
  UnmarkBoardAsPinDocument,
  UnmarkBoardAsPinMutation,
  UnmarkBoardAsPinMutationVariables,
} from '../api'

export type PinBoardFeature = ReturnType<typeof createPinBoardFeature>

export type PinBoardFeatureDeps = {
  domain: Domain
  apollo: ApolloClient<unknown>
}

export const createPinBoardFeature = ({domain, apollo}: PinBoardFeatureDeps) => {
  const markBoardAsPinFx = domain.effect((variables: MarkBoardAsPinMutationVariables) =>
    apollo
      .mutate<MarkBoardAsPinMutation, MarkBoardAsPinMutationVariables>({
        mutation: MarkBoardAsPinDocument,
        variables,
      })
      .then(result => result?.data?.markBoardAsPin),
  )

  const unmarkBoardAsPinFx = domain.effect((variables: UnmarkBoardAsPinMutationVariables) =>
    apollo
      .mutate<UnmarkBoardAsPinMutation, UnmarkBoardAsPinMutationVariables>({
        mutation: UnmarkBoardAsPinDocument,
        variables,
      })
      .then(result => result?.data?.unmarkBoardAsPin),
  )

  return {
    markBoardAsPinFx,
    unmarkBoardAsPinFx,
  }
}
