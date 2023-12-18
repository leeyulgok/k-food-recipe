import './globals.css'
import NavBar from '../components/NavBar'
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
