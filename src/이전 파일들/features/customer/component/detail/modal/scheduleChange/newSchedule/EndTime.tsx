import { css, cx } from 'styled-system/css';
import ScheduleSelect from '../Select';

type Props = {
  className?: string;
  endTime: string;
  onChangeFormData?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const EndTimeSelect = ({ endTime, onChangeFormData, ...props }: Props) => {
  const data = [{ value: endTime, label: endTime }];

  const { className, ...rest } = props;

  const style = {
    width: '120px',
    height: '36px',
    lineHeight: '32px',
    margin: '0 0 0 12px',
    fontSize: '0.875rem',
  };

  return (
    <ScheduleSelect
      name="endTime"
      data={data ?? []}
      className={cx(css(style), className)}
      selected={endTime}
      onChangeHandler={onChangeFormData}
      {...rest}
    />
  );
};

export default EndTimeSelect;
