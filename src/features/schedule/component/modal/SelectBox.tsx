import { Select } from '@/shared/components/index';
import { CommonListType } from '@features/schedule/type/data.type';
import { useState } from 'react';
import { UseInputType } from 'src/types';

type Props = {
  type: string;
  list: CommonListType;
  onChangeFormData: UseInputType<HTMLSelectElement>;
  value?: string;
};

const ScheduleModalSelectBox = ({
  type,
  list,
  onChangeFormData,
  value,
}: Props) => {
  const [dataValue] = useState<string>(value || '');
  return (
    <Select
      name={type}
      className="w-4/5"
      defaultValue={dataValue}
      onChange={onChangeFormData}
    >
      {list?.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </Select>
  );
};

export default ScheduleModalSelectBox;
