import {
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
  useCallback,
} from 'react';
import { v4 as uuidV4 } from 'uuid';
import NormalList from '@/shared/components/common/NormalList';
import {
  getDiffTimeMinutes,
  getTimeZoneList,
  isCheckTimeInRange,
  transferTimeZoneToSettingLessonTime,
} from 'src/shared/utils/date';
import { useRecoilState } from 'recoil';
import { userState } from '@lib/recoil/userState';
import { TransferTimeList } from '@interfaces/calendar';
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
    <section className="w-[30%] border-r border-r-[var(--grey100)] pb-8">
      <NormalList.UnOrderList className="h-full mt-3 mr-3">
        {lessonTimeList.map((item: any) => {
          return (
            <NormalList
              key={uuidV4()}
              className={`w-full px-1 py-2 font-medium hover:rounded ${
                customerInfo?.id &&
                (customerInfo?.id === item.id ? 'bg-[var(--grey500)]' : '')
              }`}
              onClick={() => {
                item.id && setCustomerInfo(item);
              }}
            >
              {item.isAttendance !== undefined ? (
                <>
                  {(() => {
                    if (item.isAttendance) {
                      return (
                        <div className="w-[12%] rounded bg-[var(--blue900)] px-2 py-1.5 text-center font-bold text-[var(--blue100)]">
                          출석
                        </div>
                      );
                    }

                    if (!item.isAttendance) {
                      const isAfterNow = now < new Date(item.origin_end_time);
                      if (isAfterNow) {
                        return (
                          <div className="w-[12%] rounded bg-[var(--green900)] px-2 py-1.5 text-center font-bold text-[var(--green150)]">
                            예약
                          </div>
                        );
                      } else {
                        return (
                          <div className="w-[12%] rounded bg-[var(--pink900)] px-2 py-1.5 text-center font-bold text-[var(--pink100)]">
                            결석
                          </div>
                        );
                      }
                    }
                  })()}
                  <div className="w-[29%] text-center">{`${item.startTime} - ${item.endTime}`}</div>
                  <div className="w-[10%] text-center">개인</div>
                  <div className="w-[15%] text-center">3번 코트</div>
                  <div className="w-[20%] text-center">루카스</div>
                  <div className="w-[17%] text-center">광개토대왕</div>
                </>
              ) : (
                <>
                  <div className="w-[12%] rounded bg-[var(--grey1000)] px-2 py-1.5 text-center font-bold text-[var(--white100)]">
                    미예약
                  </div>
                  <div className="w-[29%] text-center">{`${item.startTime} - ${item.endTime}`}</div>
                  <div className="w-[10%] text-center">-</div>
                  <div className="w-[15%] text-center">-</div>
                  <div className="w-[20%] text-center">-</div>
                  <div className="w-[17%] text-center">-</div>
                </>
              )}
            </NormalList>
          );
        })}
      </NormalList.UnOrderList>
    </section>
  );
};

export default ModalSchedule;
