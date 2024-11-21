import { checkOnTime } from 'app/src/features/schedule/util/time';
import { css } from 'styled-system/css';

type Props = {
  startTime: string;
};

const RowHeader = ({ startTime }: Props) => {
  const highLightStartTime = checkOnTime(startTime);

  return (
    <div
      className={css({
        width: '8%',
        borderBottom: '1px solid var(--black100)',
        borderRight: '1px solid var(--black100)',
        color: 'var(--black100)',
        backgroundColor: highLightStartTime
          ? 'var(--grey100)'
          : 'var(--white100)',
      })}
    >
      {startTime}
    </div>
  );
};

export default RowHeader;
