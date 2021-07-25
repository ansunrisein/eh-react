export type Color =
  | 'titleActive'
  | 'body'
  | 'label'
  | 'placeholder'
  | 'inputBackground'
  | 'background0'
  | 'background1'
  | 'primary0'
  | 'primary1'
  | 'primary2'
  | 'secondary0'
  | 'secondary1'
  | 'secondary2'
  | 'error0'
  | 'error1'
  | 'error2'
  | 'success0'
  | 'success1'
  | 'success2'
  | 'warning0'
  | 'warning1'
  | 'warning2'
  | 'gradientPrimary'
  | 'gradientSecondary'
  | 'gradientAccent'

export type Theme = {
  colors: Record<Color, string>
}

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
