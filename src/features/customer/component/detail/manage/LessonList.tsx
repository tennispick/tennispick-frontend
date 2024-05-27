import ManageListRow from './ListRow';
import { CustomerAllLessonListQueryData } from '@features/customer/type/customer.type';
import { Button } from '@components/index';
import { transferLessonType } from '@features/schedule/util/transfer';

type Props = {
  data: CustomerAllLessonListQueryData[];
};

const ManageLessonList = ({ data }: Props) => {
  const onCheckCustomerLessonStatus = (
    centerCoachId: number | null,
    remainLessonCount: number,
    registerAbleCount: number,
  ) => {
    let label = '';
    let style = {};

    if (centerCoachId === null) {
      label = '등록필요';
      style = {
        backgroundColor: 'var(--red200)',
        color: 'var(--white100)',
      };
    } else if (remainLessonCount === 0) {
      label = '수강종료';
      style = {
        backgroundColor: 'var(--grey500)',
        color: 'var(--grey800)',
      };
    } else if (
      remainLessonCount === registerAbleCount &&
      remainLessonCount > 0
    ) {
      label = '시작전';
      style = {
        backgroundColor: 'var(--green200)',
        color: 'var(--white100)',
      };
    } else if (
      remainLessonCount !== registerAbleCount &&
      remainLessonCount > 0
    ) {
      label = '수강중';
      style = {
        backgroundColor: 'var(--blue300)',
        color: 'var(--white100)',
      };
    } else {
      label = '수강대기';
      style = {
        backgroundColor: 'var(--blue100)',
        color: 'var(--white100)',
      };
    }

    return (
      <div
        css={{
          width: '10%',
          fontWeight: '500',
          padding: '8px 0',
          borderRadius: '6px',
          ...style,
        }}
      >
        {label}
      </div>
    );
  };

  return (
    <>
      <div
        css={{
          height: '28px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          fontSize: '0.9rem',
          padding: '6px 8px',
          gap: '2px',
        }}
      >
        <div css={{ width: '10%' }}>상태</div>
        <div css={{ width: '20%' }}>상품명</div>
        <div css={{ width: '8%' }}>강습유형</div>
        <div css={{ width: '15%' }}>코치</div>
        <div css={{ width: '10%' }}>수강현황</div>
        <div css={{ width: '20%' }}>결제날짜</div>
        <div css={{ width: '22%' }}></div>
      </div>
      <div
        css={{
          height: 'calc(100% - 28px)',
          padding: '8px 0',
          overflowY: 'auto',
          fontSize: '0.9rem',
        }}
      >
        {data.map((item, index) => {
          const {
            id,
            centerCoachId,
            lessonName,
            type,
            coachName,
            remainLessonCount,
            registerAbleCount,
            paymentDt,
          } = item;

          return (
            <ManageListRow key={`${index}-${id}`}>
              {onCheckCustomerLessonStatus(
                centerCoachId,
                remainLessonCount,
                registerAbleCount,
              )}
              <div css={{ width: '20%' }}>{lessonName}</div>
              <div css={{ width: '8%' }}>{transferLessonType(type)}</div>
              <div css={{ width: '15%' }}>{coachName ?? '-'}</div>
              <div
                css={{ width: '10%' }}
              >{`${remainLessonCount}회 / ${registerAbleCount}회`}</div>
              <div css={{ width: '20%' }}>{paymentDt}</div>
              <div css={{ width: '22%', display: 'flex' }}>
                <Button
                  label="수강변경"
                  css={{
                    width: '46%',
                    backgroundColor: 'var(--business-active-color)',
                    color: 'var(--white100)',
                    fontWeight: '500',
                    padding: '8px 0',
                    borderRadius: '6px',
                    border: 0,
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    margin: '0 4% 0 4%',
                  }}
                />
                <Button
                  label="상세보기"
                  css={{
                    width: '46%',
                    backgroundColor: 'var(--business-color)',
                    color: 'var(--white100)',
                    fontWeight: '500',
                    padding: '8px 0',
                    borderRadius: '6px',
                    border: 0,
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                  }}
                />
              </div>
            </ManageListRow>
          );
        })}
      </div>
    </>
  );
};

export default ManageLessonList;
