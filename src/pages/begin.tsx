import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { FormsList } from '@/lib/Forms';

import FormWrap from '@/components/forms/FormWrapper';
import Layout from '@/components/layout/Layout';

import SEO from '../components/SEO';

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
  const [current, setCurrent] = useState(0);
  const [form, setForm] = useState(FormsList[current]);

  const handleNext = () => {
    setCurrent((c) => {
      if (c >= FormsList.length - 1) return c;

      return ++c;
    });
  };

  const handlePrev = () => {
    setCurrent((c) => {
      if (c <= 0) return c;

      return --c;
    });
  };

  useEffect(() => {
    setForm(FormsList[current]);
  }, [current]);

  return (
    <Layout>
      <SEO />
      <main>
        <motion.section
          initial="hidden"
          transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
          animate="visible"
          variants={variant}
          className="bg-white dark:bg-slate-900"
        >
          <div className="pt-14 layout flex min-h-screen flex-col items-center text-center">
            <FormWrap>
              <form.component continue={handleNext} back={handlePrev} />
            </FormWrap>
          </div>
        </motion.section>
      </main>
    </Layout>
  );
};

export default BeginPage;
