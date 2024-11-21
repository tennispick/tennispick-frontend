import { CoachTotalSalesListData } from 'app/src/apis/coach/coach.type';
import { NoResult } from 'app/src/components/index';
import {
  transferCategory,
  transferDiscountType,
  transferPaymentType,
} from 'app/src/features/customer/util/payment';
import { addNumberCommas } from 'app/src/utils/numberForm';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

type Props = {
  data: CoachTotalSalesListData[];
};

const SalesLists = ({ data }: Props) => {
  return (
    <div
      className={css({
        height: 'calc(100% - 14.25rem)',
        borderRadius: '1.25rem',
      })}
    >
      {data.length === 0 ? (
        <NoResult description={'매출내역이 아직 존재하지 않아요.'} />
      ) : (
        <>
          <SalesListsHeader />
          <SalesListsBody data={data} />
        </>
      )}
    </div>
  );
};

const SalesListsHeader = () => {
  return (
    <ul
      role="rowheader"
      className={flex({
        padding: '0 16px',

        '& li': {
          fontSize: '0.875rem',
          fontWeight: 600,
        },
      })}
    >
      <li className={css({ width: '7%' })}>{'이름'}</li>
      <li className={css({ width: '20%' })}>{'상품명'}</li>
      <li className={css({ width: '8%' })}>{'결제유형'}</li>
      <li className={css({ width: '5%' })}>{'유형'}</li>
      <li className={css({ width: '10%' })}>{'결제금액'}</li>
      <li className={css({ width: '10%' })}>{'환불금액'}</li>
      <li className={css({ width: '10%' })}>{'할인유형'}</li>
      <li className={css({ width: '10%' })}>{'할인금액'}</li>
      <li className={css({ width: '10%' })}>{'총 금액'}</li>
      <li className={css({ width: '20%' })}>{'결제날짜'}</li>
    </ul>
  );
};

const SalesListsBody = ({ data }: { data: CoachTotalSalesListData[] }) => {
  return (
    <>
      {data.map(
        ({
          customerLessonId,
          customerName,
          lessonName,
          category,
          type,
          discountPrice,
          discountType,
          totalPrice,
          refundPrice,
          remainPrice,
          createdAt,
        }) => {
          return (
            <ul
              key={customerLessonId}
              role="row"
              className={flex({
                padding: '10px 16px',
                margin: '4px 0 0 0',

                '& li': {
                  fontSize: '0.825rem',
                },

                _hover: {
                  backgroundColor: 'var(--blue1200)',
                  borderRadius: '8px',
                },
              })}
            >
              <li className={css({ width: '7%' })}>{customerName}</li>
              <li className={css({ width: '20%' })}>{lessonName}</li>
              <li className={css({ width: '8%' })}>
                {transferPaymentType(type)}
              </li>
              <li className={css({ width: '5%' })}>
                {transferCategory(category)}
              </li>
              <li className={css({ width: '10%' })}>
                {addNumberCommas(totalPrice)}
              </li>
              <li className={css({ width: '10%' })}>
                {addNumberCommas(refundPrice)}
              </li>
              <li className={css({ width: '10%' })}>
                {transferDiscountType(discountType)}
              </li>
              <li className={css({ width: '10%' })}>
                {addNumberCommas(discountPrice)}
              </li>
              <li className={css({ width: '10%' })}>
                {addNumberCommas(remainPrice)}
              </li>
              <li className={css({ width: '20%' })}>{createdAt}</li>
            </ul>
          );
        },
      )}
    </>
  );
};

export default SalesLists;
