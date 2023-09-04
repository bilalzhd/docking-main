import Footer from './components/Footer';

import Nav from './components/Nav';
import './globals.css';

export const metadata = {
  title: 'Docking app',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    < >
      <Nav />
      <body>{children}</body>
      <Footer />
    </>
  );
}
