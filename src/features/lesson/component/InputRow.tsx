import Input from '@/shared/components/common/Input';
import clsx from 'clsx';

type Props = {
  rowHeadLabel: string;
  rowHeadClassName?: string;
  type?: string;
  defaultValue: string | number;
  maxLength?: number;
  selectChildren?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  requiredStatus?: boolean;
  requiredText?: string;
} & Pick<HTMLInputElement, 'name' | 'placeholder'>;

const InputRow = ({
  rowHeadLabel,
  rowHeadClassName,
  type = 'text',
  name,
  placeholder,
  defaultValue,
  maxLength,
  selectChildren,
  onChange,
  requiredStatus,
  requiredText,
}: Props) => {
  const className = clsx(
    'w-40 py-1 text-base font-semibold',
    rowHeadClassName
  );

  return (
    <div className="flex items-baseline min-h-[40px] mb-5">
      <div className={className}>{rowHeadLabel}</div>
      {type === 'text' && (
        <Input
          className="w-1/2 h-full"
        >
          <Input.TextField
            type={type}
            name={name}
            className="h-10"
            placeholder={placeholder}
            defaultValue={`${defaultValue}`}
            maxLength={maxLength}
            requiredStatus={requiredStatus}
            requiredText={requiredText}
            onChange={onChange}
          />
        </Input>
      )}
      {type === 'toggle' && (
        <ToggleInput
          id={name}
          name={name}
          checked={defaultValue === 'active' ? true : false}
          onChange={onChange}
        />
      )}
      {type === 'select' && selectChildren}
    </div>
  );
};

const ToggleInput = ({
  id,
  name,
  checked,
  onChange,
}: {
  id: string;
  name: string;
  checked: boolean;
  onChange: any;
}) => {
  return (
    <input
      id={`${id}`}
      name={name}
      type="checkbox"
      className="appearance-none rounded-3xl w-[54px] h-7 border-0 bg-[var(--grey100)] relative before:content-[''] before:absolute before:top-1 before:left-1 before:w-5 before:h-5 before:rounded-full before:bg-[var(--white100)] before:transition-[left] before:duration-200 before:linear checked:bg-[var(--blue500)] checked:before:left-[30px] disabled:border-[var(--grey100)] disabled:bg-[var(--grey100)] disabled:cursor-not-allowed disabled:before:bg-[var(--grey100)]"
      onClick={(e) => {
        const { name, checked } = e.currentTarget;
        const isActive = checked ? 'Y' : 'N';
        onChange({ target: { name, value: isActive } });
      }}
      defaultChecked={checked}
    />
  );
};

export default InputRow;
