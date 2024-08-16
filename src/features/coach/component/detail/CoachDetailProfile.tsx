import styled from '@emotion/styled';

import { Divider, Input, Select } from '@components/index';
import { ProfileManIcon, ProfileWomanIcon } from '@icons/index';
import { CoachDetailData } from '@apis/coach/coach.type';
import { birthSplit } from '@utils/split';
import { transferSexType } from '@utils/switch';
import { useColor } from 'react-color-palette';

import ColorPalettePicker from '@widgets/ColorPalettePicker';

type Props = {
  data: CoachDetailData;
};

const CoachDetailProfile = ({ data }: Props) => {
  const { name, email, phone, sex, position, birth } = data;
  const [year, month, date] = birthSplit(birth);
  const [color, setColor] = useColor('#000000');

  return (
    <section
      css={{
        width: '30%',
        height: '100%',
        padding: '0 32px 0 0',
      }}
    >
      <div>
        <Input
          label=" "
          id="profileImage"
          variant="file"
          src={sex === 'man' ? ProfileManIcon.src : ProfileWomanIcon.src}
          css={{ width: '10rem', height: '10rem', margin: '0 auto' }}
        >
          <Input.TextField type={'file'} />
        </Input>
        <div
          css={{
            textAlign: 'center',
            margin: '20px 0',
            fontSize: '1.125rem',
            fontWeight: 600,
          }}
        >
          {email}
        </div>
        <div css={{ display: 'flex' }}>
          <StaticProfileContainer>
            <StaticProfileValue>{name}</StaticProfileValue>
            <StaticProfleKey>이름</StaticProfleKey>
          </StaticProfileContainer>
          <StaticProfileContainer>
            <StaticProfileValue>{transferSexType(sex)}</StaticProfileValue>
            <StaticProfleKey>성별</StaticProfleKey>
          </StaticProfileContainer>
          <StaticProfileContainer>
            <StaticProfileValue>{`${year}.${month}.${date}`}</StaticProfileValue>
            <StaticProfleKey>생년월일</StaticProfleKey>
          </StaticProfileContainer>
        </div>
      </div>
      <Divider margin="24px 0" />
      <ItemRow>
        <InputHead>코치 고유 색상</InputHead>
        <InputItem css={{ width: '40%' }}>
          <ColorPalettePicker color={color} setColor={setColor} />
        </InputItem>
      </ItemRow>
      <ItemRow>
        <InputHead>연락처</InputHead>
        <InputItem>
          <Input.TextField
            placeholder="연락처를 입력해주세요."
            defaultValue={phone}
          />
        </InputItem>
      </ItemRow>
      <ItemRow>
        <InputHead>비밀번호</InputHead>
        <InputItem>
          <Input.TextField placeholder="비밀번호를 입력해주세요." />
        </InputItem>
      </ItemRow>
      <ItemRow>
        <InputHead>비밀번호 확인</InputHead>
        <InputItem>
          <Input.TextField placeholder="비밀번호를 다시 입력해주세요." />
        </InputItem>
      </ItemRow>
      <ItemRow>
        <InputHead>직책</InputHead>
        <Select width={'40%'} value={position} onChange={() => {}}>
          <option>코치</option>
        </Select>
      </ItemRow>
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
  width: '35%',
  padding: '4px 0',
});
const InputItem = styled((props: any) => <Input {...props} />)({
  position: 'relative',
  width: '65%',
  height: '100%',
});
const StaticProfileContainer = styled.div({
  width: 'calc(100% / 3)',
  textAlign: 'center',
});

const StaticProfleKey = styled.div({
  color: 'var(--grey1500)',
});

const StaticProfileValue = styled.div({
  margin: '0 0 8px 0',
  fontSize: '1.125rem',
  fontWeight: 600,
});

export default CoachDetailProfile;
