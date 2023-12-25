import { Select } from "@components/index";

type Props = {
  type: string;
  selectList: Array<{
    value: string;
    label: string;
  }> | undefined;
}

const ScheduleModalSelectBox = ({ selectList }: Props) => {

  console.log(selectList);

  return(
    <Select
      name={'coach'}
      width={'calc(70% - 4px)'}
      defaultValue={'default'}
    >
      {selectList?.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
    </Select>
  )
}

export default ScheduleModalSelectBox