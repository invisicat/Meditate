import useMeditationStore from '@/lib/atoms/formAtom';

import Layout from '@/components/layout/Layout';
import MBreathe from '@/components/meditation/stages/MBreathe';

const MeditatePage = () => {
  const meditationData = useMeditationStore();
  return (
    <Layout>
      <div className="bg-gradient-to-r from-green-300 to-purple-400">
        <MBreathe />
      </div>
    </Layout>
  );
};

export default MeditatePage;
