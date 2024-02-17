import { Select } from '@styles/styles';
import styled from '@emotion/styled';
import {
  FormIndividualCreateType,
  FormIndividualHandlerType,
} from '@features/schedule/type/schedule.type';
import Image from 'next/image';
import { UseInputType } from 'src/types';
import TimeRange from '@components/common/TimeRange';
import AddIcon from '@icons/add_circle.svg';
import RemoveIcon from '@icons/remove.svg';
import DatePicker from 'react-datepicker';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useGetCourtList } from '@features/court/query/courtQuery';
import { useGetCoachListQuery } from '@features/coach/query/coachQuery';
import { dayList } from '@utils/day';

type Props = {
  scheduleType: string;
  lesson: string;
  formData: FormIndividualCreateType[];
  onChangeFormData: UseInputType<HTMLInputElement | HTMLSelectElement>;
  setFormData: Dispatch<SetStateAction<FormIndividualCreateType[]>>;
};

const ScheduleModalRegularLessonIndividualCreateScheduleFormField = ({
  scheduleType,
  lesson,
  formData,
  setFormData,
}: Props) => {
  const { data: courtList } = useGetCourtList();
  const { data: coachList } = useGetCoachListQuery();

  const handleFormFieldChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) =>
      prev.map((item, idx) => {
        if (idx === index) {
          return {
            ...item,
            [name]: value,
          };
        }
        return item;
      }),
    );
  };

  const handleAppendScheduleList = () => {
    if (lesson === '') {
      alert('수강권을 먼저 선택해주세요.');
      return false;
    }

    // TODO
    if (formData.length >= 4) {
      alert('남은 수강횟수가 부족해요.');
      return false;
    }

    setFormData((prev: FormIndividualCreateType[]) => [
      ...prev,
      {
        lessonDateType: 'date', // 강습날짜 유형
        lessonTime: '20', // 강습시간
        weeklyLessonCount: '1', // 주 강습횟수
        coach: '', // 강습코치
        court: '', // 코트(장소)
        date: new Date(), // 스케줄 등록유형 (요일, 날짜)
        day: 'monday', // 요일
        startTime: '00:00', // 강습시간
        endTime: '00:20',
      },
    ]);
  };

  const handleRemoveScheduleList = (index: number) => {
    if (index === 0) return;
    setFormData((prev) => prev.filter((item, idx) => idx !== index));
  };

  return (
    <>
      {formData?.map((item: FormIndividualCreateType, index: number) => {
        return (
          <div
            key={index}
            css={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              margin: '0 0 12px 0',
            }}
          >
            <div css={{ position: 'relative', width: '100%' }}>
              <InputContainer>
                <ScheduleModalRegularLessonIndividualCreateScheduleFormField.LessonDateType
                  index={index}
                  handleFormFieldChange={handleFormFieldChange}
                />
                <ScheduleModalRegularLessonIndividualCreateScheduleFormField.LessonTime
                  index={index}
                  handleFormFieldChange={handleFormFieldChange}
                />
                <ScheduleModalRegularLessonIndividualCreateScheduleFormField.WeeklyLessonCount
                  index={index}
                  handleFormFieldChange={handleFormFieldChange}
                />
                <ScheduleModalRegularLessonIndividualCreateScheduleFormField.Coach
                  index={index}
                  handleFormFieldChange={handleFormFieldChange}
                  coachList={coachList}
                />
                <ScheduleModalRegularLessonIndividualCreateScheduleFormField.Court
                  index={index}
                  handleFormFieldChange={handleFormFieldChange}
                  courtList={courtList}
                />
                <ScheduleModalRegularLessonIndividualCreateScheduleFormField.Schedule
                  index={index}
                  item={item}
                  scheduleType={scheduleType}
                  setFormData={setFormData}
                  handleAppendScheduleList={handleAppendScheduleList}
                  handleRemoveScheduleList={handleRemoveScheduleList}
                />
              </InputContainer>
            </div>
          </div>
        );
      })}
    </>
  );
};

const LessonDateType = ({
  index,
  handleFormFieldChange,
}: FormIndividualHandlerType) => {
  return (
    <Select
      name={'lessonDateType'}
      width={'12%'}
      height={'40px'}
      padding={'0 0 0 8px'}
      margin={'0 6px 0 0'}
      onChange={(e) => handleFormFieldChange(index, e)}
    >
      <option value={'date'}>날짜로 선택</option>
      <option value={'day'}>요일로 선택</option>
    </Select>
  );
};

const LessonTime = ({
  index,
  handleFormFieldChange,
}: FormIndividualHandlerType) => {
  return (
    <Select
      name={'lessonTime'}
      width={'12%'}
      minWidth={'auto'}
      height={'40px'}
      padding={'0 0 0 8px'}
      margin={'0 6px 0 0'}
      onChange={(e) => handleFormFieldChange(index, e)}
      defaultValue={'20'}
    >
      <option value={'0'}>수강권 시간</option>
      <option value={'20'}>20분</option>
      <option value={'30'}>30분</option>
      <option value={'40'}>40분</option>
    </Select>
  );
};

const WeeklyLessonCount = ({
  index,
  handleFormFieldChange,
}: FormIndividualHandlerType) => {
  return (
    <Select
      name={'weeklyLessonCount'}
      width={'12%'}
      minWidth={'auto'}
      height={'40px'}
      padding={'0 0 0 8px'}
      margin={'0 6px 0 0'}
      onChange={(e) => handleFormFieldChange(index, e)}
    >
      <option value={'1'}>1회</option>
      <option value={'2'}>2회</option>
      <option value={'3'}>3회</option>
      <option value={'4'}>4회</option>
    </Select>
  );
};

const Coach = ({
  index,
  handleFormFieldChange,
  coachList,
}: FormIndividualHandlerType & {
  coachList: any;
}) => {
  return (
    <Select
      name={'coach'}
      width={'12%'}
      height={'40px'}
      padding={'0 0 0 8px'}
      margin={'0 6px 0 0'}
      onChange={(e) => handleFormFieldChange(index, e)}
    >
      <option value={''}>코치 선택</option>
      {coachList.map((item: { [key: string]: string }, index: number) => {
        return (
          <option key={index} value={item.id}>
            {item.name}
          </option>
        );
      })}
    </Select>
  );
};

const Court = ({
  index,
  handleFormFieldChange,
  courtList,
}: FormIndividualHandlerType & {
  courtList: Array<{ [key: string]: string }>;
}) => {
  return (
    <Select
      name={'court'}
      width={'12%'}
      height={'40px'}
      padding={'0 0 0 8px'}
      margin={'0 6px 0 0'}
      onChange={(e) => handleFormFieldChange(index, e)}
    >
      <option value={''}>코트 선택</option>
      {courtList.map((item: { [key: string]: string }, index: number) => {
        return (
          <option key={index} value={item.id}>
            {item.name}
          </option>
        );
      })}
    </Select>
  );
};

const Schedule = ({
  index,
  scheduleType,
  item,
  setFormData,
  handleAppendScheduleList,
  handleRemoveScheduleList,
}: {
  index: number;
  scheduleType: string;
  item: FormIndividualCreateType;
  setFormData: Dispatch<SetStateAction<FormIndividualCreateType[]>>;
  handleAppendScheduleList: () => void;
  handleRemoveScheduleList: (id: number) => void;
}) => {
  return (
    <>
      <div
        css={{
          position: 'relative',
          width: '15%',
        }}
      >
        {item.lessonDateType === 'date' ? (
          <DatePicker
            showIcon
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
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
            selected={item.date}
            dateFormat="yyyy.MM.dd"
            onChange={(date) => {
              setFormData((prev) => {
                const prevDate = [...prev];
                prevDate[index].date = date as Date;
                return [...prevDate];
              });
            }}
          />
        ) : (
          <Select
            name={'day'}
            width={'100%'}
            css={{
              padding: '10px 0px 10px 16px',
            }}
            onChange={(e) => {
              const { value } = e.target;
              setFormData((prev) => {
                const prevDate = [...prev];
                prevDate[index].day = value;
                return [...prevDate];
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
      </div>
      <div
        css={{
          position: 'relative',
          width: '25%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TimeRange
          index={index}
          scheduleType={scheduleType}
          lessonTime={item.lessonTime}
          weeklyLessonCount={item.weeklyLessonCount}
          setIndividualFormData={setFormData}
          css={{
            margin: '0 0 0 12px',
          }}
        />
        <div
          css={{
            width: '48px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            margin: '0 0 0 8px',
          }}
        >
          <Image
            src={AddIcon}
            alt={'add iocn'}
            width={24}
            height={24}
            css={{
              cursor: 'pointer',
            }}
            onClick={handleAppendScheduleList}
          />
          {index > 0 && (
            <Image
              src={RemoveIcon}
              alt={'remove iocn'}
              width={24}
              height={24}
              css={{
                cursor: 'pointer',
                margin: '0 0 0 4px',
              }}
              onClick={() => handleRemoveScheduleList(index)}
            />
          )}
        </div>
      </div>
    </>
  );
};

const InputContainer = styled.div({
  width: '100%',
  position: 'relative',
  margin: '0 0 8px 0',
  display: 'flex',
  alignItems: 'center',
});

ScheduleModalRegularLessonIndividualCreateScheduleFormField.LessonDateType =
  LessonDateType;
ScheduleModalRegularLessonIndividualCreateScheduleFormField.LessonTime =
  LessonTime;
ScheduleModalRegularLessonIndividualCreateScheduleFormField.WeeklyLessonCount =
  WeeklyLessonCount;
ScheduleModalRegularLessonIndividualCreateScheduleFormField.Coach = Coach;
ScheduleModalRegularLessonIndividualCreateScheduleFormField.Court = Court;
ScheduleModalRegularLessonIndividualCreateScheduleFormField.Schedule = Schedule;

export default ScheduleModalRegularLessonIndividualCreateScheduleFormField;
