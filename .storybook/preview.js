import '../src/index.css'
import 'rsuite/dist/rsuite.min.css'
import {AppThemeProvider} from '../src/app/theme'

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
