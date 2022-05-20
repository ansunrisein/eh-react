import React, {createContext, useCallback, useContext, useEffect} from 'react'
import {useStore} from 'effector-react'
import {Hoc, RemoveEffector} from '@eh/shared/types'
import {ManageBoardParticipantsFeature} from './manage-board-participants'

export const ManageBoardParticipantsFeatureContext = createContext<ManageBoardParticipantsFeature>(
  new Proxy({} as ManageBoardParticipantsFeature, {
    get() {
      throw new Error('Use ManageBoardParticipantsFeatureProvider!')
    },
  }),
)

export type ManageBoardParticipantsFeatureProviderProps = {
  manageBoardParticipants: ManageBoardParticipantsFeature
}

export const ManageBoardParticipantsFeatureProvider: React.FC<ManageBoardParticipantsFeatureProviderProps> =
  ({children, manageBoardParticipants}) => (
    <ManageBoardParticipantsFeatureContext.Provider value={manageBoardParticipants}>
      {children}
    </ManageBoardParticipantsFeatureContext.Provider>
  )

export const withManageBoardParticipantsFeature =
  (providerProps: ManageBoardParticipantsFeatureProviderProps): Hoc =>
  Component =>
  props =>
    (
      <ManageBoardParticipantsFeatureProvider {...providerProps}>
        <Component {...props} />
      </ManageBoardParticipantsFeatureProvider>
    )

export const useManageBoardParticipantsFeature = (): ManageBoardParticipantsFeature =>
  useContext(ManageBoardParticipantsFeatureContext)

export type UseBoardParticipantsProps = {
  boardId: string
  participantsPerPage?: number
}

export const useBoardParticipants = ({
  boardId,
  participantsPerPage = 25,
}: UseBoardParticipantsProps) => {
  const {
    participants: {
      $boardParticipants,
      fetchBoardParticipantsFx,
      fetchMoreBoardParticipantsFx,
      removeBoardParticipantsFx,
    },
    reset,
  } = useManageBoardParticipantsFeature()

  const boardParticipants = useStore($boardParticipants)
  const loading = useStore(fetchBoardParticipantsFx.pending)
  const moreLoading = useStore(fetchMoreBoardParticipantsFx.pending)
  const removeLoading = useStore(removeBoardParticipantsFx.pending)

  const fetchMore = useCallback(
    () => fetchMoreBoardParticipantsFx(),
    [fetchMoreBoardParticipantsFx],
  )

  const pageInfo = boardParticipants?.pageInfo

  useEffect(() => {
    fetchBoardParticipantsFx({
      boardId,
      page: {
        first: participantsPerPage,
      },
    })

    return reset
  }, [boardId, fetchBoardParticipantsFx, participantsPerPage, reset])

  return {
    boardParticipants: boardParticipants || undefined,
    fetchMore,
    hasMore: !!pageInfo?.hasNextPage,
    loading,
    moreLoading,
    removeSelected: removeBoardParticipantsFx as RemoveEffector<typeof removeBoardParticipantsFx>,
    removeLoading,
  }
}

export const useSelectedParticipants = () => {
  const {
    selectedParticipants: {$selectedParticipants, toggle, reset},
  } = useManageBoardParticipantsFeature()

  return {
    selectedParticipants: useStore($selectedParticipants),
    toggle: toggle as RemoveEffector<typeof toggle>,
    reset,
  }
}
