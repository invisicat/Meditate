import type { NextPage } from 'next';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

import Button from '@/components/button/Button';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';

import clsxm from '../lib/clsxm';

const Home: NextPage = () => {
  const { ref, inView } = useInView();

  return (
    <Layout>
      <SEO />
      <main>
        <section className="bg-white">
          <div className="layout flex min-h-screen flex-col items-center text-center">
            <h1 className="text-7xl leading-normal font-semibold mt-2 ">
              Meditate
            </h1>
            <p className="mt-2 text-lg leading-7 text-gray-800 max-w-md">
              A modern <span className="font-semibold">meditation</span> app for
              you to meditate on your own terms. Track your{' '}
              <span className="font-semibold">progress</span>, and share your
              thoughts with others.
            </p>
            <div ref={ref} className="mt-8">
              <Button className="text-sm leading-5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden rounded-lg group bg-gradient-to-br from-orange-400 to-spray-800 group-hover:from-spray-300 group-hover:to-spray-800 hover:text-white dark:text-white focus:ring-4 focus:ring-spray-300 dark:focus:ring-spray-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Join now
                </span>
              </Button>
              <Button className="text-sm leading-5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden rounded-lg group bg-gradient-to-br from-spray-300 to-spray-800 group-hover:from-spray-300 group-hover:to-spray-800 hover:text-white dark:text-white focus:ring-4 focus:ring-spray-300 dark:focus:ring-spray-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <Link href="/begin">Start meditating</Link>
                </span>
              </Button>
            </div>
          </div>
        </section>
        <section className="bg-white">
          <div
            className={clsxm(
              'layout flex min-h-screen flex-col items-center text-center',
              !inView && 'motion-safe:animate-fadeIn'
            )}
          >
            <h1 className="text-6xl">Relax, take a breather</h1>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
