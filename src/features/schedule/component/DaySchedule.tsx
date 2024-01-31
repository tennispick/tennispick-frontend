import { useState } from 'react';
import WeekdaySchedule from './WeekdaySchedule';
import WeekendSchedule from './WeekendSchedule';

type Props = {
  date: Date;
};

const DaySchedule = ({ date }: Props) => {

  const [coach] = useState([
    {
      id: 1,
      name: 'Jason',
      color: 'var(--green100)',
    },
    {
      id: 2,
      name: 'Martin',
      color: 'var(--purple100)',
    },
    {
      id: 3,
      name: 'Alice',
      color: 'var(--blue100)',
    },
    {
      id: 4,
      name: 'Mark',
      color: 'var(--red100)',
    },
    {
      id: 5,
      name: 'Haward',
      color: 'var(--yellow100)',
    },
  ]);

  return (
    <div css={{ position: 'relative', width: '100%', height: 'calc(100% - 64px)' }}>
      <div css={{ padding: '0 0 12px 0' }}>
        {/* <ul css={{ display: 'flex' }}>
          {coach.map((el) => (
            <li key={el.id} css={{ backgroundColor: el.color, color: 'var(--white100)', padding: '8px 16px', borderRadius: '8px', margin: '0 8px 0 0' }}>
              <span>{el.name}</span>
            </li>
          ))}
        </ul> */}
      </div>
      <div
        css={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          height: 'calc(100% - 48px)',
        }}
      >
        <WeekdaySchedule date={date} coach={coach} />
        <WeekendSchedule date={date} coach={coach} />
      </div>
    </div>
  );
};

export default DaySchedule;
