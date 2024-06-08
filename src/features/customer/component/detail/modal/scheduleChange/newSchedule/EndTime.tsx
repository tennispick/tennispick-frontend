import ScheduleSelect from '../Select';

type Props = {
  endTime: string;
};

const EndTimeSelect = ({ endTime }: Props) => {
  const data = [{ value: endTime, label: endTime }];

  return (
    <ScheduleSelect
      name="endTime"
      data={data ?? []}
      css={{
        width: '120px',
        height: '36px',
        lineHeight: '32px',
        margin: '0 0 0 12px',
        fontSize: '0.875rem',
      }}
      selected={endTime}
      disabled={true}
    />
  );
};

export default EndTimeSelect;
