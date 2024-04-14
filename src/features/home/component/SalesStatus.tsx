import DashBoardItem from '@components/common/DashBoardItem';
import styled from '@emotion/styled';
import NoResult from '@components/common/NoResult';
import { LessonTotalPaymentData } from '@apis/payment/payment.type';
import { useGetTotalSalesQuery } from '../query/salesQuery';
import { transferPaymentType } from '@features/customer/util/payment';
import { addNumberCommas } from '@utils/numberForm';
import HomeCoachSales from './CoachSales';

const HomeSalesStatus = () => {

  const { data } = useGetTotalSalesQuery();

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  const price = (price: string | null) => price ? addNumberCommas(Number(price)) : '-';

  const totalPaymentPrice = data?.reduce((acc: number, cur: LessonTotalPaymentData) => acc + Number(cur.paymentPrice), 0) ?? 0;
  const totalRefundPrice = data?.reduce((acc: number, cur: LessonTotalPaymentData) => acc + Number(cur.refundPrice), 0) ?? 0;

  return (
    <DashBoardItem
      title={`${year}.${month}.${date} 까지의 매출현황이에요!`}
      width={'calc(65% - 12px)'}
      height={'0'}
      minHeight={'65vh'}
    >
      <div css={{ display: 'flex', justifyContent: 'space-between'}}>
        <div css={{ display: 'flex', fontSize: '0.95rem' }}>
          {data?.length > 0 && data.map(({ type, paymentPrice, refundPrice }: LessonTotalPaymentData) => {
            return(
              <div key={type} css={{ margin: '0 12px 0 0'}}>
                <span css={{ margin: '0 4px 0 0'}}>{transferPaymentType(type)}</span>
                <span>{`: ${price(paymentPrice)} 원`}</span>
                <span css={{ color: 'var(--red100)'}}>{`(${price(refundPrice)})`}</span>
              </div>
            )
          })}
        </div>
        <div>
          <span css={{ fontWeight: 600 }}>{`총 매출금액: ${price(totalPaymentPrice)} 원`}</span>
          <span css={{ color: 'var(--red100)', fontWeight: 600 }}>{`(${price(totalRefundPrice)})`}</span>
        </div>
      </div>
      <HomeCoachSales />
      {/* {data?.length === 0 && <NoResult description={'매출'} />} */}
    </DashBoardItem>
  );
};

export default HomeSalesStatus;
