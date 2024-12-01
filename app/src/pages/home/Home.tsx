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
    <div>
      <div className="bg-white rounded-lg p-6">
        <NavigationHeader
          date={date}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        />
        <div className="h-[140px] flex gap-5 mt-4">
          <CustomerChart date={date} />
          <SalesChart date={date} />
        </div>
      </div>
      <div className="h-[calc(100%-248px)] bg-white p-6 rounded-lg mt-3">
        <CustomerDashboard />
        {/* <CustomerDashboard />
        <SalesStatistics date={date} /> */}
      </div>
    </div>
  );
};

export default HomeScreen;
