import {CloudinaryMediaUploadService} from '@eh/shared/lib/media-upload'

export const cloudinary = new CloudinaryMediaUploadService({
  url: process.env.REACT_APP_CDN_UPLOAD_URL as string,
  preset: process.env.REACT_APP_CDN_UPLOAD_PRESET as string,
})
