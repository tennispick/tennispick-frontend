import { useHomeCustomerStatisticsQuery } from 'src/entities/home/hooks/customer-statistics';
import Cards from './Cards';
import { Skeleton } from '@/shared/ui/components/skeleton';

type Props = { date: Date };

const CustomerChart = ({ date }: Props) => {
  const { data } = useHomeCustomerStatisticsQuery(date);

  if (!data) return <Skeleton className="w-full h-full" />;

  return <Cards data={data} />;
};

export default CustomerChart;
