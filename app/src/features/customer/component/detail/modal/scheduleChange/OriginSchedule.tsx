import { CustomerLessonScheduleHistoryData } from 'app/src/apis/customer/customer.type';
import { useCustomerLessonScheduleHistoryQuery } from 'app/src/features/customer/query/CustomerQuery';
import ManageListRow from '../../manage/ListRow';
import {
  transferLessonDateType,
  transferLessonType,
} from 'app/src/features/schedule/util/transfer';
import { isEmptyObj } from 'app/src/utils/object';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

type Props = {
  customerId: number;
  customerLessonId: number;
  onClickSelectOriginScheduleHandler: (
    item: CustomerLessonScheduleHistoryData,
  ) => void;
  selectSchedule: CustomerLessonScheduleHistoryData;
};

const OriginSchedule = ({
  customerId,
  customerLessonId,
  onClickSelectOriginScheduleHandler,
  selectSchedule,
}: Props) => {
  const { data } = useCustomerLessonScheduleHistoryQuery({
    customerId,
    customerLessonId,
  });

  return (
    <section className={css({ margin: '0 0 12px 0' })}>
      <div className={css({ fontWeight: 600 })}>변경 전 일정</div>
      <div
        className={flex({
          height: '28px',
          alignItems: 'center',
          textAlign: 'center',
          margin: '8px 0 0 0',
          padding: '6px 0',

          '& div': {
            fontSize: '0.875rem',
          },
        })}
      >
        <div className={css({ width: '10%' })}>출석여부</div>
        <div className={css({ width: '15%' })}>코치</div>
        <div className={css({ width: '10%' })}>보강유무</div>
        <div className={css({ width: '15%' })}>레슨 유형</div>
        <div className={css({ width: '15%' })}>예약 유형</div>
        <div className={css({ width: '15%' })}>날짜</div>
        <div className={css({ width: '10%' })}>시작시간</div>
        <div className={css({ width: '10%' })}>종료시간</div>
      </div>
      <div
        className={css({
          maxHeight: '8rem',
          padding: '8px 0',
          overflowY: 'auto',
          margin: '0 0 8px 0',

          '& div': {
            fontSize: '0.875rem',
          },
        })}
      >
        {data && data.length > 0 ? (
          data.map((item: CustomerLessonScheduleHistoryData, index: number) => {
            const {
              id: centerCoachId,
              coachName,
              date,
              isAttendance,
              isRegularLesson,
              lessonDateType,
              lessonType,
              startTime,
              endTime,
            } = item;

            const isSelect = selectSchedule.id === centerCoachId;

            return (
              <ManageListRow
                key={`${index}-${centerCoachId}`}
                className={css({
                  padding: '4px 0',
                  height: '36px',
                  backgroundColor: isSelect
                    ? 'var(--grey200)'
                    : 'var(--white100)',
                  cursor: 'pointer',
                })}
                onClick={() => onClickSelectOriginScheduleHandler(item)}
              >
                <div className={css({ width: '10%' })}>
                  {isAttendance === 'Y' ? '출석' : '결석'}
                </div>
                <div className={css({ width: '15%' })}>{coachName ?? '-'}</div>
                <div className={css({ width: '10%' })}>
                  {isRegularLesson === 'Y' ? '정규레슨' : '보강레슨'}
                </div>
                <div className={css({ width: '15%' })}>
                  {transferLessonType(lessonType)}강습
                </div>
                <div className={css({ width: '15%' })}>
                  {transferLessonDateType(lessonDateType)}로 예약
                </div>
                <div className={css({ width: '15%' })}>{date}</div>
                <div className={css({ width: '10%' })}>{startTime}</div>
                <div className={css({ width: '10%' })}>{endTime}</div>
              </ManageListRow>
            );
          })
        ) : (
          <div className={css({ textAlign: 'center', margin: '16px 0 0 0' })}>
            수강이력이 존재하지 않아요.
          </div>
        )}
      </div>
      <div className={css({ fontWeight: 600 })}>선택 변경 대상 일정</div>
      <div
        className={flex({
          height: '28px',
          alignItems: 'center',
          textAlign: 'center',
          margin: '8px 0 0 0',
          padding: '6px 0',

          '& div': {
            fontSize: '0.875rem',
          },
        })}
      >
        <div className={css({ width: '10%' })}>출석여부</div>
        <div className={css({ width: '15%' })}>코치</div>
        <div className={css({ width: '10%' })}>보강유무</div>
        <div className={css({ width: '15%' })}>레슨 유형</div>
        <div className={css({ width: '15%' })}>예약 유형</div>
        <div className={css({ width: '15%' })}>날짜</div>
        <div className={css({ width: '10%' })}>시작시간</div>
        <div className={css({ width: '10%' })}>종료시간</div>
      </div>
      <div
        className={css({
          '& div': {
            fontSize: '0.875rem',
          },
        })}
      >
        {!isEmptyObj(selectSchedule) ? (
          <ManageListRow
            className={css({
              cursor: 'default',
              padding: '4px 0',
              height: '36px',
            })}
          >
            <div className={css({ width: '10%' })}>
              {selectSchedule.isAttendance === 'Y' ? '출석' : '결석'}
            </div>
            <div className={css({ width: '15%' })}>
              {selectSchedule.coachName ?? '-'}
            </div>
            <div className={css({ width: '10%' })}>
              {selectSchedule.isRegularLesson === 'Y' ? '정규레슨' : '보강레슨'}
            </div>
            <div className={css({ width: '15%' })}>
              {transferLessonType(selectSchedule.lessonType)}강습
            </div>
            <div className={css({ width: '15%' })}>
              {transferLessonDateType(selectSchedule.lessonDateType)}로 예약
            </div>
            <div className={css({ width: '15%' })}>{selectSchedule.date}</div>
            <div className={css({ width: '10%' })}>
              {selectSchedule.startTime}
            </div>
            <div className={css({ width: '10%' })}>
              {selectSchedule.endTime}
            </div>
          </ManageListRow>
        ) : (
          <div
            className={css({
              textAlign: 'center',
              padding: '12px 0 8px 0',
              fontSize: '0.875rem',
            })}
          >
            선택된 일정이 없어요.
          </div>
        )}
      </div>
    </section>
  );
};

export default OriginSchedule;
