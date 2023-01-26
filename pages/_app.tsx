import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
