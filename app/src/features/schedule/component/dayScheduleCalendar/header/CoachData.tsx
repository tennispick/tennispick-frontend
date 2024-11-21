import { CoachListData } from 'app/src/apis/coach/coach.type';
import { css } from 'styled-system/css';
import { Flex } from 'styled-system/jsx';

type Props = {
  coachList: CoachListData[];
};

const HeaderCoachData = ({ coachList }: Props) => {
  const coachCount = coachList.length;

  return (
    <Flex className={css({ width: '100%', height: 'calc(50% - 1px)' })}>
      {coachList.map(({ id, name }) => (
        <div
          key={id}
          className={css({
            width: `calc(100% / ${coachCount})`,
            textAlign: 'center',
            fontSize: '0.825rem',
            borderRight: '1px solid var(--grey1000)',
          })}
        >
          {name.charAt(0)}
        </div>
      ))}
    </Flex>
  );
};

export default HeaderCoachData;
