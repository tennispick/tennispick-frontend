import Input from '@components/common/Input';
import styled from '@emotion/styled';
import { ChangeEventHandler } from 'react';

type Props = {
  onChangeFormData: ChangeEventHandler<HTMLInputElement>;
};

const LessonTypeInputRadioContainer = ({}: Props) => {
  return (
    <div css={{ display: 'flex', alignItems: 'center' }}>
      <InputContainer
        id={'regular'}
        label={'정규레슨'}
        css={{
          margin: '0 12px 0 0',
        }}
      >
        <Input.TextField
          type={'radio'}
          name={'lesson'}
          css={{ width: 'auto', margin: '0 6px 0 2px' }}
          value={'regular'}
          defaultChecked
        />
      </InputContainer>
      <InputContainer id={'class'} label={'보강레슨'}>
        <Input.TextField
          type={'radio'}
          name={'lesson'}
          value={'class'}
          css={{ width: 'auto', margin: '0 6px 0 2px' }}
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

export default LessonTypeInputRadioContainer;
