import { Input } from '@/shared/components/index';
import { UseInputType } from 'src/types';
import { twMerge } from 'tailwind-merge';

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
    <div className="flex items-center">
      {radioList?.map(({ label, value }, index) => {
        const isCheckLesson = type === 'lessonTime' && disabled;
        return (
          <InputContainer
            id={value as string}
            label={label}
            className="mr-3"
            key={value}
          >
            <Input.TextField
              type={'radio'}
              name={type}
              className="w-auto mr-1.5 ml-0.5"
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

const InputContainer = ({
  id,
  label,
  className,
  children,
}: {
  id: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={twMerge(
        'flex flex-row-reverse justify-end items-center',
        className,
      )}
    >
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
};

export default ScheduleModalRadioInput;
