import '../styles/globals.css';
import CustomCursor from '../components/CustomCursor/CustomCursor';
import Nav from '../components/Navigation/Nav';
import Footer from '../components/Navigation/Footer';
import { Metadata } from 'next';  

export const metadata: Metadata = {
  title: 'Rhys Wood | Web Developer',
  description: "Rhys Wood is a web developer based in the Vancouver, Canada. He specialises in building websites and web applications using modern technologies such as React, Next.js, and TypeScript."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    return (
      <html lang='en'>
          <body>
              <main className='app'>
                <CustomCursor />
                  <Nav />
                    {children}
                  <Footer />
              </main>
          </body>
      </html>
    )
}