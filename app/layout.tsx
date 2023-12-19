import './globals.css'
import NavBar from '../components/navBar/NavBar'
import Footer from '@/components/footer/Footer';

export default function RootLayout({ children }: any) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
