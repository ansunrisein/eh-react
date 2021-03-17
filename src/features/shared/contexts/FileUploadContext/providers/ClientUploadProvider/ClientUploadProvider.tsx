import React, {useMemo} from 'react'
import {FileUploadContext} from '../../FileUploadContext'
import {ClientUploadConfig} from './types'
import {upload as createUpload} from './upload'

export type ClientUploadProviderProps = {
  config?: ClientUploadConfig
}

export const ClientUploadProvider: React.FC<ClientUploadProviderProps> = ({config, children}) => {
  const upload = useMemo(() => createUpload(config), [config])

  return <FileUploadContext.Provider value={{upload}}>{children}</FileUploadContext.Provider>
}
