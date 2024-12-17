import { useHomeCustomerStatisticsQuery } from 'src/entities/home/hooks/customer-statistics';
import Cards from './Cards';
import { Skeleton } from 'src/이전 파일들/components/ui/skeleton';

type Props = { date: Date };

const CustomerChart = ({ date }: Props) => {
  const { data } = useHomeCustomerStatisticsQuery(date);

  if (!data) return <Skeleton className="w-full h-full" />;

  return <Cards data={data} />;
};

export default CustomerChart;
