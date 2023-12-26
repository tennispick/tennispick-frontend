import { Input } from "@components/index";
import styled from "@emotion/styled";
import { ChangeEventHandler } from "react";

type Props = {
  type: string;
  radioList: Array<{
    label: string;
    value: string;
  }> | undefined;
  onChangeCommonFormData?: ChangeEventHandler<HTMLInputElement>;
}

const ScheduleModalRadioInput = ({ type, radioList, onChangeCommonFormData }: Props) => {
  return(
    <div css={{ display: 'flex', alignItems: 'center' }}>
      {radioList?.map(({ label, value }, index) => {
        return(
          <InputContainer
            id={value}
            label={label}
            css={{
              margin: '0 12px 0 0'
            }}
            key={value}
          >
            <Input.TextField
              type={'radio'}
              name={type}
              css={{ width: 'auto', margin: '0 6px 0 2px'  }}
              value={value}
              defaultChecked={index === 0}
              onChange={onChangeCommonFormData}
            />
          </InputContainer>
        )
      })}
    </div>
  )
};

const InputContainer = styled(Input)({
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'flex-end',
  alignItems: 'center'
});

export default ScheduleModalRadioInput;