import { STRING_WEEK_LIST_KR } from '@features/schedule/constants/schedule';

type Props = {
  weekKrIndex: number;
  weekListCount: number;
  monthList: { [key: string]: Array<number> };
  coach: any;
};

const ScheduleTableHeader = ({
  weekKrIndex,
  weekListCount,
  monthList,
  coach,
}: Props) => {
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
          weekListCount={weekListCount}
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
  monthList: { [key: string]: Array<number> };
};

const MonthContainer = ({ weekListCount, coach, monthList }: MonthProps) => {
  return (
    <>
      {Object.keys(monthList).map((month) => {
        return (
          <div
            key={month}
            css={{
              display: 'flex',
              width: `calc((100%/${weekListCount})*${monthList[month].length})`,
            }}
          >
            {monthList[month].map((day) => {
              return (
                <div key={day} css={{ width: `calc(100%/${month.length})` }}>
                  <ScheduleTableHeader.CoachContainer coach={coach} />
                  <div
                    css={{
                      textAlign: 'center',
                      borderBottom: '1px solid var(--black100)',
                      borderRight: '1px solid var(--black100)',
                    }}
                  >
                    {month}/{day}
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
