import { Input } from '@components/index';
import styled from '@emotion/styled';
import { UseInputType } from 'src/types';

type Props = {
  type: string;
  radioList:
    | Array<{
        label: string;
        value: string | number;
      }>
    | undefined;
  onChangeFormData: UseInputType<HTMLInputElement>;
  disabled?: boolean;
};

const ScheduleModalRadioInput = ({
  type,
  radioList,
  onChangeFormData,
  disabled = false,
}: Props) => {
  return (
    <div css={{ display: 'flex', alignItems: 'center' }}>
      {radioList?.map(({ label, value }, index) => {

        const isCheckLesson = type === 'lessonTime' && disabled;

        return (
          <InputContainer
            id={value as string}
            label={label}
            css={{
              margin: '0 12px 0 0',
            }}
            key={value}
          >
            <Input.TextField
              type={'radio'}
              name={type}
              css={{ width: 'auto', margin: '0 6px 0 2px' }}
              value={value}
              defaultChecked={!isCheckLesson ? index === 0 : index === 1}
              onChange={onChangeFormData}
              disabled={disabled}
            />
          </InputContainer>
        );
      })}
    </div>
  );
};

const InputContainer = styled(Input)({
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

export default ScheduleModalRadioInput;
