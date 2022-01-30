import { motion } from 'framer-motion';

import getCurrentTime from '@/lib/getCurrentTime';

import Button from '@/components/button/Button';
import Layout from '@/components/layout/Layout';

import SEO from '../components/SEO';
import FormWrap from '@/components/forms/FormWrapper';
import Start from '@/components/forms/start/Start';
import { FormItem, FormsList } from '@/lib/Forms';
import { atom, useAtom } from 'jotai';
import { useEffect, useState } from 'react';

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
  const [form, setForm] = useState(FormsList[0]);

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((c) => {
      if (c >= FormsList.length - 1) return c;

      return ++c;
    });

    setForm(FormsList[current]);
  };

  return (
    <Layout>
      <SEO />
      <main>
        <motion.section
          initial="hidden"
          transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
          animate="visible"
          variants={variant}
          className="bg-white"
        >
          <div className="layout flex min-h-screen flex-col items-center text-center">
            <FormWrap>
              <form.component continue={handleNext} />
            </FormWrap>
          </div>
        </motion.section>
      </main>
    </Layout>
  );
};

export default BeginPage;
