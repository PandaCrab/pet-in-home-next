import '@/styles/globals.scss';
import { Provider } from 'react-redux';

import SiteLayout from '../components/siteLayout.tsx';
import { store } from '@/redux/store';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </Provider>
  );
};
