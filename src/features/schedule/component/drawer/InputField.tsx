import DatePicker from 'react-datepicker';
import { Input, Select } from '@/shared/components/index';
import { useGetCoachListQuery } from '@features/coach/query/coachQuery';
import { useLessonListQuery } from '@features/lesson/query/LessonQuery';
import { useCourtListQuery } from '@features/court/query/courtQuery';
import { getTimeList } from 'src/shared/utils/date';
import { useEffect, useMemo } from 'react';
import { numberZeroFillFormat } from 'src/shared/utils/numberForm';
import Loading from '@/shared/components/common/Loading';

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

  if (!lessonList) return <Loading />;

  const defaultLessonValue =
    lessonList.find(({ id }) => id === formData.lesson.value)?.name ||
    lessonList[0]?.name;

  return (
    <div className="h-full">
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
        <Input.TextField
          name="customerName"
          defaultValue={customerName}
          disabled={true}
          className="w-[30%] h-10 py-2.5 pl-2.5 mt-3"
        />
      </InputWrapper>
      <InputWrapper label="수강권">
        <Input.TextField
          name="lesson"
          defaultValue={defaultLessonValue}
          disabled={true}
          className="w-[30%] h-10 py-2.5 pl-2.5 mt-3"
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
    </div>
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
    <div className="mb-5">
      <div>스케줄 일정</div>
      <div className="mt-3">
        <div className="flex items-center">
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
                className="z-10"
              >
                <path
                  d="M2.16667 17.3334C1.70833 17.3334 1.31597 17.1702 0.989583 16.8438C0.663194 16.5174 0.5 16.1251 0.5 15.6667V4.00008C0.5 3.54175 0.663194 3.14939 0.989583 2.823C1.31597 2.49661 1.70833 2.33341 2.16667 2.33341H3V0.666748H4.66667V2.33341H11.3333V0.666748H13V2.33341H13.8333C14.2917 2.33341 14.684 2.49661 15.0104 2.823C15.3368 3.14939 15.5 3.54175 15.5 4.00008V15.6667C15.5 16.1251 15.3368 16.5174 15.0104 16.8438C14.684 17.1702 14.2917 17.3334 13.8333 17.3334H2.16667ZM2.16667 15.6667H13.8333V7.33341H2.16667V15.6667ZM2.16667 5.66675H13.8333V4.00008H2.16667V5.66675Z"
                  fill="#626262"
                />
              </svg>
            }
            className="w-40 py-2.5 pl-8 mr-4 border border-gray-300 rounded-lg text-sm"
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
            className="w-[120px] h-[43px] bg-white mr-1"
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
            className="w-[120px] h-[43px] bg-white ml-1"
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
    <div className="mb-5">
      <div>레슨유형</div>
      <div className="flex items-center mt-3">
        <InputContainer
          id="regular"
          label="정규레슨"
          className="mr-3"
        >
          <Input.TextField
            type="radio"
            name="isRegularLesson"
            value="Y"
            className="w-auto mr-1.5 ml-0.5 border border-red-500"
            defaultChecked={formData.isRegularLesson.value === 'Y'}
            onChange={onChangeFormData}
          />
        </InputContainer>
        <InputContainer
          id="additional"
          label="보강레슨"
          className="mr-3"
        >
          <Input.TextField
            type="radio"
            name="isRegularLesson"
            value="N"
            className="w-auto mr-1.5 ml-0.5"
            defaultChecked={formData.isRegularLesson.value === 'N'}
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
    <div className="mb-5">
      <div>{label}</div>
      <Select
        name={name}
        className="w-[30%] mt-3 bg-white"
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

const InputWrapper = ({ label, children }: { label: string; children: React.ReactNode }) => {
  return (
    <div className="mb-5">
      <label className="block">{label}</label>
      {children}
    </div>
  );
};

const InputContainer = ({ id, label, className, children }: { id: string; label: string; className?: string; children: React.ReactNode }) => {
  return (
    <div className={twMerge("flex flex-row-reverse justify-end items-center", className)}>
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
};

export default ScheduleDrawerInputField;