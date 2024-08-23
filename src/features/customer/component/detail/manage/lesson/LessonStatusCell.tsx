import { css } from 'styled-system/css';

export const LessonStatusCell = (status: string) => {
  let style = {};

  if (status === '등록필요') {
    style = {
      backgroundColor: 'var(--red200)',
      color: 'var(--white100)',
    };
  } else if (status === '수강종료') {
    style = {
      backgroundColor: 'var(--grey500)',
      color: 'var(--grey800)',
    };
  } else if (status === '시작전') {
    style = {
      backgroundColor: 'var(--green200)',
      color: 'var(--white100)',
    };
  } else if (status === '수강중') {
    style = {
      backgroundColor: 'var(--blue300)',
      color: 'var(--white100)',
    };
  } else {
    style = {
      backgroundColor: 'var(--blue100)',
      color: 'var(--white100)',
    };
  }

  return (
    <div
      className={css(
        {
          width: '10%',
          fontWeight: '500',
          padding: '8px 0',
          borderRadius: '6px',
        },
        style,
      )}
    >
      {status}
    </div>
  );
};
