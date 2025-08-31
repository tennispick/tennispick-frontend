import { useCoachCustomersQuery } from '@features/coach/query/coachQuery';
import { NoResult } from '@/shared/components/index';
import { CoachCustomersData } from '@apis/coach/coach.type';
import { transferSexType } from 'src/shared/utils/switch';

type Props = {
  coachId: string;
  checkedItems: Array<string>;
  keyword: string;
  searchCondition: string;
};

const CustomerLists = ({
  coachId,
  checkedItems,
  keyword,
  searchCondition,
}: Props) => {
  const { isLoading, data } = useCoachCustomersQuery({
    page: 1,
    coachId,
    checkedItems,
    keyword,
    searchCondition,
  });

  if (isLoading || !data) return <></>;

  return (
    <div className="h-[calc(100%-(128px+3rem))] border-t border-gray-300 py-[0.825rem]">
      <SalesListsHeader />
      <SalesLists data={data?.pages} />
    </div>
  );
};

const SalesListsHeader = () => {
  return (
    <ul role="rowheader" className="flex px-4">
      <li className="w-[10%] text-sm font-semibold">{'이름'}</li>
      <li className="w-[5%] text-sm font-semibold">{'성별'}</li>
      <li className="w-[15%] text-sm font-semibold">{'연락처'}</li>
      <li className="w-[15%] text-sm font-semibold">{'최근 레슨'}</li>
      <li className="w-[15%] text-sm font-semibold">{'다음 레슨'}</li>
      <li className="w-[17.5%] text-sm font-semibold">{'레슨권'}</li>
      <li className="w-[12.5%] text-sm font-semibold">{'남은 수강횟수'}</li>
      <li className="w-[10%] text-sm font-semibold">{'레슨금액'}</li>
    </ul>
  );
};

const SalesLists = ({ data }: { data: CoachCustomersData[] }) => {
  if (data.length === 0)
    return (
      <div>
        <NoResult description={'데이터가 없어요.'} />
      </div>
    );

  return (
    <>
      {data.map(
        (
          {
            customerId,
            centerId,
            name,
            lessonName,
            sex,
            phone,
            recentLessonTime,
            nextLessonTime,
            price,
            remainLessonCount,
          },
          index,
        ) => {
          return (
            <ul
              key={`${centerId}-${customerId}-${name}-${index}`}
              role="row"
              className="flex py-[10px] px-4 mt-1 text-[0.825rem] hover:bg-blue-50 hover:rounded-lg"
            >
              <li className="w-[10%]">{name}</li>
              <li className="w-[5%]">{transferSexType(sex)}</li>
              <li className="w-[15%]">{phone}</li>
              <li className="w-[15%]">{recentLessonTime ?? '-'}</li>
              <li className="w-[15%]">{nextLessonTime ?? '-'}</li>
              <li className="w-[17.5%]">{lessonName}</li>
              <li className="w-[12.5%]">{remainLessonCount} 회</li>
              <li className="w-[10%]">{price}</li>
            </ul>
          );
        },
      )}
    </>
  );
};

export default CustomerLists;
