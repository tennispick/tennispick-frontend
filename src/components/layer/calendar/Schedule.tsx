import {
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
  useCallback,
} from 'react';
import styled from '@emotion/styled';
import { v4 as uuidV4 } from 'uuid';
import NormalList from '@components/common/NormalList';
import {
  getDiffTimeMinutes,
  getTimeZoneList,
  isCheckTimeInRange,
  transferTimeZoneToSettingLessonTime,
} from '@utils/date';
import { useRecoilState } from 'recoil';
import { userState } from '@lib/recoil/userState';
import { TransferTimeList } from '@interfaces/calendar';
import { CSS_TYPE } from '@styles/styles';
import { CustomerLessonType } from 'src/types/customer';

type LessonCustomerItemType = TransferTimeList & { isAttendance?: boolean };
type LessonTimeType = LessonCustomerItemType[];

type Props = {
  data: {
    data: Array<CustomerLessonType>;
  };
  customerInfo: CustomerLessonType | null;
  setCustomerInfo: Dispatch<SetStateAction<CustomerLessonType | null>>;
};

const FORCE_LESSON_CHANGE = 0;

const ModalSchedule = ({ ...props }: Props) => {
  const now = new Date();
  const { data, customerInfo, setCustomerInfo } = props;

  const [user] = useRecoilState(userState);
  const { lesson_setting_time, business_hours, business_end_hours } = user;

  const [customerLessonList] = useState(data?.data);

  const { timeList } = getTimeZoneList();

  const fulltimeList = timeList.filter((item) => {
    const time = Number(item.split(':')[0]);
    return time >= business_hours && time <= business_end_hours;
  });

  const lessonTimeList: LessonTimeType = useMemo(
    () =>
      transferTimeZoneToSettingLessonTime(fulltimeList, lesson_setting_time),
    [],
  );

  // TODO any
  const updateLessonTime = useCallback(
    (index: number, item: any, isAttendance: boolean) => {
      lessonTimeList[index] = {
        ...lessonTimeList[index],
        ...item,
        isAttendance: isAttendance,
      };
    },
    [],
  );

  customerLessonList.length > 0 &&
    customerLessonList.map((item) => {
      const lessonStartTime = item.start_time;
      const lessonEndTime = item.end_time;
      const diffTimeMinutes = getDiffTimeMinutes(
        lessonStartTime,
        lessonEndTime,
      );
      const isSameLessonSettingTime =
        diffTimeMinutes % lesson_setting_time === 0;

      for (let index = 0; index < lessonTimeList.length; index++) {
        const { startTime, endTime } = lessonTimeList[index];

        const isCheckStartTime = isCheckTimeInRange(
          startTime,
          endTime,
          lessonStartTime,
        );
        const isCheckEndTime = isCheckTimeInRange(
          startTime,
          endTime,
          lessonEndTime,
        );
        const isAttendance =
          item.coach_attendance || item.customer_attendance ? true : false;

        // 센터에서 설정한 시간과 일치하는 단위일 경우와, 강제로 주입한 경우
        if (
          (item.is_forced_lesson_change === FORCE_LESSON_CHANGE &&
            isSameLessonSettingTime &&
            isCheckStartTime &&
            isCheckEndTime) ||
          (!isSameLessonSettingTime &&
            isCheckStartTime &&
            lessonStartTime !== endTime)
        ) {
          updateLessonTime(index, item, isAttendance);
        }
      }
    });

  return (
    <Container>
      <NormalList.UnOrderList css={{ height: '100%', margin: '12px 12px 0 0' }}>
        {lessonTimeList.map((item: any) => {
          // TODO Any 삭제

          return (
            <NormalList
              key={uuidV4()}
              css={{
                width: '100%',
                padding: '8px 4px 8px 16px',
                backgroundColor:
                  customerInfo?.id &&
                  (customerInfo?.id === item.id ? 'var(--grey500)' : ''),

                ':hover': {
                  borderRadius: '8px',
                },

                div: {
                  padding: '6px auto',
                  fontWeight: 500,
                },
              }}
              onClick={() => {
                item.id && setCustomerInfo(item);
              }}
            >
              {item.isAttendance !== undefined ? (
                <>
                  {(() => {
                    if (item.isAttendance) {
                      return (
                        <Status
                          css={{
                            width: '12%',
                            textAlign: 'center',
                            backgroundColor: 'var(--blue900)',
                            color: 'var(--blue100)',
                          }}
                        >
                          출석
                        </Status>
                      );
                    }

                    if (!item.isAttendance) {
                      const isAfterNow = now < new Date(item.origin_end_time);
                      if (isAfterNow) {
                        return (
                          <Status
                            css={{
                              width: '12%',
                              textAlign: 'center',
                              backgroundColor: 'var(--green900)',
                              color: 'var(--green150)',
                            }}
                          >
                            예약
                          </Status>
                        );
                      } else {
                        return (
                          <Status
                            css={{
                              width: '12%',
                              textAlign: 'center',
                              backgroundColor: 'var(--pink900)',
                              color: 'var(--pink100)',
                            }}
                          >
                            결석
                          </Status>
                        );
                      }
                    }

                    // TODO 현재는 ID로만 가지고 오고 있어서, 나중에 이름으로 가져오기
                  })()}
                  <div
                    css={{ width: '29%', textAlign: 'center' }}
                  >{`${item.startTime} - ${item.endTime}`}</div>
                  <div css={{ width: '10%', textAlign: 'center' }}>개인</div>
                  <div css={{ width: '15%', textAlign: 'center' }}>
                    3번 코트
                  </div>
                  <div css={{ width: '20%', textAlign: 'center' }}>루카스</div>
                  <div css={{ width: '17%', textAlign: 'center' }}>
                    광개토대왕
                  </div>
                </>
              ) : (
                <>
                  <Status css={{ width: '12%', textAlign: 'center' }}>
                    미예약
                  </Status>
                  <div
                    css={{ width: '29%', textAlign: 'center' }}
                  >{`${item.startTime} - ${item.endTime}`}</div>
                  <div css={{ width: '10%', textAlign: 'center' }}>-</div>
                  <div css={{ width: '15%', textAlign: 'center' }}>-</div>
                  <div css={{ width: '20%', textAlign: 'center' }}>-</div>
                  <div css={{ width: '17%', textAlign: 'center' }}>-</div>
                </>
              )}
            </NormalList>
          );
        })}
      </NormalList.UnOrderList>
    </Container>
  );
};

const Container = styled.section({
  position: 'relative',
  width: '30%',
  borderRight: '1px solid var(--grey100)',
  padding: '0 0 32px 0',
});
const Status = styled.div<CSS_TYPE>(
  {
    fontWeight: 700,
    padding: '6px 8px',
    borderRadius: '4px',
  },
  (props) => ({
    backgroundColor: props.backgroundColor
      ? props.backgroundColor
      : 'var(--grey1000)',
    color: props.color ? props.color : 'var(--white100)',
  }),
);

export default ModalSchedule;
