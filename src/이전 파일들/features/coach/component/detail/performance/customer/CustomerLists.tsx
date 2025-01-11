import { css } from 'styled-system/css';
import { useCoachCustomersQuery } from '@/이전 파일들/features/coach/query/coachQuery';
import { flex } from 'styled-system/patterns';
import { NoResult } from 'src/이전 파일들/components/index';
import { styled } from 'styled-system/jsx';
import { CoachCustomersData } from 'src/이전 파일들/apis/coach/coach.type';
import { transferSexType } from 'src/이전 파일들/utils/switch';

type Props = {
  coachId: string;
  checkedItems: Array<string>;
  keyword: string;
  searchCondition: string;
};

const CustomerLists = ({
  coachId,
  checkedItems,
  keyword,
  searchCondition,
}: Props) => {
  const { isLoading, data } = useCoachCustomersQuery({
    page: 1,
    coachId,
    checkedItems,
    keyword,
    searchCondition,
  });

  if (isLoading || !data) return <></>;

  return (
    <div
      className={css({
        height: 'calc(100% - (128px + 3rem))',
        borderTop: '1px solid var(--grey100)',
        padding: '0.825rem 0',
      })}
    >
      <SalesListsHeader />
      <SalesLists data={data?.pages} />
    </div>
  );
};

const SalesListsHeader = () => {
  return (
    <ul
      role="rowheader"
      className={flex({
        padding: '0 16px',

        '& li': {
          fontSize: '0.875rem',
          fontWeight: 600,
        },
      })}
    >
      <li className={css({ width: '10%' })}>{'이름'}</li>
      <li className={css({ width: '5%' })}>{'성별'}</li>
      <li className={css({ width: '15%' })}>{'연락처'}</li>
      <li className={css({ width: '15%' })}>{'최근 레슨'}</li>
      <li className={css({ width: '15%' })}>{'다음 레슨'}</li>
      <li className={css({ width: '17.5%' })}>{'레슨권'}</li>
      <li className={css({ width: '12.5%' })}>{'남은 수강횟수'}</li>
      <li className={css({ width: '10%' })}>{'레슨금액'}</li>
    </ul>
  );
};

const SalesLists = ({ data }: { data: CoachCustomersData[] }) => {
  if (data.length === 0)
    return (
      <NoResultContainer>
        <NoResult description={'데이터가 없어요.'} />
      </NoResultContainer>
    );

  return (
    <>
      {data.map(
        (
          {
            customerId,
            centerId,
            name,
            lessonName,
            sex,
            phone,
            recentLessonTime,
            nextLessonTime,
            price,
            remainLessonCount,
          },
          index,
        ) => {
          return (
            <ul
              key={`${centerId}-${customerId}-${name}-${index}`}
              role="row"
              className={flex({
                padding: '10px 16px',
                margin: '4px 0 0 0',

                '& li': {
                  fontSize: '0.825rem',
                },

                _hover: {
                  backgroundColor: 'var(--blue1200)',
                  borderRadius: '8px',
                },
              })}
            >
              <li className={css({ width: '10%' })}>{name}</li>
              <li className={css({ width: '5%' })}>{transferSexType(sex)}</li>
              <li className={css({ width: '15%' })}>{phone}</li>
              <li className={css({ width: '15%' })}>
                {recentLessonTime ?? '-'}
              </li>
              <li className={css({ width: '15%' })}>{nextLessonTime ?? '-'}</li>
              <li className={css({ width: '17.5%' })}>{lessonName}</li>
              <li className={css({ width: '12.5%' })}>
                {remainLessonCount} 회
              </li>
              <li className={css({ width: '10%' })}>{price}</li>
            </ul>
          );
        },
      )}
    </>
  );
};

const NoResultContainer = styled('div', {
  base: {
    width: '100%',
    height: '100%',
    padding: '16px 0',
    borderRadius: '8px',
  },
});

export default CustomerLists;
