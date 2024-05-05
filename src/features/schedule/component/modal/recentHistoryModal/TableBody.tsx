import { CustomerLessonHistoryData } from '@apis/customer/customer.type';
import { transferLessonDateType } from '@features/schedule/util/transfer';
import { MouseEvent } from 'react';

type Props = {
  checkHistoryId: string;
  onClickRadioHandler: (e: MouseEvent<HTMLInputElement>) => void;
  data: CustomerLessonHistoryData['lessonHistory'][];
};

const ScheduleModalRecentHistoryModalTableBody = ({
  checkHistoryId,
  onClickRadioHandler,
  data,
}: Props) => {
  return (
    <table
      css={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}
    >
      <colgroup>
        <col css={{ width: '36px' }} />
        <col css={{ width: '72px' }} />
        <col css={{ width: '152px' }} />
        <col css={{ width: '100px' }} />
        <col css={{ width: '150px' }} />
        <col css={{ width: '120px' }} />
        <col css={{ width: '110px' }} />
        <col css={{ width: '120px' }} />
      </colgroup>
      <thead
        css={{
          'tr > th': {
            textAlign: 'left',
            backgroundColor: 'var(--business-color)',
            color: 'var(--white100)',
            padding: '10px 8px ',
            fontSize: '1rem',
          },
        }}
      >
        <tr>
          <th></th>
          <th>회원명</th>
          <th>수강권</th>
          <th>코치</th>
          <th>코트</th>
          <th>강습날짜 유형</th>
          <th>강습날짜</th>
          <th>강습시간</th>
        </tr>
      </thead>
      <tbody
        css={{
          minHeight: '210px',

          tr: {
            borderBottom: '1px solid var(--grey200)',
          },

          'tr > td:first-of-type': {
            textAlign: 'center',
          },

          'tr > td': {
            textAlign: 'left',
            padding: '12px 8px',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            fontSize: '0.925rem',
          },
        }}
      >
        {data.length === 0 && (
          <tr>
            <td colSpan={8}>최근 수강이력이 없어요.</td>
          </tr>
        )}
        {data.map(
          ({
            id,
            customerName,
            lessonName,
            coachName,
            courtName,
            lessonDateType,
            isAble,
            date,
            startTime,
            endTime,
          }) => {
            return (
              <tr key={id}>
                <td>
                  <input
                    type="radio"
                    name="history"
                    onClick={onClickRadioHandler}
                    value={id}
                    defaultChecked={Number(checkHistoryId) === id}
                    disabled={isAble === 'N' ? true : false}
                  />
                </td>
                <td>{customerName}</td>
                <td>{lessonName}</td>
                <td>{coachName}</td>
                <td>{courtName}</td>
                <td>{transferLessonDateType(lessonDateType)}</td>
                <td>{date}</td>
                <td>
                  {startTime} ~ {endTime}
                </td>
              </tr>
            );
          },
        )}
      </tbody>
    </table>
  );
};

export default ScheduleModalRecentHistoryModalTableBody;
