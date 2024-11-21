import { css } from 'styled-system/css';

type Props = {
  dateKr: string;
};

const RowHeader = ({ dateKr }: Props) => {
  return (
    <div
      className={css({
        width: '8%',

        '& div': {
          borderBottom: '1px solid var(--black100)',
          borderRight: '1px solid var(--black100)',
        },
      })}
    >
      <div>코치</div>
      <div>{dateKr}</div>
    </div>
  );
};

export default RowHeader;
