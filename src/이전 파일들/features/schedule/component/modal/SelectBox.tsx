import { Select } from 'src/이전 파일들/components/index';
import { CommonListType } from '@/이전 파일들/features/schedule/type/data.type';
import { useState } from 'react';
import { UseInputType } from 'src/이전 파일들/types';

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
      width={'80%'}
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
