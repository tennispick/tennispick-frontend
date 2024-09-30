'use client';

import { flex } from 'styled-system/patterns';
import NavigationHeader from '../component/NavigationHeader';
import CustomerChart from '../component/chart/CustomerChart';
import SalesChart from '../component/chart/SalesChart';
import CustomerDashboard from '../component/customerDashboard/CustomerDashboard';
import SalesStatistics from '../component/salesStatistics/SalesStatistics';
import { css } from 'styled-system/css';
import { useState } from 'react';

const HomeScreen = () => {
  const today = new Date();
  const [date, setDate] = useState(today);

  const handlePrevClick = () =>
    setDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));

  const handleNextClick = () =>
    setDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));

  return (
    <div className={css({ height: '100%', overflowY: 'hidden' })}>
      <NavigationHeader
        date={date}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
      <div
        className={flex({
          height: '11rem',
          margin: '0 0 24px 0',
          gap: '20px',
        })}
      >
        <CustomerChart />
        <SalesChart />
      </div>
      <div
        className={flex({
          height: 'calc(100% - 248px)',
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
