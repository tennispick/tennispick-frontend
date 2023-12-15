import Input from '@components/common/Input';
import { ScheduleDataType } from '@components/schedule/type';
import styled from '@emotion/styled';
import { ChangeEventHandler, useMemo } from 'react';

type Props = {
  data: ScheduleDataType;
  onChangeFormData: ChangeEventHandler<HTMLInputElement>;
}

const LessonTimeInputRadioContainer = ({ data, onChangeFormData }: Props) =>{

  const { lesson, lessonTime } = data;

  const isChecked = (): boolean => {

    if((lesson === 'default' && lessonTime === 'default') || (lesson !== 'default' && lessonTime === '20')) return true;
    return false;
  }

  return(
    <div css={{ display: 'flex', alignItems: 'center' }}>
      <InputContainer
        id={'lessonTime'}
        label={'수강권 시간'}
        css={{
          margin: '0 12px 0 0'
        }}
      >
        <Input.TextField
          type={'radio'}
          name={'lessonTime'}
          css={{ width: 'auto', margin: '0 6px 0 2px'  }}
          value={'default'}
          onChange={onChangeFormData}
          disabled={lesson === 'default'}
          checked={(lesson !== 'default' && lessonTime === 'default')}
        />
      </InputContainer>
      <InputContainer
        id={'20'}
        label={'20분'}
        css={{
          margin: '0 12px 0 0'
        }}
      >
        <Input.TextField
          type={'radio'}
          name={'lessonTime'}
          value={'20'}
          css={{ width: 'auto', margin: '0 6px 0 2px' }}
          onChange={onChangeFormData}
          checked={isChecked()}
        />
      </InputContainer>
      <InputContainer
        id={'30'}
        label={'30분'}
        css={{
          margin: '0 12px 0 0'
        }}
      >
        <Input.TextField
          type={'radio'}
          name={'lessonTime'}
          value={'30'}
          css={{ width: 'auto', margin: '0 6px 0 2px' }}
          onChange={onChangeFormData}
        />
      </InputContainer>
      <InputContainer
        id={'40'}
        label={'40분'}
      >
        <Input.TextField
          type={'radio'}
          name={'lessonTime'}
          value={'40'}
          css={{ width: 'auto', margin: '0 6px 0 2px' }}
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

export default LessonTimeInputRadioContainer;