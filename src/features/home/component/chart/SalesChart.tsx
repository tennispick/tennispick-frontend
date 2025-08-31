import Card from './Card';
import { addNumberCommas } from 'src/shared/utils/numberForm';
import { useHomeSalesStatisticsQuery } from '@features/home/query/statisticsQuery';

type Props = {
  date: Date;
};

const SalesChart = ({ date }: Props) => {
  const { isFetching, data } = useHomeSalesStatisticsQuery(date);

  if (isFetching || !data) return null;

  const { currentCustomer, totalSalesPrice } = data;
  const { lastMonth, thisMonth } = currentCustomer;

  const getIncreased = (lastMonth: number, thisMonth: number) => {
    if (lastMonth < thisMonth) return 'Up';
    if (lastMonth > thisMonth) return 'Down';
    return 'NoChange';
  };

  return (
    <div className="w-[calc(35%_-_20px)]">
      <div className="mb-4 text-xl font-semibold">매출 통계</div>
      <div className="flex">
        <Card
          title={'이번 달 매출금액'}
          subTitle={'1개월 전보다'}
          chartType={getIncreased(lastMonth, thisMonth)}
          content={`${addNumberCommas(thisMonth - lastMonth)} 원`}
        />
        <Card
          title={'누적 매출금액'}
          subTitle={'지금까지'}
          chartType={'NoChange'}
          content={`${addNumberCommas(totalSalesPrice.paymentPrice)} 원`}
        />
      </div>
    </div>
  );
};

export default SalesChart;
