import type { AppProps } from 'next/app';
import '@/scripts/wdyr';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
