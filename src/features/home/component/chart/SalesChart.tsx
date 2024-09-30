import { Flex } from 'styled-system/jsx';
import Card from './Card';
import { css } from 'styled-system/css';

const SalesChart = () => {
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
          chartType={'Up'}
          content={'164명'}
        />
        <Card
          title={'누적 매출금액'}
          subTitle={'지금까지'}
          chartType={'NoChange'}
          content={'999,999,999원'}
        />
      </Flex>
    </div>
  );
};

export default SalesChart;
