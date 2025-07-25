import { useScheduleByDateQuery } from '@features/schedule/query/scheduleQuery';
import { NormalList as Li } from '@/shared/components/index';
import { ScheduleLessonByDateData } from '@apis/schedule/schedule.type';

type Props = {
  day: Date;
  onChangeCustomerIdHandler: (customerId: string) => void;
  onChangeCustomerInfoHandler: (customerInfo: ScheduleLessonByDateData) => void;
};

const ScheduleByDateTimeTable = ({
  day,
  onChangeCustomerIdHandler,
  onChangeCustomerInfoHandler,
}: Props) => {
  const now = new Date();

  const { data } = useScheduleByDateQuery({ day });

  const handleAttendanceCheck = (
    isAttendance: boolean,
    isPassNowTime: boolean,
  ) => {
    if (isPassNowTime) {
      return isAttendance ? (
        <div className="w-[15%] rounded px-2 py-1.5 font-bold bg-[var(--green100)]">
          출석
        </div>
      ) : (
        <div className="w-[15%] rounded px-2 py-1.5 font-bold bg-[var(--red100)]">
          결석
        </div>
      );
    } else {
      return isAttendance ? (
        <div className="w-[15%] rounded px-2 py-1.5 font-bold bg-[var(--green100)]">
          출석
        </div>
      ) : (
        <div className="w-[15%] rounded px-2 py-1.5 font-bold bg-[var(--grey100)]">
          강습전
        </div>
      );
    }
  };

  // backgroundColor: props.backgroundColor
  //     ?
  //     : 'var(--grey1000)',
  //   color: props.color ? props.color : 'var(--white100)',

  const onClickScheduleRowHandler = (
    customerInfo: ScheduleLessonByDateData,
  ) => {
    onChangeCustomerInfoHandler(customerInfo);
    onChangeCustomerIdHandler(customerInfo.customerId.toString());
  };

  return (
    <div className="relative w-[35%] border-r border-r-[var(--grey100)] pb-8">
      <ScheduleByDateTimeTable.Header />
      <Li.UnOrderList className="h-[calc(100%_-_60px)] mt-3 px-3">
        {data?.map((item: ScheduleLessonByDateData) => {
          const {
            id,
            coachAttendance,
            customerAttendance,
            startTime,
            endTime,
            originEndTime,
            lessonType,
            coachName,
            customerName,
          } = item;

          const isAttendance =
            coachAttendance || customerAttendance ? true : false;
          // const isSameLessonSettingTime = getDiffTimeMinutes(startTime, endTime) % lessonSettingTime === 0;

          const isPassNowTime = now > new Date(originEndTime);

          return (
            <Li
              key={id}
              className="rounded py-2 text-center hover:rounded"
              onClick={() => onClickScheduleRowHandler(item)}
            >
              {handleAttendanceCheck(isAttendance, isPassNowTime)}
              <div className="w-[30%]">
                {startTime} ~ {endTime}
              </div>
              <div className="w-[20%]">
                {lessonType === 'private' ? '개인레슨' : '그룹레슨'}
              </div>
              <div className="w-[20%]">{coachName}</div>
              <div className="w-[15%]">{customerName}</div>
            </Li>
          );
        })}
      </Li.UnOrderList>
      {(!data || data?.length === 0) && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          오늘은 스케줄이 없어요.
        </div>
      )}
    </div>
  );
};

const Header = () => {
  return (
    <ul className="flex items-center border-b border-b-[var(--grey100)] px-3 py-3 text-center">
      <li className="w-[15%]">강습현황</li>
      <li className="w-[30%]">강습시간</li>
      <li className="w-[20%]">강습유형</li>
      <li className="w-[20%]">담당코치</li>
      <li className="w-[15%]">회원</li>
    </ul>
  );
};

ScheduleByDateTimeTable.Header = Header;
export default ScheduleByDateTimeTable;
