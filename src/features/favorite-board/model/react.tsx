import React, {createContext, useContext} from 'react'
import {useAsyncFn} from 'react-use'
import {Hoc, RemoveEffector} from '@eh/shared/types'
import {FavoriteBoardFeature} from './favorite-board'

export const FavoriteBoardFeatureContext = createContext<FavoriteBoardFeature>(
  new Proxy({} as FavoriteBoardFeature, {
    get() {
      throw new Error('Use FavoriteBoardFeatureProvider!')
    },
  }),
)

export type FavoriteBoardFeatureProviderProps = {
  favoriteBoard: FavoriteBoardFeature
}

export const FavoriteBoardFeatureProvider: React.FC<FavoriteBoardFeatureProviderProps> = ({
  children,
  favoriteBoard,
}) => (
  <FavoriteBoardFeatureContext.Provider value={favoriteBoard}>
    {children}
  </FavoriteBoardFeatureContext.Provider>
)

export const withFavoriteBoardFeature =
  (providerProps: FavoriteBoardFeatureProviderProps): Hoc =>
  Component =>
  props =>
    (
      <FavoriteBoardFeatureProvider {...providerProps}>
        <Component {...props} />
      </FavoriteBoardFeatureProvider>
    )

export const useFavoriteBoardFeature = (): FavoriteBoardFeature =>
  useContext(FavoriteBoardFeatureContext)

export const useMarkBoardAsFavorite = () => {
  const {markBoardAsFavoriteFx} = useFavoriteBoardFeature()

  return useAsyncFn<RemoveEffector<typeof markBoardAsFavoriteFx>>(markBoardAsFavoriteFx, [
    markBoardAsFavoriteFx,
  ])
}

export const useUnmarkBoardAsFavorite = () => {
  const {unmarkBoardAsFavoriteFx} = useFavoriteBoardFeature()

  return useAsyncFn<RemoveEffector<typeof unmarkBoardAsFavoriteFx>>(unmarkBoardAsFavoriteFx, [
    unmarkBoardAsFavoriteFx,
  ])
}
