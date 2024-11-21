import { useScheduleByDateQuery } from 'app/src/features/schedule/query/scheduleQuery';
import { NormalList as Li } from 'app/src/components/index';
import { ScheduleLessonByDateData } from 'app/src/apis/schedule/schedule.type';
import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';
import { flex } from 'styled-system/patterns';

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
        <Status className={css({ backgroundColor: 'var(--green100)' })}>
          출석
        </Status>
      ) : (
        <Status className={css({ backgroundColor: 'var(--red100)' })}>
          결석
        </Status>
      );
    } else {
      return isAttendance ? (
        <Status className={css({ backgroundColor: 'var(--green100)' })}>
          출석
        </Status>
      ) : (
        <Status className={css({ backgroundColor: 'var(--grey100)' })}>
          강습전
        </Status>
      );
    }
  };

  // backgroundColor: props.backgroundColor
  //     ? props.backgroundColor
  //     : 'var(--grey1000)',
  //   color: props.color ? props.color : 'var(--white100)',

  const onClickScheduleRowHandler = (
    customerInfo: ScheduleLessonByDateData,
  ) => {
    onChangeCustomerInfoHandler(customerInfo);
    onChangeCustomerIdHandler(customerInfo.customerId.toString());
  };

  return (
    <div
      className={css({
        position: 'relative',
        width: '35%',
        borderRight: '1px solid var(--grey100)',
        padding: '0 0 32px 0',
      })}
    >
      <ScheduleByDateTimeTable.Header />
      <Li.UnOrderList
        className={css({
          height: 'calc(100% - 60px)',
          margin: '12px 0 0 0',
          padding: '0 12px 0 12px',
        })}
      >
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
              className={css({
                padding: '8px 0',
                borderRadius: '8px',

                '&div': {
                  textAlign: 'center',
                },

                '&:hover': {
                  borderRadius: '8px',
                },
              })}
              onClick={() => onClickScheduleRowHandler(item)}
            >
              {handleAttendanceCheck(isAttendance, isPassNowTime)}
              <div className={css({ width: '30%' })}>
                {startTime} ~ {endTime}
              </div>
              <div className={css({ width: '20%' })}>
                {lessonType === 'private' ? '개인레슨' : '그룹레슨'}
              </div>
              <div className={css({ width: '20%' })}>{coachName}</div>
              <div className={css({ width: '15%' })}>{customerName}</div>
            </Li>
          );
        })}
      </Li.UnOrderList>
      {(!data || data?.length === 0) && (
        <div
          className={css({
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          })}
        >
          오늘은 스케줄이 없어요.
        </div>
      )}
    </div>
  );
};

const Header = () => {
  return (
    <ul
      className={flex({
        alignItems: 'center',
        textAlign: 'center',
        borderBottom: '1px solid var(--grey100)',
        padding: '12px 12px 12px 24px',
      })}
    >
      <li className={css({ width: '15%' })}>강습현황</li>
      <li className={css({ width: '30%' })}>강습시간</li>
      <li className={css({ width: '20%' })}>강습유형</li>
      <li className={css({ width: '20%' })}>담당코치</li>
      <li className={css({ width: '15%' })}>회원</li>
    </ul>
  );
};

const Status = styled('div', {
  base: {
    width: '15%',
    fontWeight: 700,
    padding: '6px 8px',
    borderRadius: '4px',
    margin: '0 0 0 12px',
  },
});

ScheduleByDateTimeTable.Header = Header;
export default ScheduleByDateTimeTable;
