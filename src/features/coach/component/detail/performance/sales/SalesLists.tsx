import { CoachTotalSalesListData } from '@apis/coach/coach.type';
import { NoResult } from '@/shared/components/index';
import {
  transferCategory,
  transferDiscountType,
  transferPaymentType,
} from '@features/customer/util/payment';
import { addNumberCommas } from 'src/shared/utils/numberForm';

type Props = {
  data: CoachTotalSalesListData[];
};

const SalesLists = ({ data }: Props) => {
  return (
    <div className="h-[calc(100%-14.25rem)] rounded-xl">
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
    <ul role="rowheader" className="flex px-4">
      <li className="w-[7%] text-sm font-semibold">{'이름'}</li>
      <li className="w-[20%] text-sm font-semibold">{'상품명'}</li>
      <li className="w-[8%] text-sm font-semibold">{'결제유형'}</li>
      <li className="w-[5%] text-sm font-semibold">{'유형'}</li>
      <li className="w-[10%] text-sm font-semibold">{'결제금액'}</li>
      <li className="w-[10%] text-sm font-semibold">{'환불금액'}</li>
      <li className="w-[10%] text-sm font-semibold">{'할인유형'}</li>
      <li className="w-[10%] text-sm font-semibold">{'할인금액'}</li>
      <li className="w-[10%] text-sm font-semibold">{'총 금액'}</li>
      <li className="w-[20%] text-sm font-semibold">{'결제날짜'}</li>
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
              className="flex py-[10px] px-4 mt-1 hover:bg-blue-50 hover:rounded-lg"
            >
              <li className="w-[7%] text-[0.825rem]">{customerName}</li>
              <li className="w-[20%] text-[0.825rem]">{lessonName}</li>
              <li className="w-[8%] text-[0.825rem]">
                {transferPaymentType(type)}
              </li>
              <li className="w-[5%] text-[0.825rem]">
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
              <li className="w-[20%] text-[0.825rem]">{createdAt}</li>
            </ul>
          );
        },
      )}
    </>
  );
};

export default SalesLists;
