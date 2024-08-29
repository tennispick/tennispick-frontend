import { Divider } from '@components/index';
import PaymentTypeRow from '../PaymentTypeRow';
import SearchPeriodRow from '../SearchPeriodRow';
import Image from 'next/image';
import TotalSalesIcon from '@icons/payment/group_total_sales.svg';
import AccountTransferIcon from '@icons/payment/group_atm.svg';
import CardIcon from '@icons/payment/group_credit_card.svg';
import CashIcon from '@icons/payment/group_attach_money.svg';
import SalesLists from './SalesLists';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

const SalesContainer = () => {
  return (
    <>
      <div className={css({ height: '8rem ' })}>
        <SearchPeriodRow />
        <PaymentTypeRow />
      </div>
      <div className={css({ height: '1.25rem ' })}>매출 내역조회</div>
      <Divider margin="1rem 0" />
      <div
        className={flex({
          height: '2rem',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '0 0 1rem 0',
        })}
      >
        <div
          className={flex({
            alignItems: 'center',
            gap: '0.5rem',
          })}
        >
          <Image src={TotalSalesIcon} alt={'total sales'} />
          전체 매출현황
          <span>999,999,999 원</span>
        </div>
        <div
          className={flex({
            alignItems: 'center',
            gap: '1rem',
          })}
        >
          <div
            className={flex({
              alignItems: 'center',
              gap: '0.5rem',
            })}
          >
            <Image src={AccountTransferIcon} alt={'account transfer'} />
            계좌이체
            <span>999,999,999 원</span>
          </div>
          <div
            className={flex({
              alignItems: 'center',
              gap: '0.5rem',
            })}
          >
            <Image src={CardIcon} alt={'card'} />
            카드결제
            <span>999,999,999 원</span>
          </div>
          <div
            className={flex({
              alignItems: 'center',
              gap: '0.5rem',
            })}
          >
            <Image src={CashIcon} alt={'cash'} />
            현금결제
            <span>999,999,999 원</span>
          </div>
        </div>
      </div>
      <SalesLists />
    </>
  );
};

export default SalesContainer;
