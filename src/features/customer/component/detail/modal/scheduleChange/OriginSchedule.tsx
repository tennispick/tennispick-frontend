import { CustomerLessonScheduleHistoryData } from '@apis/customer/customer.type';
import { useCustomerLessonScheduleHistoryQuery } from '@features/customer/query/CustomerQuery';
import ManageListRow from '../../manage/ListRow';
import {
  transferLessonDateType,
  transferLessonType,
} from '@features/schedule/util/transfer';
import { isEmptyObj } from 'src/shared/utils/object';

type Props = {
  customerId: number;
  customerLessonId: number;
  onClickSelectOriginScheduleHandler: (
    item: CustomerLessonScheduleHistoryData,
  ) => void;
  selectSchedule: CustomerLessonScheduleHistoryData;
};

const OriginSchedule = ({
  customerId,
  customerLessonId,
  onClickSelectOriginScheduleHandler,
  selectSchedule,
}: Props) => {
  const { data } = useCustomerLessonScheduleHistoryQuery({
    customerId,
    customerLessonId,
  });

  return (
    <section className="mb-3">
      <div className="font-semibold">변경 전 일정</div>
      <div
        className="flex h-7 items-center text-center mt-2 p-1.5 [&_div]:text-sm"
      >
        <div className="w-[10%]">출석여부</div>
        <div className="w-[15%]">코치</div>
        <div className="w-[10%]">보강유무</div>
        <div className="w-[15%]">레슨 유형</div>
        <div className="w-[15%]">예약 유형</div>
        <div className="w-[15%]">날짜</div>
        <div className="w-[10%]">시작시간</div>
        <div className="w-[10%]">종료시간</div>
      </div>
      <div
        className="max-h-32 py-2 overflow-y-auto mb-2 [&_div]:text-sm"
      >
        {data && data.length > 0 ? (
          data.map((item: CustomerLessonScheduleHistoryData, index: number) => {
            const {
              id: centerCoachId,
              coachName,
              date,
              isAttendance,
              isRegularLesson,
              lessonDateType,
              lessonType,
              startTime,
              endTime,
            } = item;

            const isSelect = selectSchedule.id === centerCoachId;

            return (
              <ManageListRow
                key={`${index}-${centerCoachId}`}
                className={`p-1 h-9 ${isSelect ? 'bg-gray-200' : 'bg-white'} cursor-pointer`}
                onClick={() => onClickSelectOriginScheduleHandler(item)}
              >
                <div className="w-[10%]">
                  {isAttendance === 'Y' ? '출석' : '결석'}
                </div>
                <div className="w-[15%]">{coachName ?? '-'}</div>
                <div className="w-[10%]">
                  {isRegularLesson === 'Y' ? '정규레슨' : '보강레슨'}
                </div>
                <div className="w-[15%]">
                  {transferLessonType(lessonType)}강습
                </div>
                <div className="w-[15%]">
                  {transferLessonDateType(lessonDateType)}로 예약
                </div>
                <div className="w-[15%]">{date}</div>
                <div className="w-[10%]">{startTime}</div>
                <div className="w-[10%]">{endTime}</div>
              </ManageListRow>
            );
          })
        ) : (
          <div className="text-center mt-4">
            수강이력이 존재하지 않아요.
          </div>
        )}
      </div>
      <div className="font-semibold">선택 변경 대상 일정</div>
      <div
        className="flex h-7 items-center text-center mt-2 p-1.5 [&_div]:text-sm"
      >
        <div className="w-[10%]">출석여부</div>
        <div className="w-[15%]">코치</div>
        <div className="w-[10%]">보강유무</div>
        <div className="w-[15%]">레슨 유형</div>
        <div className="w-[15%]">예약 유형</div>
        <div className="w-[15%]">날짜</div>
        <div className="w-[10%]">시작시간</div>
        <div className="w-[10%]">종료시간</div>
      </div>
      <div
        className="[&_div]:text-sm"
      >
        {!isEmptyObj(selectSchedule) ? (
          <ManageListRow
            className="cursor-default p-1 h-9"
          >
            <div className="w-[10%]">
              {selectSchedule.isAttendance === 'Y' ? '출석' : '결석'}
            </div>
            <div className="w-[15%]">
              {selectSchedule.coachName ?? '-'}
            </div>
            <div className="w-[10%]">
              {selectSchedule.isRegularLesson === 'Y' ? '정규레슨' : '보강레슨'}
            </div>
            <div className="w-[15%]">
              {transferLessonType(selectSchedule.lessonType)}강습
            </div>
            <div className="w-[15%]">
              {transferLessonDateType(selectSchedule.lessonDateType)}로 예약
            </div>
            <div className="w-[15%]">{selectSchedule.date}</div>
            <div className="w-[10%]">
              {selectSchedule.startTime}
            </div>
            <div className="w-[10%]">
              {selectSchedule.endTime}
            </div>
          </ManageListRow>
        ) : (
          <div
            className="text-center py-3 text-sm"
          >
            선택된 일정이 없어요.
          </div>
        )}
      </div>
    </section>
  );
};

export default OriginSchedule;