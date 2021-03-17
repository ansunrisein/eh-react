import React, {useMemo} from 'react'
import {FileUploadContext} from '../../FileUploadContext'
import {CloudinaryConfig} from './types'
import {upload as createUpload} from './upload'

export type CloudinaryProviderProps = {
  config: CloudinaryConfig
}

export const CloudinaryProvider: React.FC<CloudinaryProviderProps> = ({config, children}) => {
  const upload = useMemo(() => createUpload(config), [config])

  return <FileUploadContext.Provider value={{upload}}>{children}</FileUploadContext.Provider>
}
