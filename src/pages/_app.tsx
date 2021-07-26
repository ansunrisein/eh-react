import type {AppProps} from 'next/app'
import 'reset-css'
import 'normalize.css'
import '@eh/index.css'

const MyApp = ({Component, pageProps}: AppProps) => {
  return <Component {...pageProps} />
}
export default MyApp
