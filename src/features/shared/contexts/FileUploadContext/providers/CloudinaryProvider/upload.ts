import {Upload} from '../../types'
import {CloudinaryConfig} from './types'

export const upload = (config: CloudinaryConfig): Upload => file => {
  const body = new FormData()

  body.append('upload_preset', config.preset)
  body.append('file', file)

  return fetch(config.url, {
    method: 'post',
    body,
  })
    .then(response => response.json())
    .then(response => response.secure_url || null)
}
