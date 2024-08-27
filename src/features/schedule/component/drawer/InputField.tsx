import DatePicker from 'react-datepicker';
import { Input, Select } from '@components/index';
import { useGetCoachListQuery } from '@features/coach/query/coachQuery';
import { useLessonListQuery } from '@features/lesson/query/LessonQuery';
import { useCourtListQuery } from '@features/court/query/courtQuery';
import { getTimeList } from '@utils/date';
import { useEffect, useMemo } from 'react';
import { numberZeroFillFormat } from '@utils/numberForm';
import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';

type Props = {
  formData: any;
  onChangeFormData: any;
  setFormData: any;
  customerName: string;
  lessonTime: number;
};

const ScheduleDrawerInputField = ({
  formData,
  onChangeFormData,
  setFormData,
  customerName,
  lessonTime,
}: Props) => {
  // TODO 이용가능한 코치 및 코트만 보여줘야 함
  const { data: coachList } = useGetCoachListQuery({});
  const { data: courtList } = useCourtListQuery({});
  const { data: lessonList } = useLessonListQuery({ type: 'all' });

  return (
    <>
      <CalendarContainer
        formData={formData}
        onChangeFormData={onChangeFormData}
        setFormData={setFormData}
        lessonTime={lessonTime}
      />
      <LessonTypeContainer
        formData={formData}
        onChangeFormData={onChangeFormData}
      />
      {/* TODO 출석현황 어떻게 처리해야하는지 */}
      {/* <IsAttendanceContainer formData={formData} onChangeFormData={onChangeFormData} /> */}
      <SelectContainer
        label="코치"
        name="coach"
        formData={formData}
        onChangeFormData={onChangeFormData}
        list={coachList?.map((item: any) => ({
          value: item.id,
          label: item.name,
        }))}
      />
      <InputWrapper label="회원">
        <TextField
          name="customerName"
          defaultValue={customerName}
          disabled={true}
        />
      </InputWrapper>
      <InputWrapper label="수강권">
        <TextField
          name="lesson"
          defaultValue={
            lessonList && lessonList.length > 0
              ? lessonList.filter(
                  (item: any) => item.id === formData.lesson.value,
                )[0].name
              : []
          }
          disabled={true}
        />
      </InputWrapper>
      <SelectContainer
        label="코트"
        name="court"
        formData={formData}
        onChangeFormData={onChangeFormData}
        list={courtList?.map((item: any) => ({
          value: item.id,
          label: item.name,
        }))}
      />
    </>
  );
};

const CalendarContainer = ({
  formData,
  onChangeFormData,
  setFormData,
  lessonTime,
}: { lessonTime: number } & Pick<
  Props,
  'formData' | 'onChangeFormData' | 'setFormData'
>) => {
  const startTimeList = useMemo(() => {
    return getTimeList({ step: lessonTime, isInclude: true });
  }, [lessonTime, formData.startTime.value]);

  const endTimeList = useMemo(() => {
    return getTimeList({
      step: lessonTime,
      afterTime: formData.startTime.value,
    });
  }, [startTimeList]);

  useEffect(() => {
    setFormData((prev: any) => {
      const prevFormData = { ...prev };
      const newFormData = {
        ...prevFormData,
        endTime: {
          value: endTimeList[0],
        },
      };

      return newFormData;
    });
  }, [formData.startTime.value]);

  return (
    <div className={css({ margin: '0 0 20px' })}>
      <div>스케줄 일정</div>
      <div className={css({ margin: '12px 0 0 0' })}>
        <div className={css({ display: 'flex', alignItems: 'center' })}>
          <DatePicker
            name="date"
            showIcon
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 16 18"
                fill="none"
                className={css({ zIndex: 99 })}
              >
                <path
                  d="M2.16667 17.3334C1.70833 17.3334 1.31597 17.1702 0.989583 16.8438C0.663194 16.5174 0.5 16.1251 0.5 15.6667V4.00008C0.5 3.54175 0.663194 3.14939 0.989583 2.823C1.31597 2.49661 1.70833 2.33341 2.16667 2.33341H3V0.666748H4.66667V2.33341H11.3333V0.666748H13V2.33341H13.8333C14.2917 2.33341 14.684 2.49661 15.0104 2.823C15.3368 3.14939 15.5 3.54175 15.5 4.00008V15.6667C15.5 16.1251 15.3368 16.5174 15.0104 16.8438C14.684 17.1702 14.2917 17.3334 13.8333 17.3334H2.16667ZM2.16667 15.6667H13.8333V7.33341H2.16667V15.6667ZM2.16667 5.66675H13.8333V4.00008H2.16667V5.66675Z"
                  fill="#626262"
                />
              </svg>
            }
            className={css({
              width: '160px',
              padding: '10px 0px 10px 32px !important',
              margin: '0 16px 0 0',
              border: '1px solid var(--grey300)',
              borderRadius: '8px',
              fontSize: '0.875rem',
            })}
            dateFormat="yyyy.MM.dd"
            selected={new Date(formData.date.value)}
            onChange={(date) => {
              setFormData((prev: any) => {
                const prevFormData = { ...prev };
                const newFormData = {
                  ...prevFormData,
                  date: {
                    value: date
                      ? `${date.getFullYear()}-${numberZeroFillFormat(
                          date.getMonth() + 1,
                          2,
                        )}-${numberZeroFillFormat(date.getDate(), 2)}`
                      : '',
                  },
                };

                return newFormData;
              });
            }}
          />
          <Select
            name={'startTime'}
            className={css({
              width: '120px',
              backgroundColor: 'var(--white100)',
              margin: '0 4px 0 0',
            })}
            onChange={onChangeFormData}
            value={formData.startTime.value}
          >
            {startTimeList.map((time, index) => {
              return <option key={time + index}>{time}</option>;
            })}
          </Select>
          ~
          <Select
            name={'endTime'}
            className={css({
              width: '120px',
              backgroundColor: 'var(--white100)',
              margin: '0 0 0 4px',
            })}
            onChange={onChangeFormData}
            value={formData.endTime.value}
          >
            {endTimeList.map((time, index) => {
              return <option key={time + index}>{time}</option>;
            })}
          </Select>
        </div>
      </div>
    </div>
  );
};

const LessonTypeContainer = ({
  formData,
  onChangeFormData,
}: Pick<Props, 'formData' | 'onChangeFormData'>) => {
  return (
    <div className={css({ margin: '0 0 20px' })}>
      <div>레슨유형</div>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          margin: '12px 0 0 0',
        })}
      >
        <InputContainer
          id="regular"
          label="정규레슨"
          className={css({ margin: '0 12px 0 0' })}
        >
          <Input.TextField
            type="radio"
            name="isRegularLesson"
            value="Y"
            className={css({ width: 'auto', margin: '0 6px 0 2px' })}
            defaultChecked={formData.isRegularLesson.value === 'Y'}
            onChange={onChangeFormData}
          />
        </InputContainer>
        <InputContainer
          id="additional"
          label="보강레슨"
          className={css({ margin: '0 12px 0 0' })}
        >
          <Input.TextField
            type="radio"
            name="isRegularLesson"
            value="N"
            className={css({ width: 'auto', margin: '0 6px 0 2px' })}
            defaultChecked={formData.isRegularLesson.value === 'N'}
            onChange={onChangeFormData}
          />
        </InputContainer>
      </div>
    </div>
  );
};

const IsAttendanceContainer = ({
  formData,
  onChangeFormData,
}: Pick<Props, 'formData' | 'onChangeFormData'>) => {
  return (
    <div className={css({ margin: '0 0 20px' })}>
      <div>출석현황</div>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          margin: '12px 0 0 0',
        })}
      >
        <InputContainer
          id="before"
          label="시작전"
          className={css({ margin: '0 12px 0 0' })}
        >
          <Input.TextField
            type="radio"
            name="isAttendance"
            value="before"
            className={css({ width: 'auto', margin: '0 6px 0 2px' })}
            onChange={onChangeFormData}
          />
        </InputContainer>
        <InputContainer
          id="attendance"
          label="출석"
          className={css({ margin: '0 12px 0 0' })}
        >
          <Input.TextField
            type="radio"
            name="isAttendance"
            value="attendance"
            className={css({ width: 'auto', margin: '0 6px 0 2px' })}
            onChange={onChangeFormData}
          />
        </InputContainer>
        <InputContainer
          id="absent"
          label="결석"
          className={css({ margin: '0 12px 0 0' })}
        >
          <Input.TextField
            type="radio"
            name="isAttendance"
            value="absent"
            className={css({ width: 'auto', margin: '0 6px 0 2px' })}
            onChange={onChangeFormData}
          />
        </InputContainer>
      </div>
    </div>
  );
};

const SelectContainer = ({
  name,
  label,
  list,
  formData,
  onChangeFormData,
}: { name: string; label: string; list: any } & Pick<
  Props,
  'formData' | 'onChangeFormData'
>) => {
  return (
    <div className={css({ margin: '0 0 20px' })}>
      <div>{label}</div>
      <Select
        name={name}
        className={css({
          width: '30%',
          margin: '12px 0 0 0',
          backgroundColor: 'var(--white100)',
        })}
        defaultValue={formData[name].value}
        onChange={onChangeFormData}
      >
        {list?.map(({ value, label }: any) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
    </div>
  );
};

const InputWrapper = styled(Input, {
  base: {
    margin: '0 0 20px 0',

    '& label': {
      display: 'block',
    },
  },
});
const InputContainer = styled(Input, {
  base: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
const TextField = styled(Input.TextField, {
  base: {
    width: '30%',
    padding: '10px 0 10px 10px',
    margin: '12px 0 0 0',
  },
});

export default ScheduleDrawerInputField;
