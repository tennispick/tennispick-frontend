import styled from '@emotion/styled';

import { Divider, Input, Select } from '@components/index';
import { ProfileManIcon, ProfileWomanIcon } from '@icons/index';
import { CoachDetailData } from '@apis/coach/coach.type';
import { getYearList, getMonthList, getDayList } from '@utils/date';
import { birthSplit } from '@utils/split';

interface Props {
  data: CoachDetailData;
}

const PersonalData = ({ data }: Props) => {
  const { name, email, phone, sex, position, birth } = data;

  const [year, month, date] = birthSplit(birth);
  const { yearArray } = getYearList();
  const { monthArray } = getMonthList();
  const { dateArray } = getDayList();

  return (
    <section
      css={{
        width: '30%',
        height: '100%',
        padding: '0 32px 0 0',
      }}
    >
      <div css={{ height: '50%' }}>
        <Input
          label=" "
          id="profileImage"
          variant="file"
          src={sex === 'man' ? ProfileManIcon.src : ProfileWomanIcon.src}
        >
          <Input.TextField type={'file'} />
        </Input>
      </div>
      <Divider />
      <div>
        <ItemRow>
          <InputHead>이름</InputHead>
          <InputItem>
            <Input.TextField
              placeholder="성명을 입력해주세요."
              value={name}
              onChange={() => {}}
            />
          </InputItem>
        </ItemRow>
        <ItemRow>
          <InputHead>이메일</InputHead>
          <InputItem>
            <Input.TextField
              placeholder="이메일을 입력해주세요"
              value={email}
              onChange={() => {}}
            />
          </InputItem>
        </ItemRow>
        <ItemRow>
          <InputHead>생년월일</InputHead>
          <Select
            key="year"
            name="year"
            width="calc(25% - 4px)"
            defaultValue={year}
            onChange={() => {}}
          >
            {yearArray.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </Select>
          <Select
            key="month"
            name="month"
            width="calc(25% - 4px)"
            margin="0 6px"
            defaultValue={month}
            onChange={() => {}}
          >
            {monthArray.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </Select>
          <Select
            key="date"
            name="date"
            width="calc((60% / 3) - 4px)"
            defaultValue={date}
            onChange={() => {}}
          >
            {dateArray.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </Select>
        </ItemRow>
        <ItemRow>
          <InputHead>성별</InputHead>
          <Select width="40%" value={sex} disabled>
            <option value="man">남자</option>
            <option value="woman">여자</option>
          </Select>
        </ItemRow>
        <ItemRow>
          <InputHead>연락처</InputHead>
          <InputItem>
            <Input.TextField
              placeholder="연락처를 입력해주세요."
              value={phone}
              onChange={() => {}}
            />
          </InputItem>
        </ItemRow>
        <ItemRow>
          <InputHead>직책</InputHead>
          <Select width={'40%'} value={position} onChange={() => {}}>
            <option>코치</option>
          </Select>
        </ItemRow>
      </div>
    </section>
  );
};

const ItemRow = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: '46px',
  lineHeight: '30px',
  padding: '4px 12px',
  margin: '12px 0',
});
const InputHead = styled.div({
  fontSize: '1rem',
  fontWeight: '600',
  width: '25%',
  padding: '4px 0',
});
const InputItem = styled((props: any) => <Input {...props} />)({
  position: 'relative',
  width: '75%',
  height: '100%',
});

export default PersonalData;
