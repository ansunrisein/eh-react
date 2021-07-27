import '@emotion/react'
import '@eh/shared/ui'
import {Theme as AppTheme} from '@eh/shared/ui'

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}

declare module '@eh/shared/ui' {
  export enum ThemeKindEnum {
    light,
  }
}
