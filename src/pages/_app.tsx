import { AppProps } from 'next/app';
import Link from "next/link";
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import "~/styles/globals.css";
import React from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const scrollPositions = useRef<Record<string, number>>({});

  useEffect(() => {
    // Save scroll position on route change
    const handleRouteChange = (url: string) => {
      scrollPositions.current[url] = window.scrollY;
    };

    // Restore scroll position after route change
    const restoreScrollPosition = (url: string) => {
      const scrollY = scrollPositions.current[url] ?? 0;
      window.scrollTo(0, scrollY);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', restoreScrollPosition);

    // Clean up the event listeners
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', restoreScrollPosition);
    };
  }, [router]);

  return (
    <>
      <div className="w-full -z-10">
        <div className="p-2 bg-[#02007F] flex justify-between fixed w-full z-50">
          <span className="text-white">
            <Link className="text-white no-underline" href="/">🍓 strobi.org</Link>
          </span>
          <div className="flex gap-1">
            <Link href="/wikitemplate">
              <img className="h-6" src="/w.png" alt="W Icon" />
            </Link>
            <img className="h-6" src="/minimize.png" alt="X Icon" />
            <img className="h-6" src="/maximize.png" alt="X Icon" />
            <img className="h-6" src="/x.png" alt="X Icon" />
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={{ opacity: 0, y: 20 }}  // Slightly translate down on enter
          animate={{ opacity: 1, y: 0 }}    // Move to original position
          exit={{ opacity: 0, y: -20 }}      // Slightly translate up on exit
          transition={{ duration: 0.5 }}
          className="flex-grow pb-20"
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>

      <div>

        <footer className="bg-w95 shadow w-full fixed bottom-0 left-0 right-0">

        </footer>
        
        <footer className="bg-w95 shadow w-full fixed bottom-0 left-0 right-0">

          <div className="">
            <hr className='w-full border-2 border-spacing-0 border-w95window' />
          </div>

          <div className="">
            <hr className='w-full border-4 border-spacing-0 border-w95blue' />
          </div>

          <div className="container ml-0 py-0 text-center flex justify-start gap-3 items-center">
          <img className="h-6" src="/start.png" alt="Start Icon" />
            <p className="text-sm sm:text-xs text-black opacity-60">
            Inspired by Windows 9x. Using Tailwind CSS & HTML: <Link className="subtext" href="https://github.com/str0bi/strobi.org">Source Code</Link>
            </p>
          </div>
        </footer>
        
      </div>
    </>
  );
};

export default MyApp;
