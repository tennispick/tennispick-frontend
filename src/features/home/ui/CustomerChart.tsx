'use client';

import { TenSkeleton } from '@/shared/ui';

import Cards from './chart/Cards';
import { useCustomerStatistics } from '@/features/home/api/queries';

type Props = { date: Date };

const CustomerChart = ({ date }: Props) => {
  const { data } = useCustomerStatistics(date);

  if (!data) return <TenSkeleton className="w-full h-full" />;

  return <Cards data={data} />;
};

export default CustomerChart;
