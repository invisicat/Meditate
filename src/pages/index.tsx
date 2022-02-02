import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

import Button from '@/components/button/Button';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';

import clsxm from '../lib/clsxm';
import useDarkMode from '@/lib/theme/useDarkMode';

type PredictionResults = {
  icon: string;
  title: string;
  description: string;
  alt?: string;
};

const Results: PredictionResults[] = [
  {
    icon: 'https://picsum.photos/200',
    title: 'Sleep is beneficial',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: 'https://picsum.photos/200',
    title: 'Calm the mind',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: 'https://picsum.photos/200',
    title: 'Make the day better',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const Home: NextPage = () => {
  const { ref, inView } = useInView();
  const [dark, setDark] = useDarkMode();

  return (
    <Layout>
      <SEO />
      <main>
        <section className="transition duration-200 bg-gradient-to-bl from-white to-transparent dark:from-gray-900 dark:to-gray-800">
          <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32 layout flex min-h-screen flex-col items-center text-center">
            <Image
              src="/svg/Meditate.svg"
              alt="Meditate Icon"
              width={196}
              height={196}
            />
            <h1 className="text-7xl leading-normal font-semibold mt-2 dark:text-white">
              Meditate
            </h1>
            <p className="mt-2 text-lg leading-7 text-gray-800 dark:text-white max-w-md">
              A modern <span className="font-semibold">meditation</span> app for
              you to meditate on your own terms. Track your{' '}
              <span className="font-semibold">progress</span>, and share your
              thoughts with others.
            </p>
            <div ref={ref} className="mt-8">
              <Button className="text-sm leading-5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden rounded-lg group bg-gradient-to-br from-orange-400 to-spray-800 group-hover:from-spray-300 group-hover:to-spray-800 hover:text-white dark:text-white focus:ring-4 focus:ring-spray-300 dark:focus:ring-spray-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md dark:text-white group-hover:bg-opacity-0 text-gray-800">
                  Join now
                </span>
              </Button>
              <Link href="/begin" passHref>
                <Button className="text-sm leading-5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden rounded-lg group bg-gradient-to-br from-spray-300 to-spray-800 group-hover:from-spray-300 group-hover:to-spray-800 hover:text-white dark:text-white focus:ring-4 focus:ring-spray-300 dark:focus:ring-spray-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-gray-800 dark:text-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Start meditating
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="min-h-screen flex justify-center bg-white dark:bg-gradient-to-tl dark:from-gray-900 dark:to-gray-800">
          <div
            className={clsxm(
              'grid grid-cols-3 gap-8 transition-all',
              !inView ? 'animate-fadeIn' : 'opacity-0'
            )}
          >
            {Results.map((result, idx) => (
              <PredictedResults result={result} key={idx} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
};

type PredictiedResultsProp = {
  result: PredictionResults;
};

const PredictedResults = ({ result }: PredictiedResultsProp) => (
  <div className="flex flex-col max-w-lg m-4">
    <div className="flex flex-row items-start m-3">
      <Image
        src={result.icon}
        width={112}
        height={112}
        alt={result.alt ?? 'No description provided'}
        className="w-8 h-8 mb-2 rounded-full"
      />
      <h3 className="m-3 text-2xl leading-8 font-semibold text-gray-800 dark:text-white self-center">
        {result.title}
      </h3>
    </div>

    <p className="pl-4 text-lg leading-6 text-gray-600 dark:text-gray-400 max-w-xs">
      {result.description}
    </p>
  </div>
);
export default Home;
