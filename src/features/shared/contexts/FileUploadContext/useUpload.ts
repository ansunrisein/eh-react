import {useContext} from 'react'
import {FileUploadContext} from './FileUploadContext'
import {Upload} from './types'

export const useUpload = (): Upload => useContext(FileUploadContext).upload
