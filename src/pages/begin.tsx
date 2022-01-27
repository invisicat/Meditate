import getCurrentTime from '@/lib/getCurrentTime';

import Layout from '@/components/layout/Layout';

import SEO from '../components/SEO';

const BeginPage = () => {
  return (
    <Layout>
      <SEO />
      <main>
        <section className="bg-white">
          <div className="layout flex min-h-screen flex-col items-center text-center">
            <h1 className="text-3xl leading-normal font-semibold mt-2 ">
              {getCurrentTime()}
            </h1>
            <p>Thats great that you are here! 🤗 Are you ready to meditate?</p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default BeginPage;
