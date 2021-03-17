import delay from 'delay'
import {Upload} from '../../types'
import {ClientUploadConfig} from './types'

export const upload = (config?: ClientUploadConfig): Upload => file =>
  new Promise(resolve => {
    const delayP = delay(config?.delay || 0)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.addEventListener('load', () =>
      delayP.then(() => resolve(reader.result ? String(reader.result) : null)),
    )
  })
