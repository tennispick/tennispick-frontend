import { Flex } from 'styled-system/jsx';
import Card from './Card';
import { css } from 'styled-system/css';
import { addNumberCommas } from '@utils/numberForm';
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
    <div className={css({ width: 'calc(35% - 20px)' })}>
      <div
        className={css({
          margin: '0 0 16px 0',
          fontSize: '1.25rem',
          fontWeight: 600,
        })}
      >
        매출 통계
      </div>
      <Flex>
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
      </Flex>
    </div>
  );
};

export default SalesChart;
