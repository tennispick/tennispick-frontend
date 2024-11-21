import { useHomeCustomerStatisticsQuery } from 'app/src/entities/home/hooks/customer-statistics';
import Cards from './Cards';

type Props = { date: Date };

const CustomerChart = ({ date }: Props) => {
  console.log("커스터머 차트 호출");
  const { data, isFetching } = useHomeCustomerStatisticsQuery(date);

  console.log(data);

  return (
    <Cards data={data} />
  );
};

export default CustomerChart;
