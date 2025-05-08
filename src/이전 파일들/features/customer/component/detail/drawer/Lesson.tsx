import { CustomerAllLessonListQueryData } from '@/이전 파일들/features/customer/type/customer.type';
import DrawerInputContainer from './InputContainer';
import {
  transferLessonDateType,
  transferLessonType,
} from '@/이전 파일들/features/schedule/util/transfer';
import { DeleteWhiteIcon } from 'src/이전 파일들/assets/icons/index';
import { LessonStatus } from '@/이전 파일들/features/customer/util/lesson';
import ManageListRow from '../manage/ListRow';
import { useCustomerLessonScheduleHistoryQuery } from '@/이전 파일들/features/customer/query/CustomerQuery';
import { CustomerLessonScheduleHistoryData } from 'src/이전 파일들/apis/customer/customer.type';
import { FormEventHandler } from 'react';
import { deleteCustomerLesson } from 'src/이전 파일들/apis/customer/customer.api';
import { useQueryClient } from '@tanstack/react-query';
import { URL_FETCH_CUSTOMER_ALL_LESSON_LIST } from 'src/이전 파일들/apis/customer/customer.url';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import IconButton from 'src/이전 파일들/components/button/IconButton';

type Props = {
  data: CustomerAllLessonListQueryData;
};

const DrawerLesson = ({ data }: Props) => {
  const queryClient = useQueryClient();

  const {
    id,
    customerId,
    centerCoachId,
    lessonName,
    type,
    coachName,
    remainLessonCount,
    registerAbleCount,
    paymentDt,
  } = data;

  const { data: initialLessonScheduleHistoryData } =
    useCustomerLessonScheduleHistoryQuery({
      customerId: customerId,
      customerLessonId: id,
    });

  const onSubmitHandler: FormEventHandler = async (e) => {
    e.preventDefault();

    if (!window.confirm('수강을 삭제하시겠습니까?')) return;

    const { data } = await deleteCustomerLesson({ customerLessonId: id });
    if (data.affectedRows > 0) {
      alert('수강이 삭제되었어요.');
      queryClient.invalidateQueries({
        queryKey: [URL_FETCH_CUSTOMER_ALL_LESSON_LIST, customerId],
      });
    } else alert('수강 삭제에 실패했어요.\n관리자에게 문의해주세요.');

    window.location.reload();
  };

  return (
    <>
      <form
        id="customerDetailDrawerForm"
        onSubmit={onSubmitHandler}
        className={css({ height: 'calc(100% - 56px)', overflowY: 'scroll' })}
      >
        <DrawerInputContainer
          label="상태"
          value={LessonStatus(
            centerCoachId,
            remainLessonCount,
            registerAbleCount,
          )}
          readOnly
        />
        <DrawerInputContainer label="레슨명" value={lessonName} readOnly />
        <DrawerInputContainer
          label="레슨유형"
          value={transferLessonType(type)}
          readOnly
        />
        <DrawerInputContainer
          label="담당코치"
          value={coachName ?? '-'}
          readOnly
        />
        <DrawerInputContainer
          label="결제날짜"
          value={paymentDt ?? '-'}
          readOnly
        />
        <DrawerInputContainer
          label="수강현황"
          value={`${remainLessonCount}회 / ${registerAbleCount}회`}
          readOnly
        />
        <div
          className={css({
            fontWeight: 600,
            fontSize: '0.925rem',
            padding: '0 0 0 4px',
          })}
        >
          수강이력
        </div>
        <div
          className={flex({
            height: '28px',
            alignItems: 'center',
            textAlign: 'center',
            margin: '12px 0 0 0',
            padding: '6px 8px',

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
            height: 'calc(100% - (17.15rem + 312px))',
            padding: '8px 0',
            overflowY: 'auto',

            '& div': {
              fontSize: '0.875rem',
            },
          })}
        >
          {initialLessonScheduleHistoryData &&
          initialLessonScheduleHistoryData.length > 0 ? (
            initialLessonScheduleHistoryData.map(
              (item: CustomerLessonScheduleHistoryData, index: number) => {
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

                return (
                  <ManageListRow
                    key={`${index}-${centerCoachId}`}
                    className={css({
                      color: isAttendance === 'Y' ? '' : 'var(--red100)',
                      opacity: isAttendance === 'Y' ? 1 : 0.65,
                      cursor: 'default',
                    })}
                  >
                    <div className={css({ width: '10%' })}>
                      {isAttendance === 'Y' ? '출석' : '결석'}
                    </div>
                    <div className={css({ width: '15%' })}>
                      {coachName ?? '-'}
                    </div>
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
              },
            )
          ) : (
            <div className={css({ textAlign: 'center', margin: '16px 0 0 0' })}>
              수강이력이 존재하지 않아요.
            </div>
          )}
        </div>
      </form>
      <IconButton
        form="customerDetailDrawerForm"
        type="submit"
        iconAlign="left"
        iconAlt="delete"
        iconSrc={DeleteWhiteIcon}
        size="lg"
        variant="negative"
        label={'수강 삭제하기'}
        full={true}
        className={css({ margin: '12px 0 0 0' })}
      />
    </>
  );
};

export default DrawerLesson;
