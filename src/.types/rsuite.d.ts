import {UploaderProps} from 'rsuite'

declare module 'rsuite' {
  export type FileType = UploaderProps['onChange'] extends infer T | undefined
    ? T extends (files: Array<infer F>) => any
      ? F
      : never
    : never
}
