import { Select } from '@components/index';
import { ChangeEventHandler, useMemo } from 'react';

type CoachListType = {
  data: [{
    id: number;
    name: string;
  }]
}

// TODO any
type Props = {
  onChangeFormData: ChangeEventHandler<HTMLSelectElement>;
  coachList: {
    data: CoachListType
  };
}

const CoachSelectContainer = ({ onChangeFormData, coachList }: Props) =>{

  const { data } = useMemo(() => coachList, [coachList]);
  const list = data?.data;

  return(
    <Select
      name={'coach'}
      width={'calc(50% - 4px)'}
      defaultValue={'default'}
      onChange={onChangeFormData}
    >
      <option value={'default'}>코치 선택</option>
      {list && list.length > 0 && list.map(({ id, name }) => <option key={id} value={id}>{name}</option> )}
    </Select>
  )
}

export default CoachSelectContainer;