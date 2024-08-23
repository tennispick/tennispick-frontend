import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

const ScheduleModalRegularLessonIndividualScheduleTableHeader = () => {
  return (
    <div
      className={flex({
        width: '100%',
        alignItems: 'center',
        margin: '0 0 16px 0',
        borderTop: '1px solid var(--grey100)',
        borderBottom: '1px solid var(--grey100)',
        padding: '12px 0',

        '& div': {
          padding: '0 0 0 8px',
        },
      })}
    >
      <div
        className={css({
          width: '15%',
          padding: '0 0 0 8px',
          margin: '0 6px 0 0',
        })}
      >
        강습날짜 유형
      </div>
      <div
        className={css({
          width: '15%',
          padding: '0 0 0 8px',
          margin: '0 6px 0 0',
        })}
      >
        강습시간
      </div>
      <div
        className={css({
          width: '15%',
          padding: '0 0 0 8px',
          margin: '0 6px 0 0',
        })}
      >
        강습코치
      </div>
      <div
        className={css({
          width: '15%',
          padding: '0 0 0 8px',
          margin: '0 6px 0 0',
        })}
      >
        코트
      </div>
      <div
        className={css({
          width: '40%',
          padding: '0 0 0 8px',
          margin: '0 6px 0 0',
        })}
      >
        스케줄 등록
      </div>
    </div>
  );
};

export default ScheduleModalRegularLessonIndividualScheduleTableHeader;
