import Input from '@components/common/Input';
import styled from '@emotion/styled';
import { ChangeEventHandler } from 'react';

type Props = {
  onChangeFormData: ChangeEventHandler<HTMLInputElement>;
}

const LessonCountOfWeekInputRadioContainer = ({ onChangeFormData }: Props) =>{
  return(
    <div css={{ display: 'flex', alignItems: 'center' }}>
      <InputContainer
        id={'1'}
        label={'1회'}
        css={{
          margin: '0 12px 0 0'
        }}
      >
        <Input.TextField
          type={'radio'}
          name={'lessonCountOfWeek'}
          css={{ width: 'auto', margin: '0 6px 0 2px'  }}
          value={1}
          onChange={onChangeFormData}
          defaultChecked
        />
      </InputContainer>
      <InputContainer
        id={'2'}
        label={'2회'}
        css={{
          margin: '0 12px 0 0'
        }}
      >
        <Input.TextField
          type={'radio'}
          name={'lessonCountOfWeek'}
          value={2}
          css={{ width: 'auto', margin: '0 6px 0 2px' }}
          onChange={onChangeFormData}
        />
      </InputContainer>
      <InputContainer
        id={'3'}
        label={'3회'}
        css={{
          margin: '0 12px 0 0'
        }}
      >
        <Input.TextField
          type={'radio'}
          name={'lessonCountOfWeek'}
          css={{ width: 'auto', margin: '0 6px 0 2px'  }}
          value={3}
          onChange={onChangeFormData}
        />
      </InputContainer>
      <InputContainer
        id={'4'}
        label={'4회'}
      >
        <Input.TextField
          type={'radio'}
          name={'lessonCountOfWeek'}
          css={{ width: 'auto', margin: '0 6px 0 2px'  }}
          value={4}
          onChange={onChangeFormData}
        />
      </InputContainer>
    </div>
  )
}

const InputContainer = styled(Input)({
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'flex-end',
  alignItems: 'center'
});

export default LessonCountOfWeekInputRadioContainer;