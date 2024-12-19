import { Flex } from 'styled-system/jsx';
import Card from './Card';
import { css } from 'styled-system/css';
import { addNumberCommas } from 'src/이전 파일들/utils/numberForm';
import { useHomeSalesStatisticsQuery } from 'src/entities/home/hooks/customer-statistics';
import { Skeleton } from '@/shared/ui/components/skeleton';

type Props = {
  date: Date;
};

const SalesChart = ({ date }: Props) => {
  const { data } = useHomeSalesStatisticsQuery(date);

  if (!data) return <Skeleton className="w-full h-full" />;

  const { currentCustomer, totalSalesPrice } = data;
  const { lastMonth, thisMonth } = currentCustomer;

  const getIncreased = (lastMonth: number, thisMonth: number) => {
    if (lastMonth < thisMonth) return 'Up';
    if (lastMonth > thisMonth) return 'Down';
    return 'NoChange';
  };

  return (
    <div>
      <div className="text-xl font-semibold">매출 통계</div>
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
