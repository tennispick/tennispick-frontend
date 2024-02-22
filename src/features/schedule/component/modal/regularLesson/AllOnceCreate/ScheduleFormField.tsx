import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimeRange from '@components/common/TimeRange';
import { FormAllOnceCreateType } from '@features/schedule/type/schedule.type';
import { dayList } from '@utils/day';
import { Dispatch, SetStateAction } from 'react';
import Select from '@components/common/Select';

type Props = {
  scheduleType: string;
  formData: FormAllOnceCreateType;
  setFormData: Dispatch<SetStateAction<FormAllOnceCreateType>>;
};

const ScheduleModalRegularLessonAllOnceCreateScheduleFormField = ({
  scheduleType,
  formData,
  setFormData,
}: Props) => {
  const { lessonTime, lessonDateType, weeklyLessonCount, schedule } = formData;

  return (
    <div
      css={{
        position: 'relative',
        width: '55%',
      }}
    >
      {schedule?.map((item, index) => {
        return (
          <div
            key={index}
            css={{
              display: 'flex',
              alignItems: 'center',
              margin: '0 0 12px 0',

              '.react-datepicker-wrapper': {
                width: '20%',
              },
            }}
          >
            <div css={{ width: '20px', margin: '0 8px 0 0' }}>{index + 1}.</div>
            {lessonDateType === 'date' ? (
              <DatePicker
                showIcon
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 16 18"
                    fill="none"
                    css={{
                      zIndex: 99
                    }}
                  >
                    <path
                      d="M2.16667 17.3334C1.70833 17.3334 1.31597 17.1702 0.989583 16.8438C0.663194 16.5174 0.5 16.1251 0.5 15.6667V4.00008C0.5 3.54175 0.663194 3.14939 0.989583 2.823C1.31597 2.49661 1.70833 2.33341 2.16667 2.33341H3V0.666748H4.66667V2.33341H11.3333V0.666748H13V2.33341H13.8333C14.2917 2.33341 14.684 2.49661 15.0104 2.823C15.3368 3.14939 15.5 3.54175 15.5 4.00008V15.6667C15.5 16.1251 15.3368 16.5174 15.0104 16.8438C14.684 17.1702 14.2917 17.3334 13.8333 17.3334H2.16667ZM2.16667 15.6667H13.8333V7.33341H2.16667V15.6667ZM2.16667 5.66675H13.8333V4.00008H2.16667V5.66675Z"
                      fill="#626262"
                    />
                  </svg>
                }
                css={{
                  width: '100%',
                  padding: '10px 0px 10px 32px !important',
                  border: '1px solid var(--grey300)',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                }}
                dateFormat="yyyy.MM.dd"
                selected={item.date}
                onChange={(date) => {
                  setFormData((prev) => {
                    const { schedule } = prev;
                    const newSchedule = [...schedule];

                    newSchedule[index] = {
                      ...newSchedule[index],
                      date: date as Date,
                    };
                    return {
                      ...prev,
                      schedule: newSchedule,
                    };
                  });
                }}
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
        );
      })}
    </div>
  );
};

export default ScheduleModalRegularLessonAllOnceCreateScheduleFormField;
