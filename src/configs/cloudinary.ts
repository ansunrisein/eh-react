import {CloudinaryConfig} from '@eh/react/features/shared/contexts/FileUploadContext'

export const cloudinary = {
  url: process.env.REACT_APP_CDN_UPLOAD_URL,
  preset: process.env.REACT_APP_CDN_UPLOAD_PRESET,
} as CloudinaryConfig
