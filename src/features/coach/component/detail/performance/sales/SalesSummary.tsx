import Image from 'next/image';
import { flex } from 'styled-system/patterns';
import TotalSalesIcon from '@icons/payment/group_total_sales.svg';
import AccountTransferIcon from '@icons/payment/group_atm.svg';
import CardIcon from '@icons/payment/group_credit_card.svg';
import CashIcon from '@icons/payment/group_attach_money.svg';
import { addNumberCommas } from '@utils/numberForm';

type Props = {
  totalSales?: number;
  accountTransfer?: number;
  card?: number;
  cash?: number;
};

const SalesSummary = ({
  totalSales = 0,
  accountTransfer = 0,
  card = 0,
  cash = 0,
}: Props) => {
  return (
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
        <span>{addNumberCommas(totalSales)} 원</span>
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
          <span>{addNumberCommas(accountTransfer)} 원</span>
        </div>
        <div
          className={flex({
            alignItems: 'center',
            gap: '0.5rem',
          })}
        >
          <Image src={CardIcon} alt={'card'} />
          카드결제
          <span>{addNumberCommas(card)} 원</span>
        </div>
        <div
          className={flex({
            alignItems: 'center',
            gap: '0.5rem',
          })}
        >
          <Image src={CashIcon} alt={'cash'} />
          현금결제
          <span>{addNumberCommas(cash)} 원</span>
        </div>
      </div>
    </div>
  );
};

export default SalesSummary;
