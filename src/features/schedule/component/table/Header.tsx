import { GET_WEEK_LIST_COUNT } from '@features/constant/schedule';
import { STRING_WEEK_LIST_KR } from '@features/schedule/constants/schedule';
import { CoachListData } from '@apis/coach/coach.type';

type Props = {
  weekKrIndex: number;
  monthList: any;
  coach: CoachListData[];
};

const ScheduleTableHeader = ({ weekKrIndex, monthList, coach }: Props) => {
  return (
    <div css={{ display: 'flex', width: '100%' }}>
      <div css={{ width: '8%' }}>
        <div
          css={{
            borderBottom: '1px solid var(--black100)',
            borderRight: '1px solid var(--black100)',
          }}
        >
          코치
        </div>
        <div
          css={{
            borderRight: '1px solid var(--black100)',
            borderBottom: '1px solid var(--black100)',
          }}
        >
          {STRING_WEEK_LIST_KR[weekKrIndex]}
        </div>
      </div>
      <div css={{ display: 'flex', width: '92%' }}>
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
    <div css={{ display: 'flex' }}>
      {coach.map((el: any) => (
        <div
          key={el.id}
          css={{
            width: `calc(100%/${coach.length})`,
            textAlign: 'center',
            borderBottom: '1px solid var(--black100)',
            borderRight: '1px solid var(--grey1000)',

            '&:last-child': {
              borderRight: '1px solid var(--black100)',
            },
          }}
        >
          {el.name.charAt(0)}
        </div>
      ))}
    </div>
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
          <div
            key={month}
            css={{
              display: 'flex',
              width: `calc((100%/${weekListCount})*${monthDateList.length})`,
            }}
          >
            {monthDateList.map((date: number) => {
              return (
                <div
                  key={date}
                  css={{ width: `calc(100%/${monthDateList.length})` }}
                >
                  <ScheduleTableHeader.CoachContainer coach={coach} />
                  <div
                    css={{
                      textAlign: 'center',
                      borderBottom: '1px solid var(--black100)',
                      borderRight: '1px solid var(--black100)',
                    }}
                  >
                    {month}/{date}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

ScheduleTableHeader.CoachContainer = CoachContainer;
ScheduleTableHeader.MonthContainer = MonthContainer;
export default ScheduleTableHeader;
