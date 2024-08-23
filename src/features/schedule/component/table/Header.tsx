import { GET_WEEK_LIST_COUNT } from '@features/constant/schedule';
import { STRING_WEEK_LIST_KR } from '@features/schedule/constants/schedule';
import { CoachListData } from '@apis/coach/coach.type';
import { Flex } from 'styled-system/jsx';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

type Props = {
  weekKrIndex: number;
  monthList: any;
  coach: CoachListData[];
};

const ScheduleTableHeader = ({ weekKrIndex, monthList, coach }: Props) => {
  return (
    <div className={flex({ width: '100%' })}>
      <div className={css({ width: '8%' })}>
        <div
          className={css({
            borderBottom: '1px solid var(--black100)',
            borderRight: '1px solid var(--black100)',
          })}
        >
          코치
        </div>
        <div
          className={css({
            borderBottom: '1px solid var(--black100)',
            borderRight: '1px solid var(--black100)',
          })}
        >
          {STRING_WEEK_LIST_KR[weekKrIndex]}
        </div>
      </div>
      <div className={flex({ width: '92%' })}>
        <ScheduleTableHeader.MonthContainer
          weekListCount={GET_WEEK_LIST_COUNT}
          coach={coach}
          monthList={monthList}
        />
      </div>
    </div>
  );
};

const CoachContainer = ({ coach }: any) => {
  return (
    <Flex>
      {coach.map((el: any) => (
        <div
          key={el.id}
          className={css({
            width: `calc(100%/${coach.length})`,
            textAlign: 'center',
            borderBottom: '1px solid var(--black100)',
            borderRight: '1px solid var(--grey1000)',

            _last: {
              borderRight: '1px solid var(--black100)',
            },
          })}
        >
          {el.name.charAt(0)}
        </div>
      ))}
    </Flex>
  );
};

type MonthProps = {
  weekListCount: number;
  coach: any;
  monthList: Map<string, Array<number>>;
};

const MonthContainer = ({ weekListCount, coach, monthList }: MonthProps) => {
  return (
    <>
      {Array.from(monthList).map(([month, monthDateList]) => {
        return (
          <Flex
            key={month}
            className={css({
              width: `calc((100%/${weekListCount})*${monthDateList.length})`,
            })}
          >
            {monthDateList.map((date: number) => {
              return (
                <div
                  key={date}
                  className={css({
                    width: `calc(100%/${monthDateList.length})`,
                  })}
                >
                  <ScheduleTableHeader.CoachContainer coach={coach} />
                  <div
                    className={css({
                      textAlign: 'center',
                      borderBottom: '1px solid var(--black100)',
                      borderRight: '1px solid var(--black100)',
                    })}
                  >
                    {month}/{date}
                  </div>
                </div>
              );
            })}
          </Flex>
        );
      })}
    </>
  );
};

ScheduleTableHeader.CoachContainer = CoachContainer;
ScheduleTableHeader.MonthContainer = MonthContainer;
export default ScheduleTableHeader;
