import { CoachListData } from 'app/src/apis/coach/coach.type';
import { GET_WEEK_LIST_COUNT } from 'app/src/features/constant/schedule';
import { css } from 'styled-system/css';
import { Center, Flex } from 'styled-system/jsx';
import HeaderCoachData from './CoachData';

type Props = {
  coachList: CoachListData[];
  monthMaps: Map<string, Array<number>>;
};

const RowData = ({ coachList, monthMaps }: Props) => {
  return (
    <Flex
      className={css({
        width: '92%',
        borderBottom: '1px solid var(--black100)',
      })}
    >
      {Array.from(monthMaps).map(([month, monthDateList]) => {
        const dateLength = monthDateList.length;
        const rowDataWidth = `calc((100% / ${GET_WEEK_LIST_COUNT}) * ${dateLength})`;
        const monthDateWidth = `calc(100% / ${dateLength})`;

        return (
          <Flex
            key={month}
            className={css({ width: rowDataWidth, height: 'calc(100% + 1px)' })}
          >
            {monthDateList.map((date) => {
              return (
                <div key={date} className={css({ width: monthDateWidth })}>
                  <HeaderCoachData coachList={coachList} />
                  <Center
                    className={css({
                      height: '50%',
                      fontSize: '0.925rem',
                      borderTop: '1px solid var(--black100)',

                      _last: { borderRight: '1px solid var(--black100)' },
                    })}
                  >{`${month}/${date}`}</Center>
                </div>
              );
            })}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default RowData;
