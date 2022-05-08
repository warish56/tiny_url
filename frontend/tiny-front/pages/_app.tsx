import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppLayout } from '../common/layouts/AppLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout {...pageProps}>
      <Component {...pageProps} />
    </AppLayout>
  )
}


export default MyApp
