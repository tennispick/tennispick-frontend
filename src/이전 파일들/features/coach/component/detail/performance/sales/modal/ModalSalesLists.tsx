import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import SalesSummary from '../SalesSummary';
import {
  useCoachTotalSalesListQuery,
  useCoachTotalSalesQuery,
} from '@/이전 파일들/features/coach/query/coachQuery';
import { SearchConditionType } from '@/이전 파일들/features/coach/data/salesModalData';
import { getDateToKoreanString } from 'src/이전 파일들/utils/date';
import { CoachTotalSalesListData } from 'src/이전 파일들/apis/coach/coach.type';
import Loading from 'src/이전 파일들/components/common/Loading';
import {
  transferCategory,
  transferDiscountType,
  transferPaymentType,
} from '@/이전 파일들/features/customer/util/payment';
import { addNumberCommas } from 'src/이전 파일들/utils/numberForm';
import { NoResult } from 'src/이전 파일들/components/index';
import { styled } from 'styled-system/jsx';

type Props = {
  checkedItem: string;
  coachId: string;
  startDate: Date;
  endDate: Date;
  searchCondition: SearchConditionType;
  keyword: string;
};

const ModalSalesLists = ({
  checkedItem,
  coachId,
  startDate,
  endDate,
  searchCondition,
  keyword,
}: Props) => {
  const { isFetching: totalSalesDataFetching, data: totalSalesData } =
    useCoachTotalSalesQuery({
      page: 1,
      coachId,
      checkedItem,
      startDate: getDateToKoreanString(startDate),
      endDate: getDateToKoreanString(endDate),
      searchCondition,
      keyword,
      paymentType: 'all',
    });

  // TODO Infinite Scroll TEST
  const { isFetching: totalSalesFetching, data: totalSalesList } =
    useCoachTotalSalesListQuery({
      page: 1,
      coachId,
      checkedItem,
      startDate: getDateToKoreanString(startDate),
      endDate: getDateToKoreanString(endDate),
      searchCondition,
      keyword,
      paymentType: 'all',
    });

  const isFetchSalesData = totalSalesDataFetching || !totalSalesData;
  const isFetchSalesList = totalSalesFetching || !totalSalesList;

  if (isFetchSalesList || isFetchSalesData) return <Loading />;

  return (
    <>
      <SalesSummary data={totalSalesData[0]} />
      <div
        className={css({
          height: 'calc(100% - (128px + 3rem))',
          borderTop: '1px solid var(--grey100)',
          padding: '0.825rem 0',
        })}
      >
        <SalesListsHeader />
        <SalesLists data={totalSalesList.pages} />
      </div>
    </>
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
      <li className={css({ width: '5%' })}>{'이름'}</li>
      <li className={css({ width: '10%' })}>{'연락처'}</li>
      <li className={css({ width: '14%' })}>{'상품명'}</li>
      <li className={css({ width: '8%' })}>{'결제유형'}</li>
      <li className={css({ width: '3%' })}>{'유형'}</li>
      <li className={css({ width: '10%' })}>{'결제금액'}</li>
      <li className={css({ width: '10%' })}>{'환불금액'}</li>
      <li className={css({ width: '10%' })}>{'할인유형'}</li>
      <li className={css({ width: '10%' })}>{'할인금액'}</li>
      <li className={css({ width: '10%' })}>{'총 금액'}</li>
      <li className={css({ width: '15%' })}>{'결제날짜'}</li>
      <li className={css({ width: '10%' })}>{'환불날짜'}</li>
    </ul>
  );
};

const SalesLists = ({ data }: { data: CoachTotalSalesListData[] }) => {
  if (data.length === 0)
    return (
      <NoResultContainer>
        <NoResult description={'데이터가 없어요.'} />
      </NoResultContainer>
    );

  return (
    <>
      {data.map(
        ({
          customerLessonId,
          customerName,
          customerPhone,
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
              <li className={css({ width: '5%' })}>{customerName}</li>
              <li className={css({ width: '10%' })}>{customerPhone}</li>
              <li className={css({ width: '14%' })}>{lessonName}</li>
              <li className={css({ width: '8%' })}>
                {transferPaymentType(type)}
              </li>
              <li className={css({ width: '3%' })}>
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
              <li className={css({ width: '15%' })}>{createdAt}</li>
              <li className={css({ width: '10%' })}>{'환불날짜'}</li>
            </ul>
          );
        },
      )}
    </>
  );
};

const NoResultContainer = styled('div', {
  base: {
    width: '100%',
    height: '100%',
    padding: '16px 0',
    borderRadius: '8px',
  },
});

export default ModalSalesLists;
