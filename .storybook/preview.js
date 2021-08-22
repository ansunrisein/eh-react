import 'normalize.css'
import 'reset-css'
import {withTheme} from '@eh/app/theme'
import '../index.css'

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [Story => withTheme()(Story)()]
