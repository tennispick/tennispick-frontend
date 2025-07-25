import SalesSummary from '../SalesSummary';
import {
  useCoachTotalSalesListQuery,
  useCoachTotalSalesQuery,
} from '@features/coach/query/coachQuery';
import { SearchConditionType } from '@features/coach/data/salesModalData';
import { getDateToKoreanString } from 'src/shared/utils/date';
import { CoachTotalSalesListData } from '@apis/coach/coach.type';
import Loading from '@/shared/components/common/Loading';
import {
  transferCategory,
  transferDiscountType,
  transferPaymentType,
} from '@features/customer/util/payment';
import { addNumberCommas } from 'src/shared/utils/numberForm';
import { NoResult } from '@/shared/components/index';

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
      <div className="h-[calc(100%-(128px+3rem))] border-t border-gray-300 py-[0.825rem]">
        <SalesListsHeader />
        <SalesLists data={totalSalesList.pages} />
      </div>
    </>
  );
};

const SalesListsHeader = () => {
  return (
    <ul role="rowheader" className="flex px-4">
      <li className="w-[5%] text-sm font-semibold">{'이름'}</li>
      <li className="w-[10%] text-sm font-semibold">{'연락처'}</li>
      <li className="w-[14%] text-sm font-semibold">{'상품명'}</li>
      <li className="w-[8%] text-sm font-semibold">{'결제유형'}</li>
      <li className="w-[3%] text-sm font-semibold">{'유형'}</li>
      <li className="w-[10%] text-sm font-semibold">{'결제금액'}</li>
      <li className="w-[10%] text-sm font-semibold">{'환불금액'}</li>
      <li className="w-[10%] text-sm font-semibold">{'할인유형'}</li>
      <li className="w-[10%] text-sm font-semibold">{'할인금액'}</li>
      <li className="w-[10%] text-sm font-semibold">{'총 금액'}</li>
      <li className="w-[15%] text-sm font-semibold">{'결제날짜'}</li>
      <li className="w-[10%] text-sm font-semibold">{'환불날짜'}</li>
    </ul>
  );
};

const SalesLists = ({ data }: { data: CoachTotalSalesListData[] }) => {
  if (data.length === 0)
    return (
      <div>
        <NoResult description={'데이터가 없어요.'} />
      </div>
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
              className="flex py-[10px] px-4 mt-1 hover:bg-blue-50 hover:rounded-lg"
            >
              <li className="w-[5%] text-[0.825rem]">{customerName}</li>
              <li className="w-[10%] text-[0.825rem]">{customerPhone}</li>
              <li className="w-[14%] text-[0.825rem]">{lessonName}</li>
              <li className="w-[8%] text-[0.825rem]">
                {transferPaymentType(type)}
              </li>
              <li className="w-[3%] text-[0.825rem]">
                {transferCategory(category)}
              </li>
              <li className="w-[10%] text-[0.825rem]">
                {addNumberCommas(totalPrice)}
              </li>
              <li className="w-[10%] text-[0.825rem]">
                {addNumberCommas(refundPrice)}
              </li>
              <li className="w-[10%] text-[0.825rem]">
                {transferDiscountType(discountType)}
              </li>
              <li className="w-[10%] text-[0.825rem]">
                {addNumberCommas(discountPrice)}
              </li>
              <li className="w-[10%] text-[0.825rem]">
                {addNumberCommas(remainPrice)}
              </li>
              <li className="w-[15%] text-[0.825rem]">{createdAt}</li>
              <li className="w-[10%] text-[0.825rem]">{'환불날짜'}</li>
            </ul>
          );
        },
      )}
    </>
  );
};

export default ModalSalesLists;
