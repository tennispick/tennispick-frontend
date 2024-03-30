import { Select } from '@components/index';
import { LessonDetailData } from '../type/lesson.type';
import InputRow from './InputRow';

type Props = {
  formData: {
    [K in keyof LessonDetailData]: {
      value: '';
      isRequired: boolean;
    };
  };
  onChangeFormData: any;
};

const LessonDetailInputField = ({ formData, onChangeFormData }: Props) => {
  const {
    name,
    lessonCount,
    price,
    time,
    timesAweek,
    status,
    type,
    isWeekday,
    description,
  } = formData;

  return (
    <div css={{ width: '50%' }}>
      <InputRow
        name={'name'}
        rowHeadLabel={'레슨권 이름'}
        placeholder={'레슨권 이름을 입력해주세요.'}
        defaultValue={name.value}
        onChange={onChangeFormData}
        requiredStatus={formData.name.isRequired}
        requiredText={'레슨권 이름이 입력되지 않았어요.'}
      />
      <InputRow
        name={'lessonCount'}
        rowHeadLabel={'총 레슨횟수'}
        placeholder={'총 레슨 횟수를 입력해주세요.'}
        defaultValue={lessonCount.value}
        onChange={onChangeFormData}
        requiredStatus={formData.lessonCount.isRequired}
        requiredText={'총 레슨 횟수를 입력되지 않았어요.'}
      />
      <InputRow
        name={'price'}
        rowHeadLabel={'가격'}
        placeholder={'레슨권의 가격을 입력해주세요.'}
        defaultValue={price.value}
        onChange={onChangeFormData}
        requiredStatus={formData.price.isRequired}
        requiredText={'레슨권의 가격이 입력되지 않았어요.'}
      />
      <InputRow
        type="select"
        name="isWeekday"
        rowHeadLabel={'평일/주말 여부'}
        placeholder={'평일/주말여부를 입력해주세요.'}
        defaultValue={isWeekday.value}
        selectChildren={
          <Select
            key="isWeekday"
            name="isWeekday"
            width={'25%'}
            defaultValue={isWeekday.value}
            onChange={onChangeFormData}
          >
            <option value={'weekday'}>평일</option>
            <option value={'weekend'}>주말</option>
          </Select>
        }
      />
      <InputRow
        type="select"
        name="type"
        rowHeadLabel={'레슨권 유형'}
        placeholder={'레슨권 유형을 입력해주세요.'}
        defaultValue={type.value}
        selectChildren={
          <Select
            key="type"
            name="type"
            width={'25%'}
            defaultValue={type.value}
            onChange={onChangeFormData}
          >
            <option value={'private'}>개인</option>
            <option value={'group'}>그룹</option>
          </Select>
        }
      />
      <InputRow
        name="time"
        rowHeadLabel={'1회 레슨시간'}
        placeholder={'1회당 레슨시간을 입력해주세요.'}
        defaultValue={time.value}
        onChange={onChangeFormData}
        requiredStatus={formData.time.isRequired}
        requiredText={'1회당 레슨시간이 입력되지 않았어요.'}
      />
      <InputRow
        name="timesAweek"
        rowHeadLabel={'일주일 당 레슨횟수'}
        placeholder={'일주일 당 강습하는 레슨횟수를 입력해주세요.'}
        defaultValue={timesAweek.value}
        onChange={onChangeFormData}
        requiredStatus={formData.timesAweek.isRequired}
        requiredText={'일주일 당 강습하는 레슨횟수가 입력되지 않았어요.'}
      />
      <InputRow
        type="toggle"
        name="status"
        rowHeadLabel={'사용여부'}
        placeholder={'사용여부를 입력해주세요.'}
        defaultValue={status.value}
        onChange={onChangeFormData}
      />
      <InputRow
        name="description"
        rowHeadLabel={'레슨권 설명'}
        placeholder={'레슨권에 대한 설명을 입력해주세요.'}
        defaultValue={description.value ? description.value : ''}
        maxLength={50}
        onChange={onChangeFormData}
      />
    </div>
  );
};

export default LessonDetailInputField;
