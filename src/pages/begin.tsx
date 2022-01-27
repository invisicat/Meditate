import { motion } from 'framer-motion';

import getCurrentTime from '@/lib/getCurrentTime';

import Button from '@/components/button/Button';
import Layout from '@/components/layout/Layout';

import SEO from '../components/SEO';
import { atom, useAtom } from 'jotai';
import { atomWithToggle } from '@/lib/atoms/atomWithToggle';
import { setTimeout } from 'timers/promises';

const variant = {
  hidden: {
    opacity: 0,
    scale: 0.3,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.8,
    },
  },
};

const BeginPage = () => {
  return (
    <Layout>
      <SEO />
      <main>
        <motion.section
          initial="hidden"
          animate="visible"
          variants={variant}
          className="bg-white"
        >
          <div className="layout flex min-h-screen flex-col items-center text-center">
            <div className="shadow-2xl flex flex-col m-8 p-3 justify-between rounded-md">
              <div className="flex flex-col justify-center">
                <h1 className="text-4xl leading-normal font-semibold mt-2 ">
                  {getCurrentTime()}
                </h1>
                <p>
                  Thats great that you are here! 🤗 Are you ready to meditate?
                </p>
              </div>
              <div className="flex flex-col text-gray-800 my-3 py-2">
                <Button className="my-2" variant="dark">
                  Yes
                </Button>
                <Button className="my-2" variant="dark">
                  No
                </Button>
                <Button className="my-2" variant="dark">
                  Maybe
                </Button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </Layout>
  );
};

export default BeginPage;
