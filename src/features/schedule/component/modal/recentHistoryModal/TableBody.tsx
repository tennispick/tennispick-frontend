import { CustomerLessonHistoryData } from '@apis/customer/customer.type';
import { transferLessonDateType } from '@features/schedule/util/transfer';
import { isEmptyObj } from 'src/shared/utils/object';
import { MouseEvent } from 'react';

type Props = {
  checkHistoryId: string;
  onClickRadioHandler: (e: MouseEvent<HTMLInputElement>) => void;
  data: CustomerLessonHistoryData['lessonHistory'][];
};

const ScheduleModalRecentHistoryModalTableBody = ({
  checkHistoryId,
  onClickRadioHandler,
  data,
}: Props) => {
  const isEmptyData = data.length === 0 || isEmptyObj(data[0]);

  return (
    <table className="w-full border-collapse table-fixed">
      <colgroup>
        <col className="w-[36px]" />
        <col className="w-[72px]" />
        <col className="w-[152px]" />
        <col className="w-[100px]" />
        <col className="w-[150px]" />
        <col className="w-[120px]" />
        <col className="w-[110px]" />
        <col className="w-[120px]" />
      </colgroup>
      <thead className="[&_tr>th]:text-left [&_tr>th]:bg-blue-600 [&_tr>th]:text-white [&_tr>th]:p-2.5 [&_tr>th]:text-base">
        <tr>
          <th></th>
          <th>회원명</th>
          <th>수강권</th>
          <th>코치</th>
          <th>코트</th>
          <th>강습날짜 유형</th>
          <th>강습날짜</th>
          <th>강습시간</th>
        </tr>
      </thead>
      <tbody className="min-h-[210px] [&_tr]:border-b [&_tr]:border-gray-300 [&_tr>td]:text-left [&_tr>td]:py-3 [&_tr>td]:px-2 [&_tr>td]:truncate [&_tr>td]:overflow-hidden [&_tr>td]:whitespace-nowrap [&_tr>td]:text-sm [&_tr>td:first-child]:text-center">
        {isEmptyData ? (
          <tr>
            <td colSpan={8}>최근 수강이력이 없어요.</td>
          </tr>
        ) : (
          data.map(
            ({
              id,
              customerName,
              lessonName,
              coachName,
              courtName,
              lessonDateType,
              isAble,
              date,
              startTime,
              endTime,
            }) => {
              return (
                <tr key={id}>
                  <td>
                    <input
                      type="radio"
                      name="history"
                      onClick={onClickRadioHandler}
                      value={id}
                      defaultChecked={Number(checkHistoryId) === id}
                      disabled={isAble === 'N' ? true : false}
                    />
                  </td>
                  <td>{customerName}</td>
                  <td>{lessonName}</td>
                  <td>{coachName}</td>
                  <td>{courtName}</td>
                  <td>{transferLessonDateType(lessonDateType)}</td>
                  <td>{date}</td>
                  <td>
                    {startTime} ~ {endTime}
                  </td>
                </tr>
              );
            },
          )
        )}
      </tbody>
    </table>
  );
};

export default ScheduleModalRecentHistoryModalTableBody;