import { Select } from '@components/index';
import { LessonDetailData } from '../type/lesson.type';
import InputRow from './InputRow';

type Props = {
  data: LessonDetailData;
};

const LessonDetailInputField = ({ data }: Props) => {
  const {
    name,
    lessonCount,
    price,
    time,
    timesAweek,
    status,
    isWeekday,
    description,
  } = data;

  return (
    <div css={{ width: '50%' }}>
      <InputRow
        name={'name'}
        rowHeadLabel={'레슨권 이름'}
        placeholder={'레슨권 이름을 입력해주세요.'}
        defaultValue={name}
      />
      <InputRow
        name={'lessonCount'}
        rowHeadLabel={'총 레슨횟수'}
        placeholder={'총 레슨 횟수를 입력해주세요.'}
        defaultValue={lessonCount}
      />
      <InputRow
        name={'price'}
        rowHeadLabel={'가격'}
        placeholder={'레슨권의 가격을 입력해주세요.'}
        defaultValue={price}
      />
      <InputRow
        type="select"
        name="isWeekday"
        rowHeadLabel={'평일/주말 여부'}
        placeholder={'성명을 입력해주세요.'}
        defaultValue={isWeekday}
        selectChildren={
          <Select
            key={'sex'}
            name={'sex'}
            width={'25%'}
            defaultValue={isWeekday}
          >
            <option value={'weekday'}>평일</option>
            <option value={'weekend'}>주말</option>
          </Select>
        }
      />
      <InputRow
        name="time"
        rowHeadLabel={'1회 레슨시간'}
        placeholder={'1회당 레슨시간을 입력해주세요.'}
        defaultValue={time}
      />
      <InputRow
        name="timesAWeek"
        rowHeadLabel={'일주일 당 레슨횟수'}
        placeholder={'일주일 당 강습하는 레슨횟수를 입력해주세요.'}
        defaultValue={timesAweek}
      />
      <InputRow
        type="toggle"
        name="status"
        rowHeadLabel={'사용여부'}
        placeholder={'사용여부를 입력해주세요.'}
        defaultValue={status}
      />
      <InputRow
        name="description"
        rowHeadLabel={'레슨권 설명'}
        placeholder={'레슨권에 대한 설명을 입력해주세요.'}
        defaultValue={description}
        maxLength={50}
      />
    </div>
  );
};

export default LessonDetailInputField;
