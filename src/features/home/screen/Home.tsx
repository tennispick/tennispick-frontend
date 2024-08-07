import Head from 'next/head';
import CoachLesson from '@features/home/component/CoachLesson';
import PreDashBoard from '@features/home/component/PreDashBoard';
import SalesStatus from '@features/home/component/SalesStatus';
const HomeScreen = () => {
  return (
    <div css={{ height: '100%', overflowY: 'scroll' }}>
      <Head>
        <title>테니스 닥터 - 홈</title>
      </Head>
      <PreDashBoard />
      <ul css={{ display: 'flex' }}>
        <CoachLesson />
        <SalesStatus />
      </ul>
    </div>
  );
};

export default HomeScreen;