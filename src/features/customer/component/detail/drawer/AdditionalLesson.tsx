import { CustomerAdditionalLessonListData } from '@features/customer/type/customer.type';
import DrawerInputContainer from './InputContainer';
import { DeleteWhiteIcon } from '@icons/index';
import { FormEventHandler } from 'react';
import { deleteCustomerAdditionalLesson } from '@apis/customer/customer.api';
import IconButton from '@components/button/IconButton';
import { css } from 'styled-system/css';

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
    <form onSubmit={onSubmitHandler} className={css({ height: '100%' })}>
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
      <IconButton
        type="submit"
        iconAlign="left"
        iconAlt="cancel"
        iconSrc={DeleteWhiteIcon}
        size="lg"
        variant="negative"
        label={'보강 취소하기'}
        full={true}
        className={css({
          position: 'absolute',
          bottom: 0,
          margin: '12px 0 0 0',
        })}
      />
    </form>
  );
};

export default DrawerAdditionalLesson;
