'use client';

import NavigationHeader from '../component/NavigationHeader';
import CustomerChart from '../component/chart/CustomerChart';
import SalesChart from '../component/chart/SalesChart';
import CustomerDashboard from '../component/customerDashboard/CustomerDashboard';
import SalesStatistics from '../component/salesStatistics/SalesStatistics';
import { useState } from 'react';

const HomeScreen = () => {
  const today = new Date();
  const [date, setDate] = useState(today);

  const handlePrevClick = () =>
    setDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));

  const handleNextClick = () =>
    setDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));

  return (
    <div className="h-full overflow-y-hidden">
      <NavigationHeader
        date={date}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
      <div className="flex h-[11rem] mb-6 gap-5">
        <CustomerChart date={date} />
        <SalesChart date={date} />
      </div>
      <div className="flex h-[calc(100%-248px)] gap-5">
        <CustomerDashboard />
        <SalesStatistics date={date} />
      </div>
    </div>
  );
};

export default HomeScreen;
