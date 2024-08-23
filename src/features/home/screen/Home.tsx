import NavigationHeader from '../component/NavigationHeader';
import CustomerChart from '../component/chart/CustomerChart';
import SalesChart from '../component/chart/SalesChart';
import CustomerDashboard from '../component/customerDashboard/CustomerDashboard';
import SalesStatistics from '../component/salesStatistics/SalesStatistics';
import { css } from 'styled-system/css';

const HomeScreen = () => {
  return (
    <div className={css({ height: '100%', overflowY: 'scroll' })}>
      <NavigationHeader />
      <div
        className={css({
          display: 'flex',
          height: '11rem',
          margin: '0 0 24px 0',
          gap: '20px',
        })}
      >
        <CustomerChart />
        <SalesChart />
      </div>
      <div
        className={css({
          display: 'flex',
          height: 'calc(100% - 222px)',
          gap: '20px',
        })}
      >
        <CustomerDashboard />
        <SalesStatistics />
      </div>
    </div>
  );
};

export default HomeScreen;
