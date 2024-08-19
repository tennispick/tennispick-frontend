import IconButton from '@components/button/IconButton';
import SingleRightArrowIcon from '@icons/single_right_arrow.svg';
import ItemRow from './ItemRow';
import TotalSalesIcon from '@icons/payment/group_total_sales.svg';
import AccountTransferIcon from '@icons/payment/group_atm.svg';
import CardIcon from '@icons/payment/group_credit_card.svg';
import CashIcon from '@icons/payment/group_attach_money.svg';

const SalesStatistics = () => {
  return (
    <div css={{ width: 'calc(35% - 20px)' }}>
      <div
        css={{
          height: '3.75rem',
          padding: '0 0 16px 0',
          fontSize: '1.25rem',
          fontWeight: 600,
          borderBottom: '1px solid var(--grey100)',
        }}
      >
        <IconButton
          size="lg"
          variant="primary"
          iconSrc={SingleRightArrowIcon}
          iconAlt="single-right-arrow"
          iconAlign="left"
          text="매출 통계보기"
          css={{ marginLeft: 'auto' }}
        />
      </div>
      <ul css={{ padding: '24px 0' }}>
        <ItemRow
          icon={TotalSalesIcon}
          title={'전체 매출현황'}
          value={'₩ 1,000,000'}
        />
        <ItemRow
          icon={AccountTransferIcon}
          title={'계좌 이체'}
          value={'₩ 1,000,000'}
        />
        <ItemRow icon={CardIcon} title={'카드 결제'} value={'₩ 1,000,000'} />
        <ItemRow icon={CashIcon} title={'현금 결제'} value={'₩ 1,000,000'} />
      </ul>
    </div>
  );
};

export default SalesStatistics;
