import '../app/globals.css'
import RootLayout from '../app/layout'
import DataProvider from '../contexts/DataProvider';

function MyApp({ Component, pageProps }: any) {
  return (
    <DataProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </DataProvider>
  )
}

export default MyApp
