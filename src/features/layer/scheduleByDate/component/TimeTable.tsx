import { useScheduleByDateQuery } from '@features/schedule/query/scheduleQuery';
import { NormalList as Li } from '@components/index';
import { CSS_TYPE } from '@styles/styles';
import styled from '@emotion/styled';

type Props = {
  day: Date;
};

const ScheduleByDateTimeTable = ({ day }: Props) => {
  const now = new Date();

  // const [user, ] = useRecoilState(userState);
  // const {
  //   lesson_setting_time: lessonSettingTime,
  //   business_hours,
  //   business_end_hours: businessEndHours
  // } = user;

  const { data } = useScheduleByDateQuery({ day });

  const handleAttendanceCheck = (
    isAttendance: boolean,
    isPassNowTime: boolean,
  ) => {
    if (isPassNowTime) {
      return isAttendance ? (
        <Status backgroundColor={'var(--green100)'}>출석</Status>
      ) : (
        <Status backgroundColor={'var(--red100)'}>결석</Status>
      );
    } else {
      return isAttendance ? (
        <Status backgroundColor={'var(--green100)'}>출석</Status>
      ) : (
        <Status backgroundColor={'var(--grey100)'}>강습전</Status>
      );
    }
  };

  return (
    <div
      css={{
        position: 'relative',
        width: '35%',
        borderRight: '1px solid var(--grey100)',
        padding: '0 0 32px 0',
      }}
    >
      <ScheduleByDateTimeTable.Header />
      <Li.UnOrderList
        css={{
          height: 'calc(100% - 60px)',
          margin: '12px 0 0 0',
          padding: '0 12px 0 12px',
        }}
      >
        {data?.map(
          ({
            id,
            coachAttendance,
            customerAttendance,
            startTime,
            endTime,
            originEndTime,
            lessonType,
            coachName,
            customerName,
          }: any) => {
            const isAttendance =
              coachAttendance || customerAttendance ? true : false;
            // const isSameLessonSettingTime = getDiffTimeMinutes(startTime, endTime) % lessonSettingTime === 0;

            const isPassNowTime = now > new Date(originEndTime);

            return (
              <Li
                key={id}
                css={{
                  padding: '8px 0',
                  borderRadius: '8px',

                  div: {
                    textAlign: 'center',
                  },

                  ':hover': {
                    borderRadius: '8px',
                  },
                }}
              >
                {handleAttendanceCheck(isAttendance, isPassNowTime)}
                <div css={{ width: '30%' }}>
                  {startTime} ~ {endTime}
                </div>
                <div css={{ width: '20%' }}>
                  {lessonType === 'private' ? '개인레슨' : '그룹레슨'}
                </div>
                <div css={{ width: '20%' }}>{coachName}</div>
                <div css={{ width: '15%' }}>{customerName}</div>
              </Li>
            );
          },
        )}
      </Li.UnOrderList>
      {(!data || data?.length === 0) && (
        <div
          css={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          오늘의 스케줄이 없어요.
        </div>
      )}
    </div>
  );
};

const Header = () => {
  return (
    <ul
      css={{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        borderBottom: '1px solid var(--grey100)',
        padding: '12px 12px 12px 24px',
      }}
    >
      <li css={{ width: '15%' }}>강습현황</li>
      <li css={{ width: '30%' }}>강습시간</li>
      <li css={{ width: '20%' }}>강습유형</li>
      <li css={{ width: '20%' }}>담당코치</li>
      <li css={{ width: '15%' }}>회원</li>
    </ul>
  );
};

const Status = styled.div<CSS_TYPE>(
  {
    width: '15%',
    fontWeight: 700,
    padding: '6px 8px',
    borderRadius: '4px',
    margin: '0 0 0 12px',
  },
  (props) => ({
    backgroundColor: props.backgroundColor
      ? props.backgroundColor
      : 'var(--grey1000)',
    color: props.color ? props.color : 'var(--white100)',
  }),
);

ScheduleByDateTimeTable.Header = Header;
export default ScheduleByDateTimeTable;
