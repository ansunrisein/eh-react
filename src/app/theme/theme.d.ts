import '@emotion/react'
import '@eh/shared/lib/theme'
import {Theme as AppTheme} from '@eh/ui'

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}

declare module '@eh/shared/lib/theme' {
  export enum ThemeKindEnum {
    light,
  }
}
