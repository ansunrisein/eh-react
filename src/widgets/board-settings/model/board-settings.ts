import copyToClipboard from 'copy-to-clipboard'
import {Domain} from 'effector'

export type BoardSettingsWidget = ReturnType<typeof createBoardSettingsWidget>

export type BoardSettingsWidgetDeps = {
  domain: Domain
}

export const createBoardSettingsWidget = ({domain}: BoardSettingsWidgetDeps) => {
  const copyLinkFx = domain.effect(({boardId, linkToken}: {boardId: string; linkToken: string}) =>
    copyToClipboard(`${process.env.REACT_APP_URL}/board/${boardId}?linkToken=${linkToken}`),
  )

  return {
    copyLinkFx,
  }
}
