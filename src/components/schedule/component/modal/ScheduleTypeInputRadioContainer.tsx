import Input from '@components/common/Input';
import styled from '@emotion/styled';
import { ChangeEventHandler } from 'react';

type Props = {
  onChangeFormData: ChangeEventHandler<HTMLInputElement>;
};

const ScheduleTypeInputRadioContainer = ({ onChangeFormData }: Props) => {
  return (
    <div css={{ display: 'flex', alignItems: 'center' }}>
      <InputContainer
        id={'all'}
        label={'일괄등록'}
        css={{
          margin: '0 12px 0 0',
        }}
      >
        <Input.TextField
          type={'radio'}
          name={'scheduleType'}
          css={{ width: 'auto', margin: '0 6px 0 2px' }}
          value={'all'}
          onChange={onChangeFormData}
          defaultChecked
        />
      </InputContainer>
      <InputContainer id={'each'} label={'개별등록'}>
        <Input.TextField
          type={'radio'}
          name={'scheduleType'}
          value={'each'}
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

export default ScheduleTypeInputRadioContainer;
