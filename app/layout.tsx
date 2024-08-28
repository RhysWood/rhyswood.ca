'use client';
import '../styles/globals.css';
import CustomCursor from '../components/CustomCursor/CustomCursor';
import MobileNav from '../components/Navigation/MobileNav';
import Nav from '../components/Navigation/Nav';
import Footer from '../components/Navigation/Footer';
import { ReactLenis } from 'lenis/react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5, // Slightly longer duration for smoother scrolling
      easing: (t) => t * (2 - t), // Easing function (easeOutQuad)
    });
  

    lenis.on('scroll', ScrollTrigger.update);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.off('scroll', ScrollTrigger.update);
    };
  }, []);

  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <ReactLenis root autoRaf={true}>
          <main className='app'>
            <CustomCursor />
            <div className="md:hidden">
              <MobileNav />
            </div>
            <div className="hidden md:block">
              <Nav />
            </div>
            {children}
            <Footer />
          </main>
        </ReactLenis>
      </body>
    </html>
  );
}