'use client';

import { useState } from 'react';
import NavigationHeader from '../component/NavigationHeader';
import CustomerChart from '../component/chart/CustomerChart';
import SalesChart from '../component/chart/SalesChart';
import CustomerDashboard from '../component/customerDashboard/CustomerDashboard';
import SalesStatistics from '../component/salesStatistics/SalesStatistics';

const HomePage = () => {
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
      <div className="mb-6 flex h-[11rem] gap-5">
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

export default HomePage;
