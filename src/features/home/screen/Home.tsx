import Head from 'next/head';
import NavigationHeader from '../component/NavigationHeader';
import CustomerChart from '../component/chart/CustomerChart';
import SalesChart from '../component/chart/SalesChart';
import CustomerList from '../component/CustomerList';
import SalesStatistics from '../component/SalesStatistics';

const HomeScreen = () => {

  return (
    <div css={{ height: '100%', padding: '', overflowY: 'scroll' }}>
      <Head>
        <title>테니스 닥터 - 홈</title>
      </Head>
      <NavigationHeader />
      <div css={{ display: 'flex', height: '150px', margin: '0 0 32px 0', gap: '20px' }}>
        <CustomerChart />
        <SalesChart />
      </div>
      <div css={{ display: 'flex', height: 'calc(100% - 230px)', gap: '20px' }}>
        <CustomerList />
        <SalesStatistics />
      </div>
    </div>
  );
};

export default HomeScreen;
