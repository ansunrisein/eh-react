import {MediaUploadService} from './MediaUploadService'

export type CloudinaryMediaUploadServiceConfig = {
  preset: string
  url: string
}

export class CloudinaryMediaUploadService implements MediaUploadService {
  constructor(private config: CloudinaryMediaUploadServiceConfig) {}

  upload = (file: File) => {
    const body = new FormData()

    body.append('upload_preset', this.config.preset)
    body.append('file', file)

    return fetch(this.config.url, {method: 'post', body})
      .then(r => r.json())
      .then(r => r.secure_url || null)
  }
}
