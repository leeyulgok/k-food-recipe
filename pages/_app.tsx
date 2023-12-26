import '../app/globals.css'
import RootLayout from '../app/layout'
import DataProvider from '../contexts/DataProvider';
import Head from 'next/head';

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>How to Make K-Food?</title>
      </Head>
      <DataProvider>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </DataProvider>
    </>
  )
}

export default MyApp
