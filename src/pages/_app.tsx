import type {AppProps} from 'next/app'
import '../../index.css'
import 'normalize.css'

const MyApp = ({Component, pageProps}: AppProps) => {
  return <Component {...pageProps} />
}
export default MyApp
