import './globals.css'
import NavBar from './components/NavBar'

export default function RootLayout({ children }: any) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
