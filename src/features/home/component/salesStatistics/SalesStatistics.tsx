import IconButton from '@components/button/IconButton';
import SingleRightArrowIcon from '@icons/single_right_arrow.svg';
import ItemRow from './ItemRow';
import TotalSalesIcon from '@icons/payment/group_total_sales.svg';
import AccountTransferIcon from '@icons/payment/group_atm.svg';
import CardIcon from '@icons/payment/group_credit_card.svg';
import CashIcon from '@icons/payment/group_attach_money.svg';
import { css } from 'styled-system/css';
import { addNumberCommas } from '@utils/numberForm';
import { useTotalSalesQuery } from '@features/home/query/statisticsQuery';

type Props = {
  date: Date;
};

const SalesStatistics = ({ date }: Props) => {
  const { isFetching, data } = useTotalSalesQuery(date);

  if (isFetching || !data) return null;

  const [accountTransfer, card, cash, all] = data;

  return (
    <div className={css({ width: 'calc(35% - 20px)' })}>
      <div
        className={css({
          height: '3.75rem',
          padding: '0 0 16px 0',
          fontSize: '1.25rem',
          fontWeight: 600,
          borderBottom: '1px solid var(--grey100)',
        })}
      >
        <IconButton
          size="lg"
          variant="primary"
          iconSrc={SingleRightArrowIcon}
          iconAlt="single-right-arrow"
          iconAlign="right"
          label="매출 통계보기"
          className={css({ marginLeft: 'auto' })}
        />
      </div>
      <ul className={css({ padding: '24px 0' })}>
        <ItemRow
          icon={TotalSalesIcon}
          title={'전체 매출현황'}
          value={`₩ ${addNumberCommas(all.paymentPrice)}(${addNumberCommas(
            all.paymentCount,
          )})`}
        />
        <ItemRow
          icon={AccountTransferIcon}
          title={'계좌 이체'}
          value={`₩ ${addNumberCommas(
            accountTransfer.paymentPrice,
          )}(${addNumberCommas(accountTransfer.paymentCount)})`}
        />
        <ItemRow
          icon={CardIcon}
          title={'카드 결제'}
          value={`₩ ${addNumberCommas(card.paymentPrice)}(${addNumberCommas(
            card.paymentCount,
          )})`}
        />
        <ItemRow
          icon={CashIcon}
          title={'현금 결제'}
          value={`₩ ${addNumberCommas(cash.paymentPrice)}(${addNumberCommas(
            cash.paymentCount,
          )})`}
        />
      </ul>
    </div>
  );
};

export default SalesStatistics;
