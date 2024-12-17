'use client';

import NavigationHeader from '../../이전 파일들/features/home/component/NavigationHeader';
import CustomerChart from '../../이전 파일들/features/home/component/chart/CustomerChart';
import SalesChart from '../../이전 파일들/features/home/component/chart/SalesChart';
import CustomerDashboard from '../../이전 파일들/features/home/component/customerDashboard/CustomerDashboard';
// import SalesStatistics from '../../features/home/component/salesStatistics/SalesStatistics';
import { useState } from 'react';
import Body from '@/app/layout/Body';
import { Section } from '@/app/layout';

const HomeScreen = () => {
  const today = new Date();
  const [date, setDate] = useState(today);

  const handlePrevClick = () =>
    setDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));

  const handleNextClick = () =>
    setDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));

  return (
    <Body>
      <Section>
        <NavigationHeader
          date={date}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        />
        <div className="h-[140px] flex gap-5 mt-4">
          <CustomerChart date={date} />
          <SalesChart date={date} />
        </div>
      </Section>
      <Section>
        <CustomerDashboard />
        {/* <CustomerDashboard />
      <SalesStatistics date={date} /> */}
      </Section>
    </Body>
  );
};

export default HomeScreen;
