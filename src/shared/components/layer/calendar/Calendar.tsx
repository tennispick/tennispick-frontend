import { useMemo } from 'react';
import { getWeekList } from 'src/shared/utils/date';
import { STRING_WEEK_LIST_KR } from '@features/schedule/constants/schedule';

type Props = {
  day: Date;
};

const ModalCalendar = ({ day }: Props) => {
  const today = new Date(day);
  const { currentDate, dateList } = useMemo(() => getWeekList(today), [today]);

  return (
    <div className="relative h-[82%] overflow-y-scroll">
      <div className="relative mb-4 flex items-center px-6 py-2">
        <dl className="mr-6 flex items-center font-bold">
          <div className="mr-1.5 h-4 w-4 rounded bg-[var(--green200)]" />
          출석
        </dl>
        <dl className="mr-6 flex items-center font-bold">
          <div className="mr-1.5 h-4 w-4 rounded bg-[var(--grey1000)]" />
          결석
        </dl>
        <dl className="mr-6 flex items-center font-bold">
          <div className="mr-1.5 h-4 w-4 rounded bg-[var(--blue400)]" />
          예약
        </dl>
        <dl className="mr-6 flex items-center font-bold">
          <div className="mr-1.5 h-4 w-4 rounded bg-[var(--gold100)]" />
          보강
        </dl>
        <dl className="mr-6 flex items-center font-bold">
          <div className="mr-1.5 h-4 w-4 rounded bg-[var(--purple100)]" />
          강습취소
        </dl>
      </div>
      <div>
        <div className="relative flex w-full items-center border-b border-b-[var(--grey110)] pb-4 text-center">
          {STRING_WEEK_LIST_KR.map((item) => {
            return (
              <div key={item} className="w-[calc(100%/7)] font-medium">
                {item}
              </div>
            );
          })}
        </div>
        {dateList.map((list, index) => {
          return (
            <div key={index} className="flex w-full flex-wrap">
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
                  <div
                    key={item.date}
                    className="relative min-h-24 w-[calc(100%/7)] border-b border-r border-b-[var(--grey110)] border-r-[var(--grey110)] p-2 font-light"
                    style={{ color: dateItemColor }}
                  >
                    <span
                      className={`rounded px-1.5 py-0.5 ${
                        date === currentDate
                          ? 'bg-[var(--business-active-color)] text-[var(--white100)]'
                          : ''
                      }`}
                    >
                      {date}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ModalCalendar;
