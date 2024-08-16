import { Divider } from '@components/index';
import PaymentTypeRow from '../PaymentTypeRow';
import SearchPeriodRow from '../SearchPeriodRow';
import Image from 'next/image';
import TotalSalesIcon from '@icons/payment/group_total_sales.svg';
import AccountTransferIcon from '@icons/payment/group_atm.svg';
import CardIcon from '@icons/payment/group_credit_card.svg';
import CashIcon from '@icons/payment/group_attach_money.svg';
import SalesLists from './SalesLists';

const SalesContainer = () => {
  return (
    <>
      <div css={{ height: '8rem' }}>
        <SearchPeriodRow />
        <PaymentTypeRow />
      </div>
      <div css={{ height: '1.25rem' }}>매출 내역조회</div>
      <Divider margin="1rem 0" />
      <div
        css={{
          height: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '0 0 1rem 0',
        }}
      >
        <div css={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Image src={TotalSalesIcon} alt={'total sales'} />
          전체 매출현황
          <span>999,999,999 원</span>
        </div>
        <div css={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div css={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Image src={AccountTransferIcon} alt={'account transfer'} />
            계좌이체
            <span>999,999,999 원</span>
          </div>
          <div css={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Image src={CardIcon} alt={'card'} />
            카드결제
            <span>999,999,999 원</span>
          </div>
          <div css={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
