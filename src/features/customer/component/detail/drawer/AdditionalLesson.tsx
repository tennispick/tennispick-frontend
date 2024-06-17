import { CustomerAdditionalLessonListData } from '@features/customer/type/customer.type';
import DrawerInputContainer from './InputContainer';
import { Button } from '@components/index';
import { DeleteWhiteIcon } from '@icons/index';
import { FormEventHandler } from 'react';
import { deleteCustomerAdditionalLesson } from '@apis/customer/customer.api';

type Props = {
  item: CustomerAdditionalLessonListData;
};

const DrawerAdditionalLesson = ({ item }: Props) => {
  const {
    id,
    courtName,
    coachName,
    originDate,
    originStartTime,
    originEndTime,
    additionalDate,
    additionalStartTime,
    additionalEndTime,
  } = item;

  const onSubmitHandler: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const { data } = await deleteCustomerAdditionalLesson(id);

    if (data.affectedRows > 0) {
      alert('보강이 취소되었어요.');
    } else {
      alert('보강 취소에 실패했어요.\n관리자에게 문의해주세요.');
    }
    window.location.reload();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <DrawerInputContainer label="코트명" value={courtName} />
      <DrawerInputContainer label="코치명" value={coachName} />
      <DrawerInputContainer label="기존 강습 예약날짜" value={originDate} />
      <DrawerInputContainer
        label="기존 강습 시작시간"
        value={originStartTime}
      />
      <DrawerInputContainer label="기존 강습 종료시간" value={originEndTime} />
      <DrawerInputContainer label="보강 예약날짜" value={additionalDate} />
      <DrawerInputContainer label="보강 시작시간" value={additionalStartTime} />
      <DrawerInputContainer label="보강 종료시간" value={additionalEndTime} />
      <div
        css={{
          position: 'fixed',
          bottom: '20px',
        }}
      >
        <Button
          type="submit"
          label="보강 취소하기"
          variant="iconBtn"
          src={DeleteWhiteIcon}
          css={{
            width: 'calc(40vw - 40px)',
            border: 0,
            justifyContent: 'center',
            backgroundColor: 'var(--red200)',
            color: 'var(--white100)',
            padding: '12px 16px',
            margin: '0 12px 0 0',
          }}
        />
      </div>
    </form>
  );
};

export default DrawerAdditionalLesson;
