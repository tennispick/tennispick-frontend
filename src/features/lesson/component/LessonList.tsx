import { LessonListQueryData } from '../type/lesson.type';

import { NoResult, NormalList as Li } from '@components/index';
import { useRouter } from 'next/navigation';

type Props = {
  list: LessonListQueryData[];
};

const LessonList = ({ list }: Props) => {
  const router = useRouter();

  return (
    <>
      {list && list.length > 0 ? (
        <Li.UnOrderList height={'88%'}>
          {list.map(
            ({
              id,
              name,
              lessonCount,
              price,
              isWeekday,
              type,
              time,
              timesAWeek,
            }) => {
              return (
                <Li
                  key={id}
                  onClick={() => router.push(`/lesson/${id}`)}
                  css={{
                    minHeight: '48px',
                    padding: '0 12px',
                  }}
                >
                  <div
                    css={{
                      width: '56px',
                      height: '24px',
                      lineHeight: '24px',
                      textAlign: 'center',
                      margin: '0 auto',
                      backgroundColor:
                        isWeekday === 'weekend'
                          ? 'var(--business-active-color)'
                          : 'var(--green200)',
                      color: 'var(--white100)',
                      borderRadius: '4px',
                    }}
                  >
                    {isWeekday === 'weekend' ? '주말' : '평일'}
                  </div>
                  <div css={{ width: '65%', padding: '0 0 0 16px' }}>
                    {name}
                  </div>
                  <div css={{ width: '9%', textAlign: 'center' }}>
                    총 레슨횟수: {lessonCount}회
                  </div>
                  <div
                    css={{
                      width: 'calc(10% - 32px)',
                      textAlign: 'right',
                      margin: '0 32px 0 0',
                    }}
                  >
                    {price}원
                  </div>
                  <div css={{ width: '4%', textAlign: 'center' }}>
                    {type === 'private' ? '개인' : '그룹'}
                  </div>
                  <div css={{ width: '4%', textAlign: 'center' }}>{time}분</div>
                  <div css={{ width: '4%', textAlign: 'center' }}>
                    주 {timesAWeek}회
                  </div>
                </Li>
              );
            },
          )}
        </Li.UnOrderList>
      ) : (
        <div
          css={{
            position: 'relative',
            height: '20vh',
            borderRadius: '25px',
          }}
        >
          <NoResult
            description={'생성된 레슨권이 존재하지 않아요.'}
            margin="16px 0 0 0"
          />
        </div>
      )}
    </>
  );
};

export default LessonList;
