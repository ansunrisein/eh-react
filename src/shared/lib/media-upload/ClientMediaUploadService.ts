import delay from 'delay'
import {MediaUploadService} from './MediaUploadService'

export type ClientMediaUploadServiceConfig = {
  delay: number
}

export class ClientMediaUploadService implements MediaUploadService {
  constructor(private config: ClientMediaUploadServiceConfig) {}

  upload = (file: File): Promise<string | null> =>
    new Promise(resolve => {
      const delayP = delay(this.config?.delay || 0)
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.addEventListener('load', () =>
        delayP.then(() => resolve(reader.result ? String(reader.result) : null)),
      )
    })
}
