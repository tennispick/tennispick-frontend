import TimeRange from '@components/common/TimeRange';
import { FormAllOnceCreateType } from '@features/schedule/type/schedule.type';
import { dayList } from '@utils/day';
import { Dispatch, SetStateAction } from 'react';
import Select from '@components/common/Select';
import { numberZeroFillFormat } from '@utils/numberForm';
import DatePicker from './DatePicker';

type Props = {
  scheduleType: string;
  formData: FormAllOnceCreateType;
  setFormData: Dispatch<SetStateAction<FormAllOnceCreateType>>;
  isDuplicateList: any;
};

const ScheduleModalRegularLessonAllOnceCreateScheduleFormField = ({
  scheduleType,
  formData,
  setFormData,
  isDuplicateList,
}: Props) => {
  const { lessonTime, lessonDateType, weeklyLessonCount, schedule } = formData;

  const scheduleList = schedule.map((item) => {
    const targetDate = new Date(item.date);
    const targetYear = targetDate.getFullYear();
    const targetMonth = targetDate.getMonth() + 1;
    const targetDay = targetDate.getDate();
    const targetFullFormat = `${targetYear}-${numberZeroFillFormat(
      targetMonth,
      2,
    )}-${numberZeroFillFormat(targetDay, 2)}`;

    const isDuplicate =
      isDuplicateList &&
      isDuplicateList.length > 0 &&
      isDuplicateList.map((el: any) => {
        const { result } = el;
        return (
          item.startTime === result.startTime &&
          item.endTime === result.endTime &&
          targetFullFormat === result.date
        );
      });

    return {
      ...item,
      isDuplicate: isDuplicate ? true : false,
    };
  });

  return (
    <div
      css={{
        position: 'relative',
        width: '55%',
      }}
    >
      {scheduleList?.map((item, index) => {
        return (
          <div key={index} css={{ margin: '0 0 12px 0' }}>
            <div
              css={{
                display: 'flex',
                alignItems: 'center',
                margin: '0 0 8px 0',

                '.react-datepicker-wrapper': {
                  width: '20%',
                },
              }}
            >
              <div css={{ width: '20px', margin: '0 8px 0 0' }}>
                {index + 1}.
              </div>
              {lessonDateType === 'date' ? (
                <DatePicker
                  index={index}
                  date={item.date}
                  setFormData={setFormData}
                />
              ) : (
                <Select
                  name={'day'}
                  width={'calc(20% - 4px)'}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    setFormData((prev) => {
                      const { schedule } = prev;
                      const newSchedule = [...schedule];

                      newSchedule[index] = {
                        ...newSchedule[index],
                        [name]: value,
                      };
                      return {
                        ...prev,
                        schedule: newSchedule,
                      };
                    });
                  }}
                >
                  {dayList.map(({ key, name, krName }) => (
                    <option key={key} value={name}>
                      {krName}
                    </option>
                  ))}
                </Select>
              )}
              <TimeRange
                index={index}
                scheduleType={scheduleType}
                lessonTime={lessonTime}
                weeklyLessonCount={weeklyLessonCount}
                setFormData={setFormData}
                css={{
                  margin: '0 0 0 12px',
                }}
              />
            </div>
            <div
              css={{
                padding: '0 0 0 28px',
                color: 'var(--red200)',
              }}
            >
              {item.isDuplicate && <>예약이 불가능한 날짜에요.</>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ScheduleModalRegularLessonAllOnceCreateScheduleFormField;
