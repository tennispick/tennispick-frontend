import { Select } from "@components/index";

type Props = {
  type: string;
  selectList: Array<{
    value: string;
    label: string;
  }> | undefined;
}

const ScheduleModalSelectBox = ({ selectList }: Props) => {

  return(
    <Select
      name={'coach'}
      width={'calc(160px - 4px)'}
      defaultValue={'default'}
    >
      {selectList?.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
    </Select>
  )
}

export default ScheduleModalSelectBox