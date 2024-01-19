import { useState } from "react";
import WeekdaySchedule from "./WeekdaySchedule";
import WeekendSchedule from "./WeekendSchedule";

const DaySchedule = () => {

  // 요일 공통 6개를 가져오면 됌
  const [coach] = useState([
    {
      id: 'coach1',
      name: 'Jason',
      color: 'var(--green100)',
    },
    {
      id: 'coach2',
      name: 'Martin',
      color: 'var(--purple100)',
    },
    {
      id: 'coach3',
      name: 'Alice',
      color: 'var(--blue100)',
    },
    {
      id: 'coach4',
      name: 'Mark',
      color: 'var(--red100)',
    },
    {
      id: 'coach5',
      name: 'Haward',
      color: 'var(--yellow100)',
    }
  ])

  // 평일 > 18시 이후로만

  // 주말 > 근무시간 이후로만

  return(
    <div css={{ position: 'relative', width: '100%', height: 'calc(100% - 64px)' }}>
      <div css={{ padding: '0 0 12px 0' }}>
        <ul css={{ display: 'flex' }}>
          {coach.map((el) => (
            <li key={el.id} css={{ backgroundColor: el.color, color: 'var(--white100)', padding: '8px 16px', borderRadius: '8px', margin: '0 8px 0 0' }}>
              <span>{el.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div css={{ position: 'relative', display: 'flex', width: '100%', height: 'calc(100% - 48px)' }}>
        <WeekdaySchedule
          coach={coach}
        />
        <WeekendSchedule />
      </div>
    </div>
  )
}

export default DaySchedule;