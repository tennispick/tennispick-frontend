import { Select } from '@components/index';
import { ChangeEventHandler, useMemo } from 'react';

type LessonListType = {
  data: [{
    id: number;
    name: string;
  }]
}

// TODO any
type Props = {
  onChangeFormData: ChangeEventHandler<HTMLSelectElement>;
  lessonList: {
    data: LessonListType
  };
}

const LessonSelectContainer = ({ onChangeFormData, lessonList }: Props) =>{

  const { data } = useMemo(() => lessonList, [lessonList]);
  const list = data?.data;

  return(
    <Select
      name={'lesson'}
      width={'calc(80% - 4px)'}
      defaultValue={'default'}
      onChange={onChangeFormData}
    >
      <option value={'default'}>수강권 선택</option>
      {list && list.length > 0 && list.map(({ id, name }) => <option key={id} value={id}>{name}</option> )}
    </Select>
  )
}

export default LessonSelectContainer;