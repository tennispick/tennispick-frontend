'use client';

import { Skeleton } from '@/components/ui/skeleton';
import NavigationHeader from '../../features/home/component/NavigationHeader';
import CustomerChart from '../../features/home/component/chart/CustomerChart';
import SalesChart from '../../features/home/component/chart/SalesChart';
import CustomerDashboard from '../../features/home/component/customerDashboard/CustomerDashboard';
import SalesStatistics from '../../features/home/component/salesStatistics/SalesStatistics';
import { Suspense, useState } from 'react';

const HomeScreen = () => {
  const today = new Date();
  const [date, setDate] = useState(today);

  const handlePrevClick = () =>
    setDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));

  const handleNextClick = () =>
    setDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));

  return (
    <div className="relative h-full">
      <NavigationHeader
        date={date}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
      <div className="flex py-4 mb-6 gap-5 border-b border-[#DEDEDE]">
        <CustomerChart date={date} />
        <SalesChart date={date} />
      </div>
      <div className="flex h-[calc(100%-248px)] gap-5">
        {/* <CustomerDashboard />
        <SalesStatistics date={date} /> */}
      </div>
    </div>
  );
};

export default HomeScreen;
