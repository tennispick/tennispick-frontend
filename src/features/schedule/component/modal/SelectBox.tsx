import { Select } from '@components/index';
import { CommonListType } from '@features/schedule/type/data.type';
import { UseInputType } from 'src/types';

type Props = {
  type: string;
  list: CommonListType;
  onChangeFormData: UseInputType<HTMLSelectElement>;
};

const ScheduleModalSelectBox = ({ type, list, onChangeFormData }: Props) => {
  return (
    <Select
      name={type}
      width={'80%'}
      defaultValue={'default'}
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
