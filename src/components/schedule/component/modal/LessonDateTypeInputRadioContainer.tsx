import Input from '@components/common/Input';
import styled from '@emotion/styled';
import { ChangeEventHandler } from 'react';

type Props = {
  onChangeFormData: ChangeEventHandler<HTMLInputElement>;
};

const LessonDateTypeInputRadioContainer = ({ onChangeFormData }: Props) => {
  return (
    <div css={{ display: 'flex', alignItems: 'center' }}>
      <InputContainer
        id={'date'}
        label={'날짜로 선택'}
        css={{
          margin: '0 12px 0 0',
        }}
      >
        <Input.TextField
          type={'radio'}
          name={'lessonDateType'}
          css={{ width: 'auto', margin: '0 6px 0 2px' }}
          value={'date'}
          onChange={onChangeFormData}
          defaultChecked
        />
      </InputContainer>
      <InputContainer id={'day'} label={'요일로 선택'}>
        <Input.TextField
          type={'radio'}
          name={'lessonDateType'}
          value={'day'}
          css={{ width: 'auto', margin: '0 6px 0 2px' }}
          onChange={onChangeFormData}
        />
      </InputContainer>
    </div>
  );
};

const InputContainer = styled(Input)({
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

export default LessonDateTypeInputRadioContainer;
