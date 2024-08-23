import { css } from 'styled-system/css';
import Card from './Card';
import { flex } from 'styled-system/patterns';

const CustomerChart = () => {
  return (
    <div className={css({ width: '65%' })}>
      <div
        className={css({
          margin: '0 0 16px 0',
          fontSize: '1.25rem',
          fontWeight: 600,
        })}
      >
        회원 통계
      </div>
      <div className={flex({ overflowX: 'auto' })}>
        <Card
          title={'현재 회원 수'}
          subTitle={'1개월 전보다'}
          chartType={'Up'}
          content={'164명'}
        />
        <Card
          title={'신규 회원 수'}
          subTitle={'1개월 전보다'}
          chartType={'Down'}
          content={'164명'}
        />
        <Card
          title={'만료 회원 수'}
          subTitle={'1개월 전보다'}
          chartType={'Up'}
          content={'164명'}
        />
        <Card
          title={'재등록률'}
          subTitle={'1개월 전보다'}
          chartType={'Up'}
          content={'164명'}
        />
        <Card
          title={'현재 회원 수'}
          subTitle={'신규 회원 수'}
          chartType={'Up'}
          content={'164명'}
        />
      </div>
    </div>
  );
};

export default CustomerChart;
