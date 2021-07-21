import 'normalize.css'
import {AppThemeProvider} from '@eh/app/theme'
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

export const decorators = [
  Story => (
    <AppThemeProvider>
      <Story />
    </AppThemeProvider>
  ),
]
