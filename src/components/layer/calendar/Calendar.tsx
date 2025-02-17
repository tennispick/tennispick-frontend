import { useMemo } from 'react';
import { getWeekList } from '@utils/date';
import { STRING_WEEK_LIST_KR } from '@features/schedule/constants/schedule';
import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';
import { flex } from 'styled-system/patterns';

type Props = {
  day: Date;
};

const ModalCalendar = ({ day }: Props) => {
  const today = new Date(day);
  const { currentDate, dateList } = useMemo(() => getWeekList(today), [today]);

  return (
    <Container>
      <LessonTypeContainer>
        <LessonTypeRow>
          <div className={css({ backgroundColor: 'var(--green200)' })} />
          출석
        </LessonTypeRow>
        <LessonTypeRow>
          <div className={css({ backgroundColor: 'var(--grey1000)' })} />
          결석
        </LessonTypeRow>
        <LessonTypeRow>
          <div className={css({ backgroundColor: 'var(--blue400)' })} />
          예약
        </LessonTypeRow>
        <LessonTypeRow>
          <div className={css({ backgroundColor: 'var(--gold100)' })} />
          보강
        </LessonTypeRow>
        <LessonTypeRow>
          <div className={css({ backgroundColor: 'var(--purple100)' })} />
          강습취소
        </LessonTypeRow>
      </LessonTypeContainer>
      <div>
        <CalendarWeekHeaderContainer>
          {STRING_WEEK_LIST_KR.map((item) => {
            return (
              <div
                key={item}
                className={css({ width: 'calc(100% / 7)', fontWeight: 500 })}
              >
                {item}
              </div>
            );
          })}
        </CalendarWeekHeaderContainer>
        {dateList.map((list, index) => {
          return (
            <div
              key={index}
              className={flex({
                flexWrap: 'wrap',
                width: '100%',
              })}
            >
              {list.dateWeekList.map((item) => {
                let date = item.date;
                if (typeof date === 'string') date = '';
                const dateItemColor =
                  item.day === 'Sat'
                    ? 'var(--blue100)'
                    : item.day === 'Sun'
                    ? 'var(--red200)'
                    : '';

                return (
                  <DateList
                    key={item.date}
                    className={css({ color: dateItemColor })}
                  >
                    <span
                      className={css({
                        backgroundColor:
                          date === currentDate
                            ? 'var(--business-active-color)'
                            : '',
                        color: date === currentDate ? 'var(--white100)' : '',
                        padding: date === currentDate ? '2px 6px' : '2px 0',
                        borderRadius: '4px',
                      })}
                    >
                      {date}
                    </span>
                  </DateList>
                );
              })}
            </div>
          );
        })}
      </div>
    </Container>
  );
};

const Container = styled('div', {
  base: {
    position: 'relative',
    height: '82%',
    overflowY: 'scroll',
  },
});

const LessonTypeContainer = styled('div', {
  base: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: '8px 24px',
    margin: '0 0 16px 0',
  },
});

const LessonTypeRow = styled('dl', {
  base: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 700,
    margin: '0 24px 0 0',

    '&div': {
      width: '16px',
      height: '16px',
      borderRadius: '4px',
      margin: '0 6px 0 0',
    },
  },
});

const CalendarWeekHeaderContainer = styled('div', {
  base: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    borderBottom: '1px solid var(--grey110)',
    textAlign: 'center',
    padding: '0 0 16px 0',
  },
});

const DateList = styled('div', {
  base: {
    position: 'relative',
    width: 'calc(100% / 7)',
    minHeight: '96px',
    borderRight: '1px solid var(--grey110)',
    borderBottom: '1px solid var(--grey110)',
    padding: '8px',
    fontWeight: 300,
  },
});

export default ModalCalendar;
