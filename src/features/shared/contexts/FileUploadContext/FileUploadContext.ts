import {createContext} from 'react'
import {CdnContextValue} from './types'

export const FileUploadContext = createContext<CdnContextValue>({upload: Promise.resolve})
