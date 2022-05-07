import React, {createContext, useContext} from 'react'
import {useAsyncFn} from 'react-use'
import {Hoc, RemoveEffector} from '@eh/shared/types'
import {BoardSettingsWidget} from './board-settings'

export const BoardSettingsWidgetContext = createContext<BoardSettingsWidget>(
  new Proxy({} as BoardSettingsWidget, {
    get() {
      throw new Error('Use BoardSettingsWidgetProvider!')
    },
  }),
)

export type BoardSettingsWidgetProviderProps = {
  boardSettings: BoardSettingsWidget
}

export const BoardSettingsWidgetProvider: React.FC<BoardSettingsWidgetProviderProps> = ({
  children,
  boardSettings,
}) => (
  <BoardSettingsWidgetContext.Provider value={boardSettings}>
    {children}
  </BoardSettingsWidgetContext.Provider>
)

export const withBoardSettingsWidget =
  (providerProps: BoardSettingsWidgetProviderProps): Hoc =>
  Component =>
  props =>
    (
      <BoardSettingsWidgetProvider {...providerProps}>
        <Component {...props} />
      </BoardSettingsWidgetProvider>
    )

export const useBoardSettingsWidget = (): BoardSettingsWidget =>
  useContext(BoardSettingsWidgetContext)

export const useCopyLink = () => {
  const {copyLinkFx} = useBoardSettingsWidget()

  return useAsyncFn<RemoveEffector<typeof copyLinkFx>>(copyLinkFx, [copyLinkFx])
}
