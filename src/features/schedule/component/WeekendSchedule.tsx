type Props = {
  coach: any;
  today: Date;
};

const WeekendSchedule = ({}: Props) => {
  // const dayWeekList = getDayOfWeek({ date: today, weekCount: GET_WEEK_LIST_COUNT, isWeekDay: false });

  return (
    <div css={{ position: 'relative', width: '50%' }}>
      <div
        css={{
          position: 'relative',
          fontSize: '1.25rem',
          fontWeight: 600,
          margin: '0 0 16px 0',
          color: 'var(--blue100)',
        }}
      >
        주말
      </div>
    </div>
  );
};

export default WeekendSchedule;
