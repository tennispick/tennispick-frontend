import { css, cx } from 'styled-system/css';
import ScheduleSelect from '../Select';
import { getTimeList } from 'src/이전 파일들/utils/date';

type Props = {
  className?: string;
  startTime: string;
  disabled: boolean;
  onChangeFormData: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const StartTimeSelect = ({
  startTime,
  disabled,
  onChangeFormData,
  ...props
}: Props) => {
  const data = getTimeList({ isInclude: true }).map((item) => ({
    value: `${item}`,
    label: item,
  }));

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
      name="startTime"
      data={data}
      className={cx(css(style), className)}
      selected={startTime}
      onChangeHandler={onChangeFormData}
      disabled={disabled}
      {...rest}
    />
  );
};

export default StartTimeSelect;
