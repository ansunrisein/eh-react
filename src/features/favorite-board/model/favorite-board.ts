import {Domain} from 'effector'
import {ApolloClient} from '@apollo/client'
import {
  MarkBoardAsFavoriteDocument,
  MarkBoardAsFavoriteMutation,
  MarkBoardAsFavoriteMutationVariables,
  UnmarkBoardAsFavoriteDocument,
  UnmarkBoardAsFavoriteMutation,
  UnmarkBoardAsFavoriteMutationVariables,
} from '../api'

export type FavoriteBoardFeature = ReturnType<typeof createFavoriteBoardFeature>

export type FavoriteBoardFeatureDeps = {
  domain: Domain
  apollo: ApolloClient<unknown>
}

export const createFavoriteBoardFeature = ({domain, apollo}: FavoriteBoardFeatureDeps) => {
  const markBoardAsFavoriteFx = domain.effect((variables: MarkBoardAsFavoriteMutationVariables) =>
    apollo
      .mutate<MarkBoardAsFavoriteMutation, MarkBoardAsFavoriteMutationVariables>({
        mutation: MarkBoardAsFavoriteDocument,
        variables,
      })
      .then(result => result?.data?.markBoardAsFavorite),
  )

  const unmarkBoardAsFavoriteFx = domain.effect(
    (variables: UnmarkBoardAsFavoriteMutationVariables) =>
      apollo
        .mutate<UnmarkBoardAsFavoriteMutation, UnmarkBoardAsFavoriteMutationVariables>({
          mutation: UnmarkBoardAsFavoriteDocument,
          variables,
        })
        .then(result => result?.data?.unmarkBoardAsFavorite),
  )

  return {
    markBoardAsFavoriteFx,
    unmarkBoardAsFavoriteFx,
  }
}
