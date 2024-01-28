import { Select } from '@components/index';
import { UseInputType } from 'src/types';

type Props = {
  type: string;
  selectList:
    | Array<{
        value: string | number;
        label: string;
      }>
    | undefined;
  onChangeFormData: UseInputType<HTMLSelectElement>;
};

const ScheduleModalSelectBox = ({
  type,
  selectList,
  onChangeFormData,
}: Props) => {
  return (
    <Select
      name={type}
      width={'80%'}
      defaultValue={'default'}
      onChange={onChangeFormData}
    >
      {selectList?.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </Select>
  );
};

export default ScheduleModalSelectBox;
