import { Input } from 'src/이전 파일들/components/index';
import { UseInputType } from 'src/이전 파일들/types';
import { css } from 'styled-system/css';
import { Flex, styled } from 'styled-system/jsx';

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
  value?: string;
};

const ScheduleModalRadioInput = ({
  type,
  radioList,
  onChangeFormData,
  disabled = false,
}: Props) => {
  return (
    <Flex alignItems="center">
      {radioList?.map(({ label, value }, index) => {
        const isCheckLesson = type === 'lessonTime' && disabled;
        return (
          <InputContainer
            id={value as string}
            label={label}
            className={css({ margin: '0 12px 0 0' })}
            key={value}
          >
            <Input.TextField
              type={'radio'}
              name={type}
              className={css({ width: 'auto', margin: '0 6px 0 2px' })}
              value={value}
              defaultChecked={!isCheckLesson ? index === 0 : index === 1}
              onChange={onChangeFormData}
              disabled={disabled}
            />
          </InputContainer>
        );
      })}
    </Flex>
  );
};

const InputContainer = styled(Input, {
  base: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default ScheduleModalRadioInput;
