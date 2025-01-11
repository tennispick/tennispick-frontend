'use client';

import NavigationHeader from '@/features/home/ui/NavigationHeader';
import CustomerChart from '../../features/home/ui/CustomerChart';
import SalesChart from '../../features/home/ui/chart/SalesChart';

// import SalesStatistics from '../../features/home/component/salesStatistics/SalesStatistics';
import { useState } from 'react';
import Body from '@/app/layout/Body';
import { Section } from '@/app/layout';
import { CustomerDashboard } from '@/features/home/ui/customer/CustomerDashboard';

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
      <Section className="pt-0">
        <CustomerDashboard />
        {/* <CustomerDashboard />
      <SalesStatistics date={date} /> */}
      </Section>
    </Body>
  );
};

export default HomeScreen;
