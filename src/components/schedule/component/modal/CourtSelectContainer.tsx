import { Select } from '@components/index';
import { ChangeEventHandler, useMemo } from 'react';

type CourtListType = {
  data: [{
    id: number;
    name: string;
  }]
}

// TODO any
type Props = {
  onChangeFormData: ChangeEventHandler<HTMLSelectElement>;
  courtList: {
    data: CourtListType
  };
}

const CourtSelectContainer = ({ onChangeFormData, courtList }: Props) =>{

  const { data } = useMemo(() => courtList, [courtList]);
  const list = data?.data;

  return(
    <Select
      name={'sex'}
      width={'calc(50% - 4px)'}
      defaultValue={'default'}
      onChange={onChangeFormData}
    >
      <option value={'default'}>코트 선택</option>
      {list && list.length > 0 && list.map(({ id, name }) => <option key={id} value={id}>{name}</option> )}
    </Select>
  )
}

export default CourtSelectContainer;