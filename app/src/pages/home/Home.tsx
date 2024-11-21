'use client';

import { Skeleton } from 'app/src/components/ui/skeleton';
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

  console.log("home 호출");

  return (
    <div className="relative h-full">
      <NavigationHeader
        date={date}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
      <div className="flex h-44 mb-6 gap-5">
        <Suspense fallback={<Skeleton className="w-full h-full" />}>
          <CustomerChart date={date} />
        </Suspense>
        {/* <SalesChart date={date} /> */}
      </div>
      <div
        className="flex h-[calc(100%-248px)] gap-5"
      >
        {/* <CustomerDashboard />
        <SalesStatistics date={date} /> */}
      </div>
    </div>
  );
};

export default HomeScreen;
