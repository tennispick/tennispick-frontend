import { Select } from '@components/index';
import { ChangeEventHandler, useMemo } from 'react';

type CustomerListType = {
  data: [
    {
      id: number;
      name: string;
    },
  ];
};

// TODO any
type Props = {
  onChangeFormData: ChangeEventHandler<HTMLSelectElement>;
  customerList: {
    data: CustomerListType;
  };
};

const CustomerSelectContainer = ({ onChangeFormData, customerList }: Props) => {
  const { data } = useMemo(() => customerList, [customerList]);
  const list = data?.data;

  return (
    <Select
      name={'customer'}
      width={'calc(80% - 4px)'}
      defaultValue={'default'}
      onChange={onChangeFormData}
    >
      <option value={'default'}>회원 선택</option>
      {list &&
        list.length > 0 &&
        list.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
    </Select>
  );
};

export default CustomerSelectContainer;
