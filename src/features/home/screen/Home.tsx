import Head from 'next/head';
import NavigationHeader from '../component/NavigationHeader';
import CustomerChart from '../component/chart/CustomerChart';
import SalesChart from '../component/chart/SalesChart';
import CustomerDashboard from '../component/customerDashboard/CustomerDashboard';
import SalesStatistics from '../component/salesStatistics/SalesStatistics';

const HomeScreen = () => {

  return (
    <div css={{ height: '100%', padding: '', overflowY: 'scroll' }}>
      <Head>
        <title>테니스 닥터 - 홈</title>
      </Head>
      <NavigationHeader />
      <div css={{ display: 'flex', height: '150px', margin: '0 0 24px 0', gap: '20px' }}>
        <CustomerChart />
        <SalesChart />
      </div>
      <div css={{ display: 'flex', height: 'calc(100% - 222px)', gap: '20px' }}>
        <CustomerDashboard />
        <SalesStatistics />
      </div>
    </div>
  );
};

export default HomeScreen;
